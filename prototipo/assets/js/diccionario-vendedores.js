/* =========================================================
   CILES PRO Vendedores — Diccionario de palabras y conceptos eléctricos
   Definiciones adaptadas del propio temario (CILES_Pro_Temario_Vendedores_1.xlsx)
   para que el vendedor tenga a mano el significado de lo que vende.
   ========================================================= */

const DICCIONARIO_VENDEDOR = [
  // ---- Fundamentos ----
  {t:"Voltio (V)", cat:"Fundamentos", d:`La "presión" con la que se mueve la electricidad. En Colombia, la red residencial es de 110 a 120 V.`},
  {t:"Amperio (A)", cat:"Fundamentos", d:`La cantidad de corriente que pasa por un cable o un equipo.`},
  {t:"Vatio (W)", cat:"Fundamentos", d:`La potencia real de un equipo. Se calcula como W = V × A.`},
  {t:"Circuito en serie", cat:"Fundamentos", d:`Un solo camino para la corriente: si un punto falla, se corta todo el circuito. No se usa en las casas.`},
  {t:"Circuito en paralelo", cat:"Fundamentos", d:`Cada equipo tiene su propio camino; si uno falla, los demás siguen funcionando. Así se cablean las casas.`},
  {t:"Sobrecarga", cat:"Fundamentos", d:`Cuando un circuito lleva más corriente de la que su cable y su breaker pueden manejar de forma segura.`},

  // ---- Cableado e instalaciones ----
  {t:"Calibre AWG", cat:"Cableado", d:`Mide el grosor de un cable. Entre más pequeño el número, más grueso el cable y más corriente aguanta (14 delgado para luces, 12 para tomas, 10 grueso para ducha/estufa).`},
  {t:"Polo a tierra", cat:"Cableado", d:`El cable de más en un tomacorriente que desvía la corriente de una falla hacia el suelo, evitando que pase por una persona.`},
  {t:"Interruptor conmutable", cat:"Cableado", d:`Permite prender y apagar la misma luz desde dos puntos distintos, usando cables "viajeros". Ideal para escaleras y pasillos.`},
  {t:"Dimmer", cat:"Cableado", d:`Regula la intensidad de la luz. Requiere bombillos LED marcados como "regulables" o "dimeables"; uno normal parpadea.`},
  {t:"Plafón / roseta E-27", cat:"Cableado", d:`La base y el marco donde se instala un bombillo. La fase va al contacto central y el neutro a la rosca, para que no dé toque al cambiar el bombillo.`},
  {t:"IP65", cat:"Cableado", d:`Grado de protección de una caja o luminaria: el "6" es hermético al polvo, el "5" resiste chorros de agua. Obligatorio en exteriores.`},
  {t:"Lazo de goteo", cat:"Cableado", d:`Curva que se le hace a un cable antes de entrar a una caja exterior para que el agua escurra al piso en vez de colarse adentro.`},
  {t:"Salida de datos (RJ45)", cat:"Cableado", d:`Punto de conexión para internet por cable, más estable que el wifi. Se poncha respetando el mismo estándar de colores (T568A o T568B) en ambos extremos.`},
  {t:"Sensor de presencia", cat:"Cableado", d:`Detecta movimiento y calor para prender la luz sola y apagarla cuando ya no hay nadie. Se calibra con TIME, LUX y SENS.`},
  {t:"Detector de humo fotoeléctrico", cat:"Cableado", d:`Detecta partículas de humo antes de que haya llamas. Va en el techo, porque el humo sube.`},

  // ---- Protección ----
  {t:"GFCI", cat:"Protección", d:`Tomacorriente con protección diferencial integrada; corta la corriente en milisegundos si detecta una fuga. Obligatorio en baños, cocinas y exteriores.`},
  {t:"Breaker (interruptor termomagnético)", cat:"Protección", d:`Protege el cable, no el equipo: corta la corriente cuando hay una sobrecarga o un corto circuito.`},
  {t:"Breaker diferencial", cat:"Protección", d:`Detecta fugas de corriente —por ejemplo, a través de una persona— y corta de inmediato. El de 30 mA es el que protege vidas.`},
  {t:"Curva C", cat:"Protección", d:`Curva de disparo estándar de un breaker para uso residencial y comercial normal.`},
  {t:"kA (poder de corte)", cat:"Protección", d:`La corriente máxima de falla que un breaker puede cortar de forma segura sin dañarse.`},
  {t:"DPS (descargador de sobretensiones)", cat:"Protección", d:`Protege los equipos de la casa desviando a tierra los picos de voltaje de un rayo o de la misma red.`},
  {t:"Puesta a tierra", cat:"Protección", d:`Sistema que le da a la corriente de falla un camino seguro hacia el suelo. Es la base de la que dependen el polo a tierra, el diferencial y el DPS.`},
  {t:"Varilla copperweld", cat:"Protección", d:`Varilla de cobre por fuera y acero por dentro que se clava en tierra húmeda para hacer la puesta a tierra.`},
  {t:"Telurómetro", cat:"Protección", d:`Instrumento que mide la resistencia de una puesta a tierra; entre más baja, mejor.`},

  // ---- Tableros ----
  {t:"Tablero enchufable", cat:"Tableros", d:`Sistema donde el breaker se monta a presión sobre una barra dentada (tipo NEMA/americano).`},
  {t:"Tablero de riel DIN", cat:"Tableros", d:`Sistema donde el breaker se clipsa sobre un riel metálico (tipo europeo). No es compatible con el enchufable.`},
  {t:"Balanceo de fases", cat:"Tableros", d:`Repartir los circuitos entre las dos fases de la acometida para que ninguna quede sobrecargada.`},
  {t:"Rotulado", cat:"Tableros", d:`Marcar cada breaker del tablero con lo que controla (ej. "luces sala"), para identificarlo rápido en una emergencia.`},
  {t:"Diagnóstico de fallas", cat:"Tableros", d:`Identificar la causa de un síntoma: breaker que salta (sobrecarga o corto), toma que da toque (falta tierra o fuga), luces que parpadean (conexión floja).`},

  // ---- Redes y aluminio ----
  {t:"Conductor de aluminio", cat:"Redes", d:`Cable usado en acometidas y redes de distribución por su bajo peso y costo. No se usa en el cableado interior fino de la casa.`},
  {t:"Conector bimetálico", cat:"Redes", d:`Conector especial para unir cable de aluminio con cobre sin que se recalienten con el tiempo. Va siempre con grasa antioxidante.`},
  {t:"Acometida", cat:"Redes", d:`El tramo de cable que trae la energía desde la red pública hasta el tablero principal de la vivienda.`},

  // ---- Normatividad ----
  {t:"RETIE", cat:"Normatividad", d:`Reglamento Técnico de Instalaciones Eléctricas. Regula la seguridad eléctrica en Colombia; sin cumplirlo, no conectan la energía.`},
  {t:"NTC 2050", cat:"Normatividad", d:`El código técnico colombiano con las reglas detalladas de cómo hacer una instalación eléctrica.`},
  {t:"RETILAP", cat:"Normatividad", d:`Reglamento que regula la iluminación y el alumbrado.`},
  {t:"RITEL", cat:"Normatividad", d:`Reglamento que regula las redes internas de telecomunicaciones en las edificaciones.`},
];
