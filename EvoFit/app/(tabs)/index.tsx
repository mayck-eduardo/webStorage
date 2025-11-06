import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// 1. Importações do Firestore
import { collection, onSnapshot, query, doc } from 'firebase/firestore';
import { db, auth, appId } from '../../firebaseConfig'; // Subimos 2 níveis



// 2. Definimos o tipo de dado
export interface Routine {
  id: string; 
  name: string; 
  order?: number;
}

export default function HomeScreen() {
  // 3. Estados da tela
  const [routines, setRoutines] = useState<Routine[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [userId, setUserId] = useState<string | null>(null);

  // 4. Efeito para pegar o Usuário
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribeAuth(); 
  }, []);

  // 5. Efeito para buscar os dados
  useEffect(() => {
    if (!userId) {
      setLoading(true);
      return;
    }

    setLoading(true);
    // Caminho no Firestore: /artifacts/{appId}/users/{userId}/routines
    const userRoutinesCollection = collection(db, 'artifacts', appId, 'users', userId, 'routines');
    const q = query(userRoutinesCollection);

    // 6. onSnapshot: "Ouvinte" em tempo real
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const routinesData: Routine[] = [];
      snapshot.forEach((doc) => {
        routinesData.push({ id: doc.id, ...doc.data() } as Routine);
      });
      // TODO: Ordenar por 'order'
      setRoutines(routinesData);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar fichas: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EvoFit</Text>
        <Text style={styles.subtitle}>Selecione seu treino do dia:</Text>
        {/* Mostra o ID do usuário (útil para debug) */}
        <Text style={styles.userIdText}>Seu ID: {userId || 'Autenticando...'}</Text>
      </View>

      {/* 8. Feedback de Carregamento */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={routines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: `/routine/${item.id}`, // Navega para a tela de rotina
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
              Nenhuma ficha encontrada. Adicione seus treinos no Firestore.
            </Text>
          }
        />
      )}
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
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
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
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
  }
});