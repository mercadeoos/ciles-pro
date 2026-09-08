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
    docVendedorRef(fbAuth.currentUser.uid).set(estado, {merge:true}).catch(err => console.error("Firestore:", err));
  }
}

/**
 * Espera la sesión de Firebase (si el SDK está cargado), sincroniza el
 * progreso desde Firestore, y redirige al onboarding si falta login o
 * datos de perfil (ciudad/objetivo). Usar siempre con await.
 */
async function requiereOnboardingVendedor(){
  if(typeof esperarAuthVendedor === "function"){
    const user = await esperarAuthVendedor();
    if(!user){ location.href = "vendedores-onboarding.html"; return true; }
  }
  const e = getEstadoVendedor();
  if(!e.registrado) { location.href = "vendedores-onboarding.html"; return true; }
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
    {href:"vendedores-home.html", key:"inicio", ic:"🏠", label:"Inicio"},
    {href:"vendedores-casa.html", key:"casa", ic:"🏗️", label:"Mi casa"},
    {href:"vendedores-progreso.html", key:"progreso", ic:"📊", label:"Progreso"},
    {href:"vendedores-perfil.html", key:"perfil", ic:"👤", label:"Perfil"},
  ];
  return `<nav class="tabbar">
    <div class="tabbar-brand"><img src="assets/img/logo-ciles.png" alt="CILES · Presente en el futuro"></div>
    ${tabs.map(t => `
    <a href="${t.href}" class="${t.key===activo?"active":""}">
      <span class="tab-ic">${t.ic}</span><span>${t.label}</span>
    </a>`).join("")}</nav>`;
}
