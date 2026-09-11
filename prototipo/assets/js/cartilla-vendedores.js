/* =========================================================
   CILES PRO Vendedores — Cartilla técnica de producto
   Transcrita de "Cartilla vendedor Ciles corre.pdf" (2024)
   ========================================================= */

const CARTILLA_VENDEDOR = [
  // ---- Breakers ----
  {nombre:"Breaker tipo enchufable NEMA — sistema americano", cat:"Breakers",
    normas:"NTC 2116, IEC 60898-1. Certificado RETIE N°1460 (QCERT).",
    caracteristicas:"Bobina (protección magnética) y cámara de disipación de arco que no contienen otros dispositivos similares del sistema NEMA. Icc de 6000A (6KA) y 10000A (10KA); Ue 120V/415V; In 16A/63A. Curva de disparo tipo C.",
    diferencia:"Cámara de disipación de arco (radiador) que evita que las piezas internas se afecten cuando son expuestas a un corto circuito — por eso son más durables.",
    dondeUsarlo:"Protección de circuitos internos en redes domiciliarias y comerciales de baja tensión.",
    tipos:"Monopolar, bipolar y tripolar.",
    tenPresente:"Para que un breaker sea termomagnético debe contener bobina para protección magnética y bimetálico para protección térmica."},

  {nombre:"Breaker tipo riel DIN — ANSI, sistema europeo", cat:"Breakers",
    normas:"NTC 2116, IEC 60898-1. Certificado RETIE N°1873-2365 (QCERT).",
    caracteristicas:"Bobina y cámara de disipación de arco del sistema tipo DIN (Instituto Alemán de Normalización). Icc de 6000A y 10000A; Ue 120/415V; In 16A/63A. Curva de disparo tipo C.",
    diferencia:"Mayor eficiencia y eficacia en la protección frente a otras marcas.",
    dondeUsarlo:"Protección de circuitos internos en redes domiciliarias y comerciales de baja tensión.",
    tipos:"Monopolar, bipolar y tripolar.",
    tenPresente:"Debe contener bobina para protección magnética y bimetálico para protección térmica."},

  {nombre:"Breaker de protección residual tipo riel", cat:"Breakers",
    normas:"NTC 2116, IEC 60898-1. Certificado RETIE N°1873-2365 (QCERT).",
    caracteristicas:"Sistema DIN. Icc de 6000A (6KA); Ue 120V/240V; In 75A. Instalación de sobreponer, grado de protección IP20 en zonas de salpique de agua."},

  {nombre:"Breaker totalizador de caja moldeada", cat:"Breakers",
    normas:"NTC 2116, IEC 60898-1. Certificado RETIE N°2365 (QCERT).",
    caracteristicas:"Icu de 25000A (25KA), 35000A (35KA) y 50000A (50KA); Ue 208V/220-240V; In 50A/225A. Terminal de conexión: tornillo de sujeción prisionero con cabeza hexagonal.",
    dondeUsarlo:"Protección en tableros de servicios generales y totalizador en tableros de zonas comunes.",
    tipos:"Breaker 208V-240V tripolar.",
    tenPresente:"Mayor eficiencia y eficacia en la protección."},

  // ---- Tableros ----
  {nombre:"Tablero enchufable de incrustar (barra partida)", cat:"Tableros",
    normas:"NTC 3475, NTC 2050, IEC 61439-1/3. Certificado RETIE N°0458 (QCERT).",
    caracteristicas:"Cable de acometida en aluminio y cobre (AL/CU), calibre AWG 6 hasta AWG 2. Icc de 10000A (10KA); Ue 120V/240V; In 80A. Barras de bornera de neutro y tierra. Instalación de breaker tipo enchufable estándar.",
    dondeUsarlo:"Distribución de circuitos internos en redes domiciliarias y comerciales. Tamaño compacto para buitrones, ductos y espacios reducidos.",
    tipos:"Monofásico (120V monopolar) y bifásico (1 circuito 220V bipolar); desde 2, 4, 6, 8, 10 hasta 12 circuitos.",
    tenPresente:"Para acometidas con cable de aluminio, aplicar grasa inhibidora o gel antioxidante según NTC 2050. Permite instalación en zonas de salpique de agua — grado IP20."},

  {nombre:"Tablero 2 y 4 circuitos sobreponer tipo enchufable", cat:"Tableros",
    normas:"NTC 3475, IEC 61439-1/3. Certificado RETIE N°0458 (QCERT).",
    caracteristicas:"Icc de 6000A (6KA); Ue 120V/240V; In 80A.",
    dondeUsarlo:"Circuitos en redes internas de locales y burbujas comerciales: iluminación, motores, aire acondicionado, duchas eléctricas o sistemas de energía solar.",
    tenPresente:"Fácil instalación de sobreponer. Compacto, diseño moderno. Permite instalarse en zonas de salpique de agua — grado IP20."},

  {nombre:"Tablero tipo riel", cat:"Tableros",
    normas:"NTC 3475, NTC 2050, IEC 60439-3, IEC 61439-1/3. Certificado RETIE N°0458 (QCERT).",
    caracteristicas:"Cable de acometida en aluminio y cobre (AL/CU), AWG 6 a AWG 2. Barras de bornera de neutro y tierra. Icc de 10000A (10KA); Ue 120V/240V; In 75A. Sistema DIN, breaker tipo riel estándar.",
    dondeUsarlo:"Distribución de circuitos internos en redes domiciliarias y comerciales. Compacto para buitrones, ductos y espacios reducidos.",
    tipos:"Monofásico (120V monopolar), bifásico (208-220V bipolar) desde 4 hasta 18 circuitos, y trifásico (208-240V tripolar) desde 6 hasta 18 circuitos.",
    tenPresente:"Para acometidas con cable de aluminio, aplicar grasa inhibidora o gel antioxidante según NTC 2050. Permite instalación en zonas de salpique — grado IP20."},

  {nombre:"Caja 1 y 2 circuitos sobreponer, sistema riel DIN", cat:"Tableros",
    normas:"NTC 2050. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Icc de 6000A (6KA); Ue 120V/240V; In 75A. Sistema DIN. Instalación de sobreponer, grado de protección IP20 en zonas de salpique de agua.",
    dondeUsarlo:"Protección de circuitos en redes internas de locales y burbujas comerciales: iluminación, motores, aire acondicionado o energía solar.",
    tenPresente:"Compacto, diseño moderno y de fácil instalación."},

  {nombre:"Caja 3 y 4 circuitos sobreponer, sistema riel DIN", cat:"Tableros",
    normas:"NTC 2050. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Icc de 6000A (6KA); Ue 120V/240V; In 75A. Sistema DIN. Instalación de sobreponer, grado de protección IP20 en zonas de salpique de agua.",
    dondeUsarlo:"Protección de circuitos en redes internas de locales y burbujas comerciales: iluminación, motores, aire acondicionado o energía solar.",
    tenPresente:"Compacto, diseño moderno y de fácil instalación."},

  {nombre:"Tableros industriales de baja tensión (enchufable trifásico)", cat:"Tableros",
    normas:"NTC 3475, NTC 2050, IEC 61439-1/3. Certificado RETIE N°0458 (QCERT).",
    caracteristicas:"Diseño moderno que no interfiere con la estética del sitio. Visor en policarbonato irrompible, plásticos de ingeniería anticorrosivos en zonas salinas. Sistema de barras eléctrico modular en bandeja independiente que permite variar la altura del barraje. Tapa en ABS con protección UV.",
    dondeUsarlo:"Distribución y protección de circuitos internos en residencias de alta gama, vivienda multifamiliar, zonas comunes, proyectos comerciales/institucionales e industria (servicios generales).",
    tipos:"Trifásico 175A 25KA 240-415V. 6 y 12 circuitos para totalizador; 12, 18, 24 circuitos sin totalizador.",
    tenPresente:"Grado de protección IP20 solo aplica para uso interior."},

  // ---- Cajas y protección ----
  {nombre:"Cajas de protección de riel herméticas", cat:"Cajas y protección",
    normas:"NTC 3475, NTC 2050, IEC 61439-1/3. Certificado RETIE N°0458 (QCERT).",
    caracteristicas:"ABS con protección UV, barraje en aluminio estañado para cableado de aluminio o cobre, tapa en policarbonato, borneras de acometida (Al/9Cu).",
    diferencia:"Tapa transparente para visualizar el estado de los dispositivos. Hermeticidad para exterior, zonas húmedas o con polvo. Óptima para todo tipo de dispositivos de riel DIN. Empaque en neopreno, broches de cierre rápido.",
    dondeUsarlo:"Protección de sistemas de energía fotovoltaica; montaje de interruptores de protección DC, DPS, cartuchos para fusibles, relays, alarmas y dispositivos electrónicos de control.",
    tipos:"Tapa transparente. Caja 10 posiciones (14x18x8cm) y 12 posiciones (17x22x9cm).",
    tenPresente:"Apropiada para uso exterior por su grado de hermeticidad IP65."},

  {nombre:"Cajas herméticas IP65", cat:"Cajas y protección",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"ABS con filtro UV, empaque de neopreno. Cierre rápido mediante broches o botones imperdibles (¼ de vuelta, sin tornillos). Knock-outs para tubería de ½” y ¾”.",
    diferencia:"Única caja hermética del mercado con bandeja porta equipos (doble fondo) para instalación interna de dispositivos. Los knock-outs garantizan perpendicularidad en la conexión de tuberías.",
    dondeUsarlo:"Instalaciones a la intemperie; permite instalación de dispositivos de video.",
    tipos:"10x10, 14x18 y 17x22 cm.",
    tenPresente:"Hermeticidad grado IP65: sólidos > 1 m.m. y salpique de agua."},

  {nombre:"Cajas herméticas IP65 — tapa transparente", cat:"Cajas y protección",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Tapa transparente para visualizar los equipos instalados. ABS con filtro UV, empaque de neopreno. Cierre rápido con broches (¼ de vuelta).",
    dondeUsarlo:"Instalación al exterior de sistemas de seguridad, iluminación, paneles solares, entre otros.",
    tipos:"14x18 y 17x22 cm.",
    tenPresente:"Hermeticidad grado IP65: sólidos > 1 m.m. y salpique de agua."},

  {nombre:"Caja para canaletas de sobreponer", cat:"Cajas y protección",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"ABS con filtro UV. Dimensionamiento prepicado para todos los tamaños de canaletas. Columnas integrales de fijación.",
    dondeUsarlo:"Instalación de interruptores, tomacorrientes dobles, GFCI, USB, salidas de voz y datos, sensores y cámaras.",
    tipos:"Caja universal 2”x4”, altura 43 mm. Para canaletas 10x10, 20x12, 32x10, 22x10, 32x12, 32x16, 40x20, 40x25, 50x20 y 60x16 mm."},

  {nombre:"Cajas conduit estándar", cat:"Cajas y protección",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Tapa de refuerzo para caja 2”x4”. PIE AMIGO para resistencia mecánica en vaciado de concreto sin costo adicional. PESTAÑA que evita deformación y permite apoyo en drywall. Mayor capacidad interna que otras cajas del mercado. Doble knock-out lateral de ½”.",
    tipos:"Rectangular 2”x4” (5800), cuadrada 4”x4” (2400) y octogonal."},

  {nombre:"Cajas reforzadas para vaciado IP44", cat:"Cajas y protección",
    normas:"NTC 979. Certificado RETIE N°1744.",
    caracteristicas:"Material libre de halógenos, resistencia mecánica a deformación y aplastamiento (1.11 KNw/cm² ≈ 100K/cm²). Doble knock-out lateral. Tapas reutilizables con aletas para extracción tras el fraguado, IP44.",
    diferencia:"Únicas cajas del mercado con mayor capacidad interna (300–500 cm³). Orificios de fijación cuadrados para evitar fractura del tornillo.",
    dondeUsarlo:"Sistemas de construcción industrializados de vaciado de concreto.",
    tipos:"Rectangular 2”x4” (5800), cuadrada 4”x4” (2400) y octogonal.",
    tenPresente:"Para abrir el knock-out se requiere herramienta eléctrica de corte."},

  {nombre:"Tapas para cajas conduit", cat:"Cajas y protección",
    normas:"Libres de halógenos.",
    caracteristicas:"Venas de refuerzo para mayor rigidez, no se deforman en procesos constructivos.",
    diferencia:"La única tapa suplemento compatible con cualquier caja del mercado.",
    dondeUsarlo:"Tapa suplemento como reducción en caja 4”x4” para fijación de aparatos; las demás como cajas de paso o empalmes.",
    tipos:"Tapa plástica 2”x4”, 4”x4”, redonda 4” y suplemento 4”x4” — blanca y gris."},

  // ---- Suichería ----
  {nombre:"Línea de suichería NOVA", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea completa: toma con salida USB, salida de voz y datos CAT6, interruptor conmutable 4 vías, dimmer y sensor de presencia. Fabricada en ABS con filtro UV. Fácil instalación (fases paralelas, sin puentear).",
    diferencia:"Diseño sofisticado e imponente; su tamaño la hace única en el mercado, elemento preponderante en diseño de interiores.",
    dondeUsarlo:"Proyectos de vivienda premium y decoración de interiores de alto perfil.",
    tenPresente:"Los tomas GFCI se especifican para zonas húmedas, pero debe evitarse el ingreso de agua a su interior. Acabados blanco natural y negro mate."},

  {nombre:"Línea de suichería SPAZIO Natural", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea completa con USB, voz/datos CAT6, conmutable 4 vías, dimmer y sensor de presencia. ABS con filtro UV.",
    diferencia:"Diseño elegante y funcional acorde a la arquitectura moderna; toma corriente doble con base compacta de mínimo tamaño.",
    dondeUsarlo:"Proyectos de vivienda de perfil medio-alto y decoración de interiores."},

  {nombre:"Línea de suichería SPAZIO Negro Mate", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea completa con USB, voz/datos CAT6, conmutable 4 vías, dimmer y sensor de presencia. Disponible en negro mate.",
    dondeUsarlo:"Proyectos de vivienda de perfil medio-alto y decoración de interiores."},

  {nombre:"Línea de suichería ULTRA Natural", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A.",
    diferencia:"Diseño clásico con placa de mayor tamaño que cubre imperfecciones de pared; toma doble con base compacta.",
    dondeUsarlo:"Proyectos de vivienda de perfiles medios, con calidad certificada."},

  {nombre:"Línea de suichería ULTRA Plus", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea completa con USB, voz/datos CAT6, conmutable, dimmer y sensor de presencia. Acabados rojo y negro mate.",
    dondeUsarlo:"Proyectos de vivienda de perfil medio-alto y decoración de interiores."},

  {nombre:"Línea de suichería ULTRA Negra sin marco", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea completa con USB, voz/datos CAT6, conmutable, dimmer y sensor de presencia.",
    dondeUsarlo:"Proyectos de vivienda de perfil medio-alto y decoración de interiores."},

  {nombre:"Línea de suichería FUGA Natural", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455–N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea tradicional con diseño renovado.",
    dondeUsarlo:"Proyectos de vivienda de perfiles medios, con calidad certificada."},

  {nombre:"Línea de suichería ASTRAL Natural", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455-N°0457 (QCERT).",
    caracteristicas:"Interruptores 10A, tomas con polo a tierra 15A, tomas GFCI 20A. Línea tradicional preferida por todos.",
    dondeUsarlo:"Proyectos de vivienda de perfiles medios, con calidad certificada."},

  {nombre:"Línea de suichería ASTRAL Sobreponer", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455-N°0457 (QCERT).",
    caracteristicas:"Interruptores y tomacorrientes 10A/125V. Rápida y fácil instalación, no requiere caja (incluye tornillos de fijación). Fabricada en policarbonato inyectado con filtro UV, color blanco.",
    dondeUsarlo:"Donde se necesite una solución de sobreponer Astral."},

  {nombre:"Tomacorriente GFCI", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455-N°0457 (QCERT).",
    caracteristicas:"Protección diferencial integrada para zonas húmedas (baños, cocinas, exteriores)."},

  {nombre:"Tomacorriente + USB + Tipo C", cat:"Suichería",
    normas:"NTC 1337, NTC 1650, IEC 60669-1, IEC 60884-4. Certificado RETIE N°0455-N°0457 (QCERT).",
    caracteristicas:"Carga directa por USB y Tipo C integrados en la toma, sin necesidad de adaptador."},

  // ---- Sensores y detectores ----
  {nombre:"Sensores de presencia", cat:"Sensores y detectores",
    normas:"IEC 60669-1. Certificado RETILAP N°0450 (QCERT).",
    caracteristicas:"Fuente 110-130V, 60Hz. Apto para incandescentes (400W) y fluorescentes (200W). Distancia máxima de detección 6 metros de circunferencia. Altura de instalación 2.20 a 4 metros. Tiempo de operación ajustable de 10 segundos a 7 minutos. Grado IP20–IP44 según referencia.",
    diferencia:"Detección por presencia en rango 180°, 270° y 360°, con control ON/OFF automático y ajuste de tiempo de encendido.",
    dondeUsarlo:"Control de iluminación para interior y exterior.",
    tipos:"Techo, incrustar tipo suiche, tipo socket e infrarrojo para exteriores.",
    tenPresente:"Deben calibrarse según intensidad de luz y tiempo de apagado. Para circuitos que excedan la capacidad de carga, usar un relé."},

  {nombre:"Detector fotoeléctrico de humo dual 9V-DC/120V-AC", cat:"Sensores y detectores",
    normas:"—",
    caracteristicas:"Fuente eléctrica dual (9V DC + 120V AC). Consumo estático 8 uA, consumo operación 10 mA. Intensidad de alarma 85 dB (a 3 metros). Alarma por baja batería 6.2-6.8V (alerta 7-15 días). Ensamble a techo, indicador de operación y botón de test.",
    dondeUsarlo:"Uso residencial, óptimo en zonas de cocina."},

  // ---- Plafones ----
  {nombre:"Plafones / rosetas", cat:"Plafones",
    normas:"NTC 1469, IEC 60061. Certificado RETILAP N°0451–N°0456 (QCERT).",
    caracteristicas:"Casquillo de rosca E-27 en aluminio, contactos en aleación de cobre, para bombillas hasta 150 vatios. Cumplen requisito de torque 2,3 Nm para que la rosca no se desprenda.",
    diferencia:"Productos certificados bajo RETILAP.",
    dondeUsarlo:"Proyectos residenciales, comerciales e institucionales de bajo costo.",
    tipos:"Porcelana y plásticos. Conexión mediante chapetas y borne con tornillo prisionero."},

  {nombre:"Plafón premium rosca E-27", cat:"Plafones",
    normas:"—",
    caracteristicas:"Instalación a caja octogonal mediante socket, material resistente al calor anormal y al fuego. Campana decorativa de alto brillo, instalación con solo un clic. Mayor diámetro de cobertura (13,5 cm) para cubrir imperfecciones de obra.",
    diferencia:"Diseño elegante sin tornillos a la vista; fabricación en 2 piezas (campana + socket) que preserva el acabado durante estuco y pintura.",
    dondeUsarlo:"Instalación de bombillas con casquillo de rosca E-27."},

  // ---- Tomacorrientes ----
  {nombre:"Tomacorrientes tipo NEMA — sistema americano", cat:"Tomacorrientes",
    normas:"NTC 1650, IEC 60695-2-11, IEC 60884-1, IEC 60309-1/2. Certificado RETIE N°1742 (QCERT).",
    caracteristicas:"Capacidad 15A-20A/120V. Pata trabada 20A/220V. Placas disponibles en varios colores.",
    diferencia:"Calidad, seguridad y confianza de productos certificados bajo norma IEC y RETIE.",
    dondeUsarlo:"Circuitos residenciales en zonas de cocina y ropas, y circuitos regulados en proyectos institucionales y comerciales.",
    tipos:"Sobreponer e incrustar con polo a tierra, de pata trabada y para red regulada."},

  {nombre:"Tomacorrientes (línea industrial)", cat:"Tomacorrientes",
    normas:"NTC 2206. Certificado RETIE N°04478-03017 (CIDET).",
    caracteristicas:"—"},

  // ---- Conectores y accesorios ----
  {nombre:"Conector + unión conduit libres de halógenos", cat:"Conectores y accesorios",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Conector de campana para Knock-outs laterales de caja rectangular, doble tubo de ½” en paralelo. Ocupa poco espacio interno, permitiendo instalar hasta un tomacorriente GFCI.",
    dondeUsarlo:"Circuitos de tubería en construcción tradicional en mampostería y sistemas de vaciado de concreto.",
    tipos:"Unión ½” y ¾”. Conector campana ½” y ¾”."},

  {nombre:"Conector contratuerca libres de halógenos", cat:"Conectores y accesorios",
    normas:"NTC 979. Certificado RETIE N°1744 (QCERT).",
    caracteristicas:"Unión entre tubo y caja eléctrica, según NTC 2050. Material plástico resistente a la corrosión (ideal en ambientes salinos) y no conductor (aislante).",
    diferencia:"Sistema tipo rosca, no necesita soldadura. Más liviano que un conector conduit metálico. Se instala en cajas conduit STD y REF de Ciles o de cualquier marca.",
    tipos:"½” y ¾”."},

  {nombre:"Conectores terminales bimetálicos", cat:"Conectores y accesorios",
    normas:"NTC 2050, 2154, 4627. Certificado RETIE N°0459 (QCERT).",
    caracteristicas:"Fabricados con medidas que cumplen norma para cables de calibre AWG, desde 14 AWG hasta 600 MCM.",
    diferencia:"Para redes de aluminio, CILES tiene la solución completa.",
    dondeUsarlo:"Conexión de equipos de potencia, medida, transformación y protección con cables de aluminio: subestaciones, tableros con barras de cobre, breaker totalizador de caja moldeada, gabinetes de medidores, tableros de servicios generales y zonas comunes.",
    tipos:"Tipo pin, de pala angosta, de pala ancha y de ojo.",
    tenPresente:"No se pueden usar conectores en milímetros con cables en calibre AWG. Siempre usar grasa inhibidora o gel antioxidante."},

  {nombre:"Varilla copperweld para puesta a tierra con conector tipo pestaña", cat:"Conectores y accesorios",
    normas:"NTC 2206. Certificado RETIE N°04478-03017 (CIDET).",
    caracteristicas:"Longitud 2.40 metros, diámetro 14 mm (5/8”), recubrimiento electrolítico con cobre de 250 micras, para conductor hasta calibre N°2 AWG.",
    diferencia:"Conector tipo pestaña con tornillo de fijación en acero inoxidable. Cumple 1000 horas en cámara salina (resistencia a la corrosión).",
    dondeUsarlo:"Descarga a tierra en circuitos residenciales, comerciales e institucionales, subestaciones y tableros de distribución.",
    tenPresente:"Indispensable para la seguridad de las personas, protección de instalaciones y compatibilidad electromagnética."},

  {nombre:"Cintas aislantes de PVC", cat:"Conectores y accesorios",
    normas:"NTC 1023, IEC 60454-3, UL 486 A/B/C. Certificado RETIE N°1743 (QCERT).",
    caracteristicas:"Capacidad de aislamiento con límite de ruptura de 8KV a 10KV, resistencia a la tensión de 26 a 30 N/cm², resistencia a 80°C de temperatura.",
    diferencia:"Certificación UL. Material adhesivo de caucho sintético que garantiza adherencia y durabilidad.",
    dondeUsarlo:"Uso doméstico y profesional.",
    tipos:"Profesional 20 metros negra. 5 y 15 metros en negra, azul, verde, roja, blanca y amarilla."},
];
