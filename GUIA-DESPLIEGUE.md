# CILES PRO — Guía de despliegue (Netlify + Firebase)

Este proyecto es un sitio estático (HTML/CSS/JS puro, sin build) que vive en la carpeta `prototipo/`.
Ya preparé lo necesario en el repo:

- `netlify.toml` en la raíz — le dice a Netlify que publique la carpeta `prototipo/` (sin comando de build, porque no lo necesita).
- `.gitignore` — excluye archivos temporales de Office y de Firebase.
- Repositorio git ya inicializado localmente (`git init` ya corrido). Los pasos de abajo asumen que vas a completar el primer commit vos mismo, porque necesita tu nombre/correo (no lo configuro yo por vos).

---

## Parte A — Subir a Netlify

Hay dos caminos. El primero es más rápido para ver algo en línea HOY; el segundo es el que conviene mientras seguimos iterando (cada cambio que yo haga y vos subas a GitHub se publica solo).

### A.1 — Camino rápido: Netlify Drop (sin cuenta, sin git)

1. Andá a **https://app.netlify.com/drop**
2. Arrastrá la carpeta `prototipo` completa (la de `D:\Users\mercadeo\Desktop\CILESPRO\prototipo`) a la zona de "arrastrar y soltar".
3. En segundos te da una URL pública (`algo-random.netlify.app`).
4. Listo, ya está en línea. **Contras**: cada vez que yo cambie algo, tenés que volver a arrastrar la carpeta a mano. Sirve para probarlo YA, no para el día a día.

### A.2 — Camino recomendado: GitHub + Netlify (deploy automático)

**Paso 1 — Configurá tu identidad de git** (una sola vez, en tu máquina):
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
```

**Paso 2 — Hacé el primer commit** (ya dejé todo agregado con `git add -A`, solo falta el commit):
```bash
cd "D:\Users\mercadeo\Desktop\CILESPRO"
git commit -m "Primera versión: CILES PRO Vendedores"
```

**Paso 3 — Creá el repositorio en GitHub**:
1. Entrá a **https://github.com/new**
2. Nombre sugerido: `ciles-pro` (puede ser privado o público — Netlify funciona con ambos).
3. NO marques "Add a README" (ya tenés archivos locales, evita conflictos).
4. Click "Create repository".

**Paso 4 — Conectá tu repo local con GitHub** (GitHub te muestra estos comandos en pantalla después de crear el repo, pero acá van igual):
```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ciles-pro.git
git push -u origin main
```
Te va a pedir iniciar sesión en GitHub (usuario/token o el navegador se abre solo).

**Paso 5 — Conectá el repo a Netlify**:
1. Entrá a **https://app.netlify.com** y creá una cuenta (podés usar tu cuenta de GitHub para entrar, es un click).
2. "Add new site" → "Import an existing project" → "Deploy with GitHub".
3. Autorizá a Netlify a ver tus repos, elegí `ciles-pro`.
4. Netlify va a detectar automáticamente el `netlify.toml` (publish = `prototipo`). No hace falta que toques nada más.
5. Click "Deploy site". En 30-60 segundos tenés tu URL (`algo.netlify.app`).

**De ahí en adelante**: cada vez que se haga `git push` a `main`, Netlify republica solo. Si querés un dominio propio (ej. `pro.ciles.co`), eso se configura en Netlify → "Domain settings" → "Add a domain", apuntando el DNS de tu dominio hacia Netlify.

---

## Parte B — Firebase, paso a paso

**Qué vamos a lograr:** cada asesor comercial inicia sesión una sola vez con su cuenta de Google (nada de usuario/contraseña inventado), y a partir de ahí su progreso (XP, módulos completados, racha) queda guardado en una base de datos real (Firestore) — disponible desde cualquier dispositivo, y consultable por CILES. Hoy eso vive solo en el `localStorage` del navegador de cada persona.

### B.1 — Crear el proyecto Firebase

1. Andá a **https://console.firebase.google.com**
2. "Agregar proyecto" → nombre sugerido `ciles-pro-vendedores`.
3. Podés desactivar Google Analytics si no lo vas a usar (no hace falta para esto).
4. Click "Crear proyecto" y esperá a que termine.

### B.2 — Activar el login con Google (Authentication)

1. En el menú izquierdo: **Compilación → Authentication** → "Comenzar".
2. Pestaña **"Sign-in method"** (o "Método de inicio de sesión") → click en **Google** de la lista de proveedores.
3. Activalo (el interruptor de arriba) → elegí un "correo de asistencia del proyecto" (puede ser el tuyo) → **Guardar**.
4. Bajá a **"Dominios autorizados"** (misma sección, pestaña Settings): `localhost` ya viene agregado por defecto (sirve para que lo probemos antes de publicar). **Cuando ya tengas la URL de Netlify** (parte A), volvé acá y agregala también (ej. `ciles-pro.netlify.app`) — si no, Google va a rechazar el login en el sitio publicado.

Con esto, cualquier asesor que entre va a poder tocar "Continuar con Google" y elegir su cuenta — no hace falta que le crees usuario ni contraseña a nadie.

### B.3 — Activar Firestore (la base de datos)

1. En el menú izquierdo: **Compilación → Firestore Database**.
2. "Crear base de datos".
3. Elegí **modo de producción** (más seguro; ajustamos las reglas en el paso B.5).
4. Elegí la ubicación del servidor — `southamerica-east1` (São Paulo) es la más cercana a Colombia entre las disponibles.

### B.4 — Registrar la app web y obtener las credenciales

1. En la página principal del proyecto (ícono de engranaje → "Configuración del proyecto"), bajá a "Tus apps" → ícono `</>` (Web).
2. Nombre de la app: `CILES PRO Vendedores`. NO hace falta marcar "Firebase Hosting" (ya usamos Netlify).
3. Firebase te va a mostrar un bloque de código con un objeto `firebaseConfig` así:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "ciles-pro-vendedores.firebaseapp.com",
     projectId: "ciles-pro-vendedores",
     storageBucket: "ciles-pro-vendedores.appspot.com",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
   **Copiá y guardame ese bloque completo** (pegámelo en el chat) cuando quieras que conecte el sitio de verdad a Firebase — con eso yo agrego el botón "Continuar con Google" y hago que `app-vendedor.js` lea/escriba en Firestore en vez de (o además de) `localStorage`. Esta `apiKey` es pública por diseño en apps web de Firebase (no es un secreto como una contraseña), así que no hay problema en pegarla acá.

### B.5 — Reglas de seguridad de Firestore (incluye acceso de administradores)

Cada asesor solo puede leer y escribir **su propio** documento — identificado con el `uid` que le da Google, no con un ID inventado. Además, le doy permiso de **lectura de todos los documentos** a los dos correos administradores (`mercadeo@ciles.co` y `pablo.patino@ciles.co`), para las estadísticas del paso B.6:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /vendedores/{vendedorId} {
      allow read: if request.auth != null &&
        (request.auth.uid == vendedorId ||
         request.auth.token.email in ["mercadeo@ciles.co", "pablo.patino@ciles.co"]);
      allow write: if request.auth != null && request.auth.uid == vendedorId;
    }
    match /ranking_publico/{vendedorId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == vendedorId;
    }
  }
}
```
Notá que los correos admin **solo pueden leer**, no escribir en el perfil de otro asesor — y un asesor común sigue sin poder leer el perfil COMPLETO de otro asesor (con su correo, ciudad, etc.) bajo ninguna circunstancia. Esto se sigue enforzando en el servidor, no solo en la app.

Agregué una segunda colección, `ranking_publico`, que sí puede leer **cualquier asesor logueado** — pero solo contiene los datos mínimos para el ranking (nombre, foto, ciudad, XP, cantidad de módulos), nunca el correo. Cada vez que se guarda el progreso de un asesor, el sitio escribe automáticamente esa copia reducida ahí — es la que alimenta el podio de la pantalla de Progreso.

Si más adelante se suma o se quita un administrador, es solo agregar/quitar su correo de la lista en la consola de Firebase (Firestore → Reglas) — no requiere tocar el código del sitio. **Si ya tenías la regla anterior publicada, tenés que reemplazarla completa por esta** (que ya incluye el bloque de `ranking_publico`) y volver a publicar.

### B.6 — Panel de estadísticas para los administradores

Voy a agregar una pantalla nueva, `vendedores-admin.html`, que:
1. Al entrar, verifica que el correo de Google con el que se logueó sea uno de los dos correos administradores (`mercadeo@ciles.co` o `pablo.patino@ciles.co`) — si no, lo redirige a su perfil normal (no puede ni intentar ver el panel).
2. Si es el admin, trae todos los documentos de la colección `vendedores` (permitido por la regla de arriba) y los agrupa por el campo `ciudad`, mostrando algo como:
   - Medellín — 14 registrados
   - Bogotá — 9 registrados
   - Cali — 5 registrados
   - (sin ciudad) — 2 registrados
3. También sirve de base para sumar más adelante: total de asesores, promedio de XP, módulos más completados, etc. — decime si alguno de estos te interesa desde ya y lo incluyo en la primera versión del panel.
4. Cualquiera de los dos correos administradores va a tener un enlace a este panel desde su propio Perfil (los demás asesores no lo ven).

### B.7 — Qué hago yo cuando me pases las credenciales

Una vez me pegues el `firebaseConfig` del paso B.4, yo:
1. Agrego el SDK de Firebase (`firebase-app` + `firebase-auth` + `firebase-firestore`, vía CDN, sin necesidad de `npm`).
2. En el onboarding, reemplazo los campos manuales de nombre/correo por un botón **"Continuar con Google"** (ventana emergente de Google, un click) — el nombre, correo y foto quedan tomados directo de la cuenta de Google. Ciudad y "¿ya vendes CILES hoy?" se le siguen preguntando después, porque Google no los sabe.
3. Extiendo `assets/js/app-vendedor.js` para que `getEstadoVendedor()` / `setEstadoVendedor()` lean y escriban en la colección `vendedores` de Firestore, usando el `uid` de Google como identificador del documento.
4. Construyo el panel `vendedores-admin.html` del paso B.6.
5. Si un asesor entra desde otro celular, con el mismo login de Google recupera automáticamente su progreso — ya no depende del navegador.
6. Pruebo el flujo completo (login de asesor → lección → progreso, y por separado login del admin → panel de estadísticas) antes de avisarte que está listo.

No hace falta que instales nada en tu máquina para esta parte — todo corre desde el navegador vía CDN, igual que el resto del sitio.

---

## Resumen de próximos pasos para vos

1. **Netlify**: elegí A.1 (rápido) o A.2 (recomendado) y seguí los pasos. Avisame la URL cuando la tengas.
2. **Firebase**: creá el proyecto y activá Google Sign-In (B.1-B.4), y pasame el `firebaseConfig`. Yo hago la integración en código apenas lo tenga.
3. Una vez tengas la URL de Netlify, volvé al paso B.2.4 y agregala a los dominios autorizados de Firebase — si no, el login con Google no va a funcionar en el sitio publicado (en `localhost`, mientras probamos, sí funciona sin este paso).
4. Administradores confirmados: `mercadeo@ciles.co` y `pablo.patino@ciles.co`. Ya quedaron en la regla de seguridad del paso B.5.
