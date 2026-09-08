/* =========================================================
   CILES PRO — comportamiento compartido (navbar, footer dinámico)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Resalta el link activo del navbar según data-page del <body>
  const page = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });

  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
  }

  // Puntos e iniciales del usuario mock en el navbar (si existen los nodos)
  if (typeof USUARIO !== "undefined") {
    document.querySelectorAll("[data-user-points]").forEach(el => {
      el.textContent = USUARIO.puntos.toLocaleString("es-CO") + " pts";
    });
    document.querySelectorAll("[data-user-initials]").forEach(el => {
      el.textContent = USUARIO.iniciales;
    });
  }

  // Año dinámico en el footer
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

function pct(part, total){
  if (!total) return 0;
  return Math.min(100, Math.round((part/total)*100));
}

/* Barra de pestañas inferior compartida por el track Instaladores (app shell) */
function renderTabbarInstalador(activo){
  const tabs = [
    {href:"universo.html", key:"inicio", ic:"🏠", label:"Inicio"},
    {href:"casa.html", key:"casa", ic:"🏗️", label:"Mi casa"},
    {href:"certificacion.html", key:"progreso", ic:"📊", label:"Progreso"},
    {href:"perfil.html", key:"perfil", ic:"👤", label:"Perfil"},
  ];
  return `<nav class="tabbar">${tabs.map(t => `
    <a href="${t.href}" class="${t.key===activo?"active":""}">
      <span class="tab-ic">${t.ic}</span><span>${t.label}</span>
    </a>`).join("")}</nav>`;
}
