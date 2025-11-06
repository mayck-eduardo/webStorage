import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator,
  Button // Botão de Login
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection, onSnapshot, query, doc } from 'firebase/firestore';
import { db, auth, appId } from '../../firebaseConfig'; // Importa o auth
import { User, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from 'firebase/auth'; // Imports do Auth
import * as Google from 'expo-auth-session/providers/google'; // Import da Sessão Google
import * as WebBrowser from 'expo-web-browser';

// --- 1. COLE SEU WEB_CLIENT_ID AQUI ---
// O ID que você pegou do Google Cloud Console
const WEB_CLIENT_ID = "234654176517-r08mpgfko04csdeh591f5eov8ib4tm8c.apps.googleusercontent.com";
// ---------------------------------------

// Garante que o pop-up do navegador feche
WebBrowser.maybeCompleteAuthSession();

export interface Routine {
  id: string; 
  name: string; 
  order?: number;
}

export default function HomeScreen() {
  const [routines, setRoutines] = useState<Routine[]>([]); 
  const [loading, setLoading] = useState(false); // Inicia como false
  
  // 2. O novo estado de usuário
  const [user, setUser] = useState<User | null>(auth.currentUser); // Pega o usuário atual
  
  const router = useRouter(); // Para navegar

  // 3. Configuração do Hook de Login do Google
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: WEB_CLIENT_ID,
  });

  // 4. Efeito para lidar com a RESPOSTA do login
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .catch(error => {
          console.error("Erro no signInWithCredential:", error);
          Alert.alert("Erro", "Não foi possível logar.");
        });
    }
  }, [response]);

  // 5. Efeito para OUVIR a mudança de usuário (Login ou Logout)
  useEffect(() => {
    setLoading(true);
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Atualiza o estado do usuário
      setLoading(false);
    });
    return () => unsubscribeAuth(); // Limpa o "ouvinte"
  }, []);

  // 6. Efeito para BUSCAR DADOS (depende do 'user')
  useEffect(() => {
    // Se não há usuário, não busca nada
    if (!user) {
      setRoutines([]); // Limpa as fichas se o usuário fizer logout
      return;
    }

    setLoading(true);
    // 7. USA O ID DO USUÁRIO LOGADO!
    const userId = user.uid; 
    const userRoutinesCollection = collection(db, 'artifacts', appId, 'users', userId, 'routines');
    const q = query(userRoutinesCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const routinesData: Routine[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Routine));
      setRoutines(routinesData);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar fichas: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]); // Roda de novo se o 'user' mudar

  // ----- RENDERIZAÇÃO -----

  // 8. Se estiver carregando o usuário
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }

  // 9. Se NÃO estiver logado, mostra a Tela de Login
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>EvoFit</Text>
          <Text style={styles.subtitle}>Acesse para continuar</Text>
          <Button
            title="Login com Google"
            onPress={() => promptAsync()} // Inicia o pop-up do Google
            disabled={!request}
          />
        </View>
      </SafeAreaView>
    );
  }

  // 10. Se ESTIVER logado, mostra as Fichas
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EvoFit</Text>
        <Text style={styles.subtitle}>Selecione seu treino do dia:</Text>
        <Text style={styles.userIdText}>Logado como: {user.email || user.uid}</Text>
        <Button title="Sair" onPress={() => auth.signOut()} color="#FF4500" />
      </View>

      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: `/routine/${item.id}`,
              params: { name: item.name },
            }}
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhuma ficha encontrada. Cadastre no Firestore.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  // Estilo da tela de Login
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  emptyText: {
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  userIdText: {
    color: '#555',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  }
});