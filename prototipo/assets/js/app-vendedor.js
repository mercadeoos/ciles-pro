/* =========================================================
   CILES PRO — Estado mock del track Vendedores (localStorage)
   ========================================================= */

const VENDEDOR_KEY = "ciles_vendedor_v1";

function estadoVendedorPorDefecto(){
  return {
    registrado:false,
    uid:"", foto:"",
    nombre:"", email:"", ciudad:"", objetivo:"", objetivoOtro:"",
    completados:[],       // ids de módulo, ej "0.1"
    xp:0,
    racha:1,
    ultimaVisita:new Date().toISOString().slice(0,10),
    historialVisitas:[],  // fechas ISO (YYYY-MM-DD) de los últimos días con actividad
  };
}

function getEstadoVendedor(){
  try{
    const raw = localStorage.getItem(VENDEDOR_KEY);
    if(!raw) return estadoVendedorPorDefecto();
    return { ...estadoVendedorPorDefecto(), ...JSON.parse(raw) };
  }catch(e){ return estadoVendedorPorDefecto(); }
}

/** Escribe solo en el caché local (usado por firebase-vendedor.js al sincronizar desde Firestore). */
function setEstadoVendedorLocal(estado){
  localStorage.setItem(VENDEDOR_KEY, JSON.stringify(estado));
}

/** Escribe en el caché local y, si hay sesión de Google activa, también en Firestore. */
function setEstadoVendedor(estado){
  setEstadoVendedorLocal(estado);
  if(typeof fbAuth !== "undefined" && fbAuth.currentUser){
    const uid = fbAuth.currentUser.uid;
    docVendedorRef(uid).set(estado, {merge:true}).catch(err => console.error("Firestore:", err));
    // Copia pública mínima (sin correo) para el ranking — cualquier asesor puede leer esta colección.
    fbDb.collection("ranking_publico").doc(uid).set({
      nombre: estado.nombre, foto: estado.foto, ciudad: estado.ciudad,
      xp: estado.xp, modulos: estado.completados.length,
    }, {merge:true}).catch(err => console.error("Firestore ranking:", err));
  }
}

/**
 * Espera la sesión de Firebase (si el SDK está cargado), sincroniza el
 * progreso desde Firestore, y redirige al onboarding si falta login o
 * datos de perfil (ciudad/objetivo). Usar siempre con await.
 */
async function requiereOnboardingVendedor(){
  mostrarCargaVendedor();
  if(typeof esperarAuthVendedor === "function"){
    const user = await esperarAuthVendedor();
    if(!user){ location.href = "vendedores-onboarding.html"; return true; }
  }
  const e = getEstadoVendedor();
  if(!e.registrado) { location.href = "vendedores-onboarding.html"; return true; }
  const hoy = new Date().toISOString().slice(0,10);
  if(!(e.historialVisitas || []).includes(hoy)){
    registrarVisitaHoy(e);
    setEstadoVendedor(e);
  }
  ocultarCargaVendedor();
  return false;
}

function marcarModuloVendedorCompletado(id, xp){
  const e = getEstadoVendedor();
  if(!e.completados.includes(id)){
    e.completados.push(id);
    e.xp += xp;
    const hoy = new Date().toISOString().slice(0,10);
    if(e.ultimaVisita !== hoy) e.racha += 1;
    e.ultimaVisita = hoy;
  }
  setEstadoVendedor(e);
  return e;
}

function siguienteModuloVendedorPendiente(){
  const todos = todosModulosVendedor();
  const e = getEstadoVendedor();
  return todos.find(m => !e.completados.includes(m.id)) || null;
}

function progresoNivelVendedor(nivel){
  const e = getEstadoVendedor();
  const total = nivel.modulos.length;
  const hechos = nivel.modulos.filter(m => e.completados.includes(m.id)).length;
  return { hechos, total, pct: pct(hechos, total) };
}

function xpTotalNivelVendedor(nivel){
  return nivel.modulos.reduce((s,m) => s + m.gamificacion.xp, 0);
}

function xpGanadoNivelVendedor(nivel){
  const e = getEstadoVendedor();
  return nivel.modulos.filter(m => e.completados.includes(m.id)).reduce((s,m) => s + m.gamificacion.xp, 0);
}

function iniciales(nombre){
  if(!nombre) return "V";
  return nombre.trim().split(/\s+/).slice(0,2).map(p=>p[0].toUpperCase()).join("");
}

/* Barra de pestañas inferior compartida por las pantallas del track Vendedores */
function renderTabbarVendedor(activo){
  const tabs = [
    {href:"vendedores-home.html", key:"inicio", ic:"inicio", label:"Inicio"},
    {href:"vendedores-casa.html", key:"casa", ic:"casa", label:"Mi casa"},
    {href:"vendedores-progreso.html", key:"progreso", ic:"progreso", label:"Progreso"},
    {href:"vendedores-perfil.html", key:"perfil", ic:"perfil", label:"Perfil"},
  ];
  return `<nav class="tabbar">
    <div class="tabbar-brand"><img src="assets/img/logo-ciles.png" alt="CILES · Presente en el futuro"></div>
    ${tabs.map(t => `
    <a href="${t.href}" class="${t.key===activo?"active":""}">
      <span class="tab-ic">${uiIcon(t.ic, 21)}</span><span>${t.label}</span>
    </a>`).join("")}</nav>`;
}

/* ---------- Pantalla de carga con marca (mientras se resuelve la sesión) ---------- */
function mostrarCargaVendedor(){
  if(document.getElementById("app-loading")) return;
  const div = document.createElement("div");
  div.id = "app-loading";
  div.className = "app-loading";
  div.innerHTML = `<img src="assets/img/logo-ciles-icono.png" alt="" class="app-loading-logo"><div class="app-loading-ring"></div>`;
  document.body.appendChild(div);
}
function ocultarCargaVendedor(){
  const el = document.getElementById("app-loading");
  if(el) el.remove();
}

/* ---------- Confeti (celebración al completar un módulo) ---------- */
function lanzarConfeti(contenedor){
  const colores = ["#f5821f", "#001489", "#2fb6a8", "#e8a939", "#ef6f6c"];
  for(let i = 0; i < 26; i++){
    const p = document.createElement("span");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colores[i % colores.length];
    p.style.animationDuration = (0.9 + Math.random() * 0.6) + "s";
    p.style.animationDelay = (Math.random() * 0.3) + "s";
    p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    contenedor.appendChild(p);
  }
}

/* ---------- Racha semanal (últimos 7 días de actividad, estilo Duolingo) ---------- */
function registrarVisitaHoy(estado){
  const hoy = new Date().toISOString().slice(0,10);
  const hist = Array.isArray(estado.historialVisitas) ? estado.historialVisitas.slice() : [];
  if(!hist.includes(hoy)){
    hist.push(hoy);
    estado.historialVisitas = hist.slice(-30);
  }
  return estado;
}

function rachaSemanaHTML(estado){
  const hist = new Set(estado.historialVisitas || []);
  const dias = ["D","L","M","M","J","V","S"];
  const hoy = new Date();
  const celdas = [];
  for(let i = 6; i >= 0; i--){
    const d = new Date(hoy);
    d.setDate(hoy.getDate() - i);
    const iso = d.toISOString().slice(0,10);
    const activo = hist.has(iso);
    const esHoy = i === 0;
    celdas.push(`<div class="streak-day ${activo?"on":""} ${esHoy?"today":""}">
      <span class="streak-day-label">${dias[d.getDay()]}</span>
      <span class="streak-day-dot">${activo ? uiIcon("flama", 14) : ""}</span>
    </div>`);
  }
  return `<div class="streak-week">${celdas.join("")}</div>`;
}
