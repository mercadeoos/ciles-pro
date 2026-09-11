/* =========================================================
   CILES PRO — Set de iconos "blob" con elementos eléctricos
   Sustituye las mascotas ilustradas (tipo Habitz) por productos
   reales del catálogo CILES dentro de una forma orgánica de color.
   ========================================================= */

const BLOB_COLORES = {
  coral:"#ef6f6c", teal:"#2fb6a8", purple:"#8b7bd8", gold:"#e8a939",
  navy:"#1b2470", orange:"#f5821f",
};

// Forma orgánica reutilizable (blob) — un solo path para todos los iconos.
const BLOB_PATH = "M50 4C68 4 84 12 92 28C100 44 98 62 86 76C74 90 54 98 36 92C18 86 4 68 4 48C4 26 22 4 50 4Z";

// Iconos lineales simples (viewBox 0 0 24 24, trazo blanco) por tipo de elemento eléctrico.
const ICONOS_LINEA = {
  bombilla:`<path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/><path d="M9.5 21h5M10 18v1M14 18v1"/>`,
  cable:`<path d="M4 6h4v4H4zM16 14h4v4h-4z"/><path d="M8 8c4 0 4 8 8 8"/>`,
  plano:`<path d="M3 4h13l5 5v11H3z"/><path d="M16 4v5h5"/><circle cx="9" cy="14" r="1.4"/><path d="M12 11h5M8 17h9"/>`,
  certificado:`<circle cx="12" cy="9" r="5.5"/><path d="M9 13.5 7.5 21 12 18.5 16.5 21 15 13.5"/>`,
  herramientas:`<path d="M14.5 3.5 20.5 9.5 12 18l-6-6 8.5-8.5Z"/><path d="M4 20l3-3"/>`,
  portafolio:`<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
  tomacorriente:`<rect x="5" y="4" width="14" height="16" rx="4"/><path d="M9.5 10v3M14.5 10v3M12 14v3"/>`,
  interruptor:`<rect x="6" y="4" width="12" height="16" rx="5"/><path d="M12 8v3"/><circle cx="12" cy="15" r="1"/>`,
  tablero:`<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7v10M13 7v4M13 14v3M17 7v10"/>`,
  proteccion:`<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z"/><path d="M9.5 12l1.8 1.8L14.5 10"/>`,
  sensor:`<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>`,
  venta:`<path d="M3 12h4l2-3 3 6 2-3h5"/><circle cx="19" cy="12" r="2"/>`,
  casco:`<path d="M4 15a8 8 0 0 1 16 0v2H4v-2Z"/><path d="M2 17h20M12 7V4"/>`,
  estrella:`<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z"/>`,
  chat:`<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12.5h5"/>`,
};

/**
 * Devuelve el markup SVG de un icono-blob.
 * @param {string} tipo   clave de ICONOS_LINEA
 * @param {string} color  clave de BLOB_COLORES (por defecto "orange")
 */
function blobIcon(tipo, color){
  const fill = BLOB_COLORES[color] || BLOB_COLORES.orange;
  const linea = ICONOS_LINEA[tipo] || ICONOS_LINEA.bombilla;
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="${BLOB_PATH}" fill="${fill}"/>
    <g transform="translate(26,26) scale(2)" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${linea}</g>
  </svg>`;
}

/** Devuelve el HTML de un .blob-icon completo listo para insertar. */
function blobIconHTML(tipo, color, size){
  return `<span class="blob-icon size-${size || "md"}">${blobIcon(tipo, color)}</span>`;
}

/* =========================================================
   Íconos de interfaz (navegación, estados) — trazo simple en
   currentColor, para que hereden el color activo/inactivo por CSS
   en vez de depender de emoji (que se ven distinto en cada SO).
   ========================================================= */
const UI_ICONOS = {
  inicio:`<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>`,
  casa:`<path d="M3 21V9l9-6 9 6v12"/><path d="M8 21v-7h8v7"/><path d="M9 9h6"/>`,
  progreso:`<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>`,
  perfil:`<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6"/>`,
  flama:`<path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-1-2-1-2 1 4-1 5-1 5a5 5 0 0 1-9-3c0-4 3-5 5-7Z"/>`,
  trofeo:`<path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4v2a4 4 0 0 0 4 4M17 5h3v2a4 4 0 0 1-4 4"/><path d="M12 14v3M9 21h6M9.5 21c0-2 1-3 2.5-3s2.5 1 2.5 3"/>`,
  medalla:`<circle cx="12" cy="14" r="6.5"/><path d="m9 8-3-6M15 8l3-6M8.5 13.7 11 16l4-4.5"/>`,
  buscar:`<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/>`,
  cerrar:`<path d="M5 5l14 14M19 5 5 19"/>`,
  chevron:`<path d="m9 6 6 6-6 6"/>`,
  salir:`<path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>`,
  panel:`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>`,
  check:`<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.5 2.5L16 9"/>`,
  equis:`<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>`,
  play:`<circle cx="12" cy="12" r="9.5"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none"/>`,
  imagen:`<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m4 17 5-4.5 3.5 3 3.5-4L21 17"/>`,
  foco:`<path d="M12 3a6.5 6.5 0 0 0-3.5 12c.5.4.9 1 .9 1.7V18h5.2v-1.3c0-.7.4-1.3.9-1.7A6.5 6.5 0 0 0 12 3Z"/><path d="M9.8 21h4.4M10.5 18v1M13.5 18v1"/>`,
};

/** SVG de interfaz en línea (hereda color de texto — currentColor). */
function uiIcon(nombre, sizePx){
  const s = sizePx || 22;
  const d = UI_ICONOS[nombre] || "";
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}
