/* =========================================================
   CILES PRO — datos mock del prototipo
   Contenido extraído de CILES_PRO.pdf y TEMARIO.docx
   ========================================================= */

const PILARES = [
  { n:"01", titulo:"Formación", desc:"Microaprendizaje práctico, cursos, videos y casos reales.", icon:"🎓" },
  { n:"02", titulo:"Certificación", desc:"Reconocimiento profesional por niveles e insignias digitales.", icon:"🏅" },
  { n:"03", titulo:"Comunidad", desc:"Foros, grupos y casos de éxito entre profesionales.", icon:"💬" },
  { n:"04", titulo:"Herramientas", desc:"Calculadoras, biblioteca técnica y normativa RETIE.", icon:"🧰" },
  { n:"05", titulo:"Reconocimiento", desc:"Programa de embajadores y visibilidad profesional.", icon:"⭐" },
];

const ESCUELAS = [
  {
    id:"producto", nombre:"Escuela de Producto", n:"01",
    temas:[
      {t:"Línea NOVA", d:"Portafolio · Aplicaciones · Diferenciales"},
      {t:"Tableros", d:"Residenciales · Comerciales · Industriales"},
      {t:"Protección", d:"Breakers · DPS · Seguridad"},
      {t:"Conectividad", d:"Conectores · Accesorios · Cintas"},
    ]
  },
  {
    id:"tecnica", nombre:"Escuela Técnica", n:"02",
    temas:[
      {t:"Fundamentos", d:"Corriente · Voltaje · Potencia · Cálculo básico"},
      {t:"Seguridad", d:"RETIE · Buenas prácticas · Prevención"},
      {t:"Instalación", d:"Errores comunes · Diagnóstico · Mantenimiento"},
    ]
  },
  {
    id:"comercial", nombre:"Escuela Comercial", n:"03",
    temas:[
      {t:"Venta consultiva", d:"Argumentos de valor · Manejo de objeciones · Servicio al cliente"},
    ]
  },
];

const RUTAS = [
  { n:"01", titulo:"Instaladores y electricistas", desc:"Mejorar conocimientos técnicos y generar oportunidades laborales." },
  { n:"02", titulo:"Ingenieros y diseñadores", desc:"Actualizar conocimientos y fortalecer procesos de especificación." },
];

const ROADMAP = [
  { n:"01", fase:"Validación", periodo:"0 - 3 meses", foco:"Validar interés", items:["Landing page","Registro","Primer curso","Certificado digital"], meta:"300 usuarios" },
  { n:"02", fase:"Lanzamiento", periodo:"3 - 6 meses", foco:"Comunidad inicial", items:["Plataforma LMS","10 cursos","Certificaciones","Webinars"], meta:"1.000 usuarios" },
  { n:"03", fase:"Crecimiento", periodo:"6 - 12 meses", foco:"Fidelización", items:["Ranking","Puntos","Directorio","Comunidad"], meta:"3.000 usuarios" },
  { n:"04", fase:"Ecosistema", periodo:"12 - 24 meses", foco:"Referente nacional", items:["App móvil","Herramientas técnicas","Embajadores","Alianzas SENA"], meta:"10.000 usuarios" },
];

const INDICADORES = [
  { titulo:"Comunidad", items:["Usuarios registrados","Usuarios activos","Participación"] },
  { titulo:"Formación", items:["Cursos completados","Certificados emitidos","Horas de formación"] },
  { titulo:"Negocio", items:["Leads generados","Recompra","Fidelización"] },
  { titulo:"Marca", items:["Reconocimiento","Engagement","NPS"] },
];

/* ---------- Niveles de certificación + temario técnico (34 módulos) ---------- */
const NIVELES = [
  {
    id:1, slug:"instalador", nombre:"Instalador Ciles",
    subtitulo:"Fundamentos y trabajo seguro",
    color:"level-1",
    modulos:[
      {id:"1.1", titulo:"Electricidad básica", aprende:"Corriente, voltaje, potencia y ley de Ohm; diferencia AC/DC; por qué en Colombia son 110 y 220 V.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Primera Chispa", icono:"🥇"}},
      {id:"1.2", titulo:"Seguridad y 5 reglas de oro", aprende:"Los riesgos eléctricos, el equipo de protección y cómo comprobar que un circuito está realmente muerto antes de tocarlo.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Guardián de la Seguridad", icono:"🦺"}},
      {id:"1.3", titulo:"RETIE para el instalador", aprende:"Qué exige la norma en una instalación y cómo no reprobar una inspección.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"RETIE Aprobado", icono:"📘"}},
      {id:"1.4", titulo:"Herramientas del electricista", aprende:"Usar bien el multímetro y la pinza: medir voltaje, continuidad y amperaje sin dañar el equipo.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Maestro del Multímetro", icono:"🧰"}},
      {id:"1.5", titulo:"Cables: calibre, color y ampacidad", aprende:"Elegir el calibre correcto para cada circuito y respetar el color de fase, neutro y tierra según RETIE.", producto:"Conectores terminales bimetálicos CILES (cable grueso y aluminio)", recompensa:{tipo:"producto", nombre:"Conectores terminales bimetálicos", icono:"🔌", habitacion:"tablero"}},
      {id:"1.6", titulo:"Empalmes y encintado", aprende:"Hacer un empalme que no se recaliente y aislarlo correctamente.", producto:"Cinta aislante de PVC y conectores CILES", recompensa:{tipo:"producto", nombre:"Cinta aislante eléctrica CILES", icono:"🎗️", habitacion:"tablero"}},
      {id:"1.7", titulo:"Cajas y tubería", aprende:"Instalar cajas y tubería conduit, cajas de sobreponer y cajas para vaciado de concreto.", producto:"Cajas conduit, conectores conduit y conector contratuerca CILES", recompensa:{tipo:"producto", nombre:"Cajas conduit y contratuerca", icono:"📦", habitacion:"tablero"}},
    ]
  },
  {
    id:2, slug:"especialista", nombre:"Especialista Ciles",
    subtitulo:"Instalaciones del día a día en la vivienda",
    color:"level-2",
    modulos:[
      {id:"2.1", titulo:"Instalar un tomacorriente", aprende:"Cambiar o poner un toma doble con polo a tierra, bien conectado y firme.", producto:"Tomas NEMA y suichería NOVA / Spazio / Ultra / Astral CILES", recompensa:{tipo:"producto", nombre:"Toma NEMA y suichería", icono:"🔌", habitacion:"sala"}},
      {id:"2.2", titulo:"Instalar interruptores", aprende:"Interruptor sencillo, doble y conmutable (prender una luz desde dos sitios).", producto:"Suichería CILES (interruptor conmutable 4 vías)", recompensa:{tipo:"producto", nombre:"Interruptor conmutable", icono:"💡", habitacion:"sala"}},
      {id:"2.3", titulo:"Dimmer y tomas especiales", aprende:"Instalar variador de intensidad de luz y toma con salida USB / Tipo C.", producto:"Suichería NOVA con dimmer y toma USB + Tipo C CILES", recompensa:{tipo:"producto", nombre:"Dimmer y toma USB/Tipo C", icono:"🎚️", habitacion:"cuarto"}},
      {id:"2.4", titulo:"Punto de luz y plafón", aprende:"Dejar una salida de luz y montar su plafón o roseta.", producto:"Plafones / rosetas y plafón premium rosca E-27 CILES", recompensa:{tipo:"producto", nombre:"Plafón / roseta E-27", icono:"🔆", habitacion:"sala"}},
      {id:"2.5", titulo:"Toma GFCI en baño y cocina", aprende:"Proteger de electrocución en zonas húmedas con toma de protección diferencial.", producto:"Tomacorriente GFCI CILES", recompensa:{tipo:"producto", nombre:"Tomacorriente GFCI", icono:"🚿🔌", habitacion:"cocina"}},
      {id:"2.6", titulo:"Sensor de presencia", aprende:"Instalar y calibrar luz automática para interior y exterior.", producto:"Sensores de presencia CILES", recompensa:{tipo:"producto", nombre:"Sensor de presencia", icono:"👁️", habitacion:"exterior"}},
      {id:"2.7", titulo:"Detector de humo", aprende:"Instalar detector de humo en cocina y dormitorios.", producto:"Detector fotoeléctrico de humo dual CILES", recompensa:{tipo:"producto", nombre:"Detector de humo dual", icono:"🚨", habitacion:"cocina"}},
      {id:"2.8", titulo:"Instalar una ducha eléctrica", aprende:"Montar la ducha en su propio circuito y protegerla correctamente.", producto:"Breaker de protección residual / GFCI tipo riel CILES", recompensa:{tipo:"producto", nombre:"Breaker residual / GFCI riel", icono:"🚿", habitacion:"bano"}},
      {id:"2.9", titulo:"Iluminación exterior", aprende:"Dejar un punto de luz a la intemperie protegido del agua y el polvo.", producto:"Cajas herméticas IP65 y caja para canaletas CILES", recompensa:{tipo:"producto", nombre:"Caja hermética IP66 / Caja canaleta", icono:"🏮", habitacion:"exterior"}},
    ]
  },
  {
    id:3, slug:"experto", nombre:"Experto Ciles",
    subtitulo:"Protección, tableros y puesta a tierra",
    color:"level-3",
    modulos:[
      {id:"3.1", titulo:"Cálculo de cargas de una casa", aprende:"Saber cuánta carga tiene una vivienda y cuántos circuitos necesita.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Calculista", icono:"🧮"}},
      {id:"3.2", titulo:"Separar los circuitos", aprende:"Repartir luces, tomas, nevera y ducha sin sobrecargar ningún circuito.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Organizador de Circuitos", icono:"🗂️"}},
      {id:"3.3", titulo:"Elegir el breaker correcto", aprende:"Escoger amperaje, curva C y poder de corte (kA) según el circuito.", producto:"Breaker enchufable NEMA y breaker tipo riel DIN CILES", recompensa:{tipo:"producto", nombre:"Breaker NEMA / riel DIN", icono:"🔲", habitacion:"tablero"}},
      {id:"3.4", titulo:"Instalar breaker diferencial", aprende:"Montar la protección que salva vidas frente a fugas de corriente.", producto:"Breaker de protección residual CILES", recompensa:{tipo:"producto", nombre:"Breaker diferencial", icono:"🛡️", habitacion:"tablero"}},
      {id:"3.5", titulo:"DPS contra sobretensiones", aprende:"Proteger los equipos de rayos y picos de la red.", producto:"DPS montado en caja de protección de riel hermética CILES", recompensa:{tipo:"producto", nombre:"DPS en caja hermética", icono:"⚡", habitacion:"tablero", obsequio:true}},
      {id:"3.6", titulo:"Armar un tablero pequeño", aprende:"Montar un tablero de 2 a 4 circuitos para un local o negocio.", producto:"Tablero 2 y 4 circuitos de sobreponer y caja 1-4 circuitos CILES", recompensa:{tipo:"producto", nombre:"Tablero 2-4 circuitos", icono:"🗄️", habitacion:"tablero"}},
      {id:"3.7", titulo:"Armar un tablero residencial", aprende:"Acometida, riel DIN, balanceo de fases y rotulado profesional.", producto:"Tablero de barra partida y tablero tipo riel CILES", recompensa:{tipo:"producto", nombre:"Tablero de barra partida", icono:"🗃️", habitacion:"tablero"}},
      {id:"3.8", titulo:"Hacer una puesta a tierra", aprende:"Clavar la varilla, conectarla y medir la resistencia de tierra.", producto:"Varilla copperweld con conector tipo pestaña CILES", recompensa:{tipo:"producto", nombre:"Varilla copperweld", icono:"🌍", habitacion:"tablero", obsequio:true}},
      {id:"3.9", titulo:"Diagnóstico de fallas", aprende:"Por qué salta el breaker, por qué un toma da toque o parpadean las luces.", producto:"Breakers y tableros CILES", recompensa:{tipo:"producto", nombre:"Kit de diagnóstico", icono:"🔍", habitacion:"tablero"}},
    ]
  },
  {
    id:4, slug:"maestro", nombre:"Maestro Ciles",
    subtitulo:"Comercial, industrial y diseño",
    color:"level-4",
    modulos:[
      {id:"4.1", titulo:"Sistemas trifásicos", aprende:"Estrella y delta, tensión de línea y de fase, y para qué se usa el trifásico.", producto:"Tableros industriales trifásicos de baja tensión CILES", recompensa:{tipo:"producto", nombre:"Tablero industrial bifásico", icono:"🏭", habitacion:"garaje"}},
      {id:"4.2", titulo:"Cálculo de carga comercial", aprende:"Dimensionar un local, una oficina o una pequeña industria.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Estratega Comercial", icono:"📊"}},
      {id:"4.3", titulo:"Totalizador de caja moldeada", aprende:"Proteger un tablero general con un totalizador (MCCB).", producto:"Breaker totalizador de caja moldeada CILES", recompensa:{tipo:"producto", nombre:"Totalizador MCCB", icono:"🧱", habitacion:"garaje"}},
      {id:"4.4", titulo:"Motores y aire acondicionado", aprende:"Proteger cargas con alta corriente de arranque.", producto:"Tablero de sobreponer y protecciones CILES", recompensa:{tipo:"producto", nombre:"Tablero y protecciones", icono:"❄️", habitacion:"garaje"}},
      {id:"4.5", titulo:"Acometidas gruesas y aluminio", aprende:"Conectar cable de aluminio y cobre con seguridad y según norma.", producto:"Conectores terminales bimetálicos CILES", recompensa:{tipo:"producto", nombre:"Conectores de acometida", icono:"🔗", habitacion:"tablero"}},
      {id:"4.6", titulo:"Tableros industriales", aprende:"Distribución trifásica en edificios y proyectos comerciales.", producto:"Tableros industriales trifásicos CILES", recompensa:{tipo:"producto", nombre:"Tablero industrial trifásico", icono:"🏗️", habitacion:"garaje"}},
      {id:"4.7", titulo:"Diseño y RETIE avanzado", aprende:"Diagrama unifilar, memoria de cálculo y certificación de la instalación.", producto:"— (fundamento)", recompensa:{tipo:"insignia", nombre:"Diseñador RETIE", icono:"📐"}},
      {id:"4.8", titulo:"Especificación y presupuesto", aprende:"Especificar materiales por norma (no por precio) y armar el presupuesto.", producto:"Portafolio CILES completo como referencia", recompensa:{tipo:"producto", nombre:"Portafolio CILES completo", icono:"📋", habitacion:"garaje"}},
      {id:"4.9", titulo:"Energía solar básica", aprende:"Fundamentos de un sistema solar y su protección a la intemperie.", producto:"Cajas herméticas IP65 y cajas de protección de riel CILES", recompensa:{tipo:"producto", nombre:"Caja Combinadora CILES (redes solares)", icono:"☀️", habitacion:"exterior"}},
    ]
  },
];

/* ---------- Mi Casa CILES — habitaciones del plano de recompensas ---------- */
const HABITACIONES = [
  { id:"sala", nombre:"Sala", icono:"🛋️", area:"sala" },
  { id:"cocina", nombre:"Cocina", icono:"🍳", area:"cocina" },
  { id:"bano", nombre:"Baño", icono:"🛁", area:"bano" },
  { id:"cuarto", nombre:"Cuarto", icono:"🛏️", area:"cuarto" },
  { id:"tablero", nombre:"Tablero Eléctrico", icono:"🗄️", area:"tablero" },
  { id:"garaje", nombre:"Garaje / Taller", icono:"🏭", area:"garaje" },
  { id:"exterior", nombre:"Exterior", icono:"🌳", area:"exterior" },
];

function todosLosModulos(){
  return NIVELES.flatMap(niv => niv.modulos.map(m => ({...m, nivelId:niv.id, nivelNombre:niv.nombre, nivelSlug:niv.slug, color:niv.color})));
}
function buscarModulo(id){
  return todosLosModulos().find(m => m.id === id);
}

/* ---------- Gamificación ---------- */
const PUNTOS_POR = [
  {accion:"Cursos completados", pts:10},
  {accion:"Webinars", pts:20},
  {accion:"Participación", pts:30},
  {accion:"Evaluaciones", pts:40},
  {accion:"Referidos", pts:50},
];
const CANJES = [
  {t:"Kits de producto", d:"Kit de herramientas de instalación con productos CILES.", pts:1200, icon:"🧰"},
  {t:"Herramientas", d:"Multímetro o pinza amperimétrica de marca aliada.", pts:2000, icon:"🔧"},
  {t:"Merchandising", d:"Camiseta, gorra y termo edición Ciles Pro.", pts:400, icon:"🎁"},
  {t:"Entradas a eventos", d:"Cupo para capacitaciones presenciales y ferias del sector.", pts:1500, icon:"🎟️"},
];
const RANKING = [
  {pos:1, nombre:"Jhon Ramírez", ciudad:"Medellín", nivel:"Maestro Ciles", pts:5420},
  {pos:2, nombre:"Laura Gómez", ciudad:"Bogotá", nivel:"Experto Ciles", pts:4980},
  {pos:3, nombre:"Carlos Peña", ciudad:"Cali", nivel:"Experto Ciles", pts:4710},
  {pos:4, nombre:"Andrea Rincón", ciudad:"Barranquilla", nivel:"Especialista Ciles", pts:3990},
  {pos:5, nombre:"Miguel Torres", ciudad:"Bucaramanga", nivel:"Especialista Ciles", pts:3640},
];

/* ---------- Usuario actual (mock) ---------- */
const USUARIO = {
  nombre:"Andrés Salazar",
  iniciales:"AS",
  ciudad:"Medellín, Antioquia",
  ruta:"Instaladores y electricistas",
  nivelActual:2,
  puntos:1280,
  metaSiguienteNivel:2000,
  cursosCompletados:11,
  cursosTotal:34,
  horasFormacion:26,
  modulosCompletados:["1.1","1.2","1.3","1.4","1.5","1.6","1.7","2.1","2.2","2.3","2.4"],
  insignias:[
    {t:"Primer curso completado", icon:"🥇"},
    {t:"RETIE aprobado", icon:"📘"},
    {t:"5 evaluaciones perfectas", icon:"🎯"},
    {t:"Embajador en formación", icon:"⭐"},
  ]
};

/* ---------- Biblioteca eléctrica / glosario RETIE ---------- */
const GLOSARIO = [
  {t:"Breaker termomagnético", sigla:"MCB", cat:"Protección", tags:["NTC-IEC 60898","Producto CILES"], d:"Dispositivo de protección con acción bimetálica y magnética. Patente NEMA/DIN de CILES."},
  {t:"Interruptor diferencial", sigla:"RCCB", cat:"Protección", tags:["IEC 61008","RETIE obligatorio"], d:"Protege contra contactos detectando corrientes de fuga entre activo y neutro."},
  {t:"Puesta a tierra", sigla:"PAT", cat:"Instalación", tags:["RETIE Art. 15"], d:"Sistema de conductores y electrodos que conecta partes metálicas a la tierra física."},
  {t:"Factor de potencia", sigla:"cos φ", cat:"Medición", tags:["CREG 015/2018"], d:"Relación entre potencia activa y aparente. Penalización en factura si FP < 0.9."},
  {t:"DPS", sigla:"SPD", cat:"Protección", tags:["RETIE","NTC 4552"], d:"Dispositivo de protección contra sobretensiones transitorias por rayos o maniobras."},
  {t:"Curva de disparo C", sigla:"Curva C", cat:"Protección", tags:["Producto CILES"], d:"Curva de disparo magnético para cargas con arranque moderado (uso residencial general)."},
  {t:"Ampacidad", sigla:"—", cat:"Materiales", tags:["NTC 2050"], d:"Corriente máxima que un conductor puede transportar de forma continua sin sobrecalentarse."},
  {t:"Tablero de distribución", sigla:"—", cat:"Instalación", tags:["Producto CILES"], d:"Gabinete donde se reparte la energía a los circuitos ramales mediante breakers."},
  {t:"GFCI", sigla:"GFCI", cat:"Protección", tags:["RETIE obligatorio","Producto CILES"], d:"Toma con protección diferencial integrada, obligatoria en baños, cocinas y exteriores."},
  {t:"kA (poder de corte)", sigla:"kA", cat:"Medición", tags:["NTC-IEC 60898"], d:"Máxima corriente de cortocircuito que un breaker puede interrumpir de forma segura."},
];

/* ---------- Comunidad ---------- */
const GRUPOS = [
  {t:"Instaladores Antioquia", miembros:842, desc:"Casos, dudas y oportunidades laborales en el Valle de Aburrá."},
  {t:"Diseño y cálculo de tableros", miembros:513, desc:"Discusión técnica para ingenieros y diseñadores eléctricos."},
  {t:"RETIE al día", miembros:1204, desc:"Actualizaciones normativas y cómo aplicarlas en obra."},
  {t:"Energía solar residencial", miembros:376, desc:"Fundamentos y protección de sistemas fotovoltaicos pequeños."},
];
const FORO = [
  {autor:"Diego M.", nivel:"Especialista Ciles", tiempo:"hace 2 h", titulo:"¿Curva C o D para un motor de aire acondicionado?", respuestas:14, tag:"Protección"},
  {autor:"Karen V.", nivel:"Instalador Ciles", tiempo:"hace 5 h", titulo:"Toma GFCI se dispara sola en la ducha eléctrica, ¿qué reviso?", respuestas:9, tag:"Instalación"},
  {autor:"Fabián R.", nivel:"Maestro Ciles", tiempo:"hace 1 d", titulo:"Memoria de cálculo para local comercial de 90 m²: comparto plantilla", respuestas:22, tag:"Diseño"},
  {autor:"Natalia P.", nivel:"Experto Ciles", tiempo:"hace 2 d", titulo:"Resistencia de puesta a tierra alta en suelo rocoso, ¿alternativas?", respuestas:17, tag:"Puesta a tierra"},
];
const CASOS_EXITO = [
  {t:"De ayudante a maestro en 14 meses", autor:"Jhon Ramírez · Medellín", d:"Certificó los 4 niveles y hoy lidera su propia cuadrilla de instaladores."},
  {t:"Redujo reprocesos de inspección RETIE en 60%", autor:"Constructora Vivendo · Cali", d:"Formó a todo su equipo técnico con la Escuela Técnica CILES PRO."},
  {t:"Triplicó leads por el Directorio Certificado", autor:"Laura Gómez · Bogotá", d:"Aparece como Experta Ciles y hoy recibe solicitudes directas de clientes finales."},
];

/* ---------- Directorio nacional ---------- */
const DIRECTORIO = [
  {nombre:"Jhon Ramírez", nivel:4, nivelNombre:"Maestro Ciles", ciudad:"Medellín", especialidad:"Tableros industriales", pts:5420},
  {nombre:"Laura Gómez", nivel:3, nivelNombre:"Experto Ciles", ciudad:"Bogotá", especialidad:"Puesta a tierra y protección", pts:4980},
  {nombre:"Carlos Peña", nivel:3, nivelNombre:"Experto Ciles", ciudad:"Cali", especialidad:"Diagnóstico de fallas", pts:4710},
  {nombre:"Andrea Rincón", nivel:2, nivelNombre:"Especialista Ciles", ciudad:"Barranquilla", especialidad:"Instalaciones residenciales", pts:3990},
  {nombre:"Miguel Torres", nivel:2, nivelNombre:"Especialista Ciles", ciudad:"Bucaramanga", especialidad:"Iluminación y sensores", pts:3640},
  {nombre:"Sofía Londoño", nivel:1, nivelNombre:"Instalador Ciles", ciudad:"Pereira", especialidad:"Cableado y empalmes", pts:1180},
  {nombre:"Andrés Salazar", nivel:2, nivelNombre:"Especialista Ciles", ciudad:"Medellín", especialidad:"Instalaciones residenciales", pts:1280},
  {nombre:"Ricardo Ibáñez", nivel:4, nivelNombre:"Maestro Ciles", ciudad:"Bogotá", especialidad:"Diseño y RETIE avanzado", pts:6110},
];
