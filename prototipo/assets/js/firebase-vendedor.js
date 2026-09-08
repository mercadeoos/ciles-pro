/* =========================================================
   CILES PRO Vendedores — Conexión a Firebase (Auth + Firestore)
   Login con Google + progreso guardado en la nube (colección "vendedores").
   ========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyAkWy7Qmrycoo2gScRPyU5Tvz2Dw3s5Xfs",
  authDomain: "ciles-pro.firebaseapp.com",
  projectId: "ciles-pro",
  storageBucket: "ciles-pro.firebasestorage.app",
  messagingSenderId: "778511412638",
  appId: "1:778511412638:web:44b29214df88defb9ffa8f",
};

firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const fbDb = firebase.firestore();

const ADMINS_CILES_PRO = ["mercadeo@ciles.co", "pablo.patino@ciles.co"];

function esAdminCilesPro(email){
  return !!email && ADMINS_CILES_PRO.includes(email.toLowerCase());
}

function docVendedorRef(uid){
  return fbDb.collection("vendedores").doc(uid);
}

function iniciarSesionGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();
  return fbAuth.signInWithPopup(provider).then(res => res.user);
}

function cerrarSesionVendedor(){
  return fbAuth.signOut().then(() => { location.href = "vendedores-onboarding.html"; });
}

/**
 * Espera a que Firebase resuelva el estado de sesión (una sola vez) y,
 * si hay usuario logueado, sincroniza su documento de Firestore hacia
 * el caché local (localStorage) para que el resto del sitio siga
 * leyendo con las mismas funciones síncronas de siempre.
 * Devuelve el usuario de Firebase (o null si no hay sesión).
 */
function esperarAuthVendedor(){
  return new Promise(resolve => {
    const unsub = fbAuth.onAuthStateChanged(async user => {
      unsub();
      if(user){
        await sincronizarDesdeFirestore(user);
      }
      resolve(user);
    });
  });
}

async function sincronizarDesdeFirestore(user){
  const ref = docVendedorRef(user.uid);
  const snap = await ref.get();
  if(snap.exists){
    setEstadoVendedorLocal({ ...estadoVendedorPorDefecto(), ...snap.data() });
  } else {
    const nuevo = estadoVendedorPorDefecto();
    nuevo.uid = user.uid;
    nuevo.nombre = user.displayName || "";
    nuevo.email = user.email || "";
    nuevo.foto = user.photoURL || "";
    setEstadoVendedorLocal(nuevo);
  }
}
