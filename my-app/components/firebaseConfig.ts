// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9xHz8kwXMwCryF3_NvLXpx550jqgcbJk",
  authDomain: "evofit-app-d2e47.firebaseapp.com",
  projectId: "evofit-app-d2e47",
  storageBucket: "evofit-app-d2e47.firebasestorage.app",
  messagingSenderId: "234654176517",
  appId: "1:234654176517:web:3fcac7549d50067393536c",
  measurementId: "G-ZKJVZ1X7K2"
};

// Initialize Firebase

// 2. INICIALIZAÇÃO (NÃO MEXA AQUI)
// Variáveis globais que o Canvas usa (não se preocupe com elas)
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const fbConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : firebaseConfig;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : undefined;

// Inicializa o app Firebase
const app = initializeApp(fbConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Ativa logs detalhados do Firestore no console (ótimo para debug)
setLogLevel('debug');

// Função para autenticar o usuário
const signIn = async () => {
  try {
    if (initialAuthToken) {
      // Usa o token do Canvas se disponível
      await signInWithCustomToken(auth, initialAuthToken);
    } else {
      // Se não, entra como anônimo
      await signInAnonymously(auth);
    }
  } catch (error) {
    console.error("Erro na autenticação:", error);
  }
};

// Conecta o usuário assim que o app carrega
signIn();

// Exporta o 'db' e o 'auth' para usarmos em outras telas
export { db, auth, appId };