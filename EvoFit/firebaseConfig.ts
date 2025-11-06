import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  initializeAuth,
  getAuth, // Adicionamos o getAuth
  getReactNativePersistence,
  signInAnonymously,
  signInWithCustomToken
} from 'firebase/auth';
import { getFirestore, setLogLevel } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// 1. SUAS CHAVES REAIS (ATUALIZADAS)
const firebaseConfig = {
  apiKey: "AIzaSyD9xHz8kwXMwCryF3_NvLXpx550jqgcbJk",
  authDomain: "evofit-app-d2e47.firebaseapp.com",
  projectId: "evofit-app-d2e47",
  storageBucket: "evofit-app-d2e47.firebasestorage.app",
  messagingSenderId: "234654176517",
  appId: "1:234654176517:web:3fcac7549d50067393536c",
  measurementId: "G-ZKJVZ1X7K2"
};

// 2. INICIALIZAÇÃO
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// Usamos o fbConfig para garantir que o do Canvas funcione, mas ele vai usar o seu firebaseConfig
const fbConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : firebaseConfig;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : undefined;


// --- AQUI ESTÁ A CORREÇÃO (SINGLETON PATTERN) ---

// 3. Inicializa o App (Singleton)
// Verifica se já existe um app iniciado, se não, inicia um novo.
const app = !getApps().length ? initializeApp(fbConfig) : getApp();

// 4. Inicializa o Auth (Singleton)
let auth: ReturnType<typeof getAuth>;
try {
  // Tenta inicializar (só funciona na primeira vez)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} catch (error: any) {
  if (error.code === 'auth/already-initialized') {
    // Se deu o erro que você viu, apenas pegamos a instância que já existe
    auth = getAuth(app);
  } else {
    // Se for outro erro, nós o mostramos
    console.error("Erro ao inicializar Auth:", error);
    throw error;
  }
}

// 5. Inicializa o Firestore (é seguro chamar várias vezes)
const db = getFirestore(app);

// Ativa logs detalhados do Firestore no console (ótimo para debug)
setLogLevel('debug');

// 6. Função para autenticar o usuário
const signIn = async () => {
  try {
    // Verificamos se já não tem um usuário (evita logins desnecessários no hot reload)
    if (auth.currentUser) {
      return;
    }

    if (initialAuthToken) {
      await signInWithCustomToken(auth, initialAuthToken);
    } else {
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