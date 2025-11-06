import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// 1. IMPORTAÇÕES NOVAS: getDocs, orderBy, limit
import {
  collection,
  onSnapshot,
  query,
  doc,
  addDoc,
  serverTimestamp,
  getDocs, // Para buscar o histórico
  orderBy, // Para ordenar o histórico
  limit, // Para limitar a 5 itens
} from 'firebase/firestore';
import { db, auth, appId } from '../../firebaseConfig';

interface Exercise {
  id: string;
  name: string;
  sets: string;
  order?: number;
}

// 2. TIPO PARA O LOG DO HISTÓRICO
interface Log {
  id: string;
  weight: number;
  reps: number;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  } | null; // O Firestore 'timestamp'
}

export default function RoutineScreen() {
  const { id: routineId, name } = useLocalSearchParams<{ id: string; name: string }>();

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  // --- 3. ESTADOS NOVOS PARA O HISTÓRICO ---
  const [history, setHistory] = useState<Log[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  // ------------------------------------

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUserId(user ? user.uid : null);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!userId || !routineId) return;
    setLoading(true);

    const exercisesCollection = collection(db, 'artifacts', appId, 'users', userId, 'routines', routineId, 'exercises');
    const q = query(exercisesCollection); // TODO: Adicionar orderBy("order")

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const exercisesData: Exercise[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Exercise));
      setExercises(exercisesData);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar exercícios: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId, routineId]);

  // --- 4. FUNÇÃO ATUALIZADA (agora é async) ---
  const handleOpenModal = async (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setWeight('');
    setReps('');
    setHistoryLoading(true); // Começa a carregar o histórico
    setModalVisible(true);

    if (!userId || !routineId) return;

    // 5. Busca os últimos 5 logs para este exercício
    const logCollection = collection(
      db, 'artifacts', appId, 'users', userId, 'routines', routineId, 'exercises', exercise.id, 'logs'
    );
    const q = query(logCollection, orderBy('createdAt', 'desc'), limit(5));

    try {
      const querySnapshot = await getDocs(q);
      const logsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Log));
      setHistory(logsData);
    } catch (error) {
      console.error("Erro ao buscar histórico: ", error);
      Alert.alert("Erro", "Não foi possível carregar o histórico.");
    }
    setHistoryLoading(false); // Termina de carregar
  };

  const handleSaveLog = async () => {
    if (!userId || !routineId || !selectedExercise || !weight || !reps) {
      Alert.alert("Erro", "Preencha o peso e as repetições.");
      return;
    }

    try {
      const logCollection = collection(
        db, 'artifacts', appId, 'users', userId, 'routines', routineId, 'exercises', selectedExercise.id, 'logs'
      );

      await addDoc(logCollection, {
        weight: parseFloat(weight),
        reps: parseInt(reps, 10),
        createdAt: serverTimestamp(),
      });

      setModalVisible(false);
      Alert.alert("Sucesso", "Treino registrado!");

    } catch (error) {
      console.error("Erro ao salvar log: ", error);
      Alert.alert("Erro", "Não foi possível salvar o registro.");
    }
  };

  // 6. Função para formatar a data (opcional, mas útil)
  const formatDate = (timestamp: Log['createdAt']) => {
    if (!timestamp) return '...';
    // Converte o timestamp do Firestore para um Date
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: name ? name : 'Ficha de Treino',
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Registrar Treino</Text>
            <Text style={styles.modalSubtitle}>{selectedExercise?.name}</Text>
            
            {/* --- 7. UI DO HISTÓRICO --- */}
            <Text style={styles.historyTitle}>Últimos 5 Registros:</Text>
            {historyLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              // Usamos .map() pois é uma lista curta (máx 5)
              history.length === 0 ? (
                <Text style={styles.historyEmpty}>Nenhum registro anterior.</Text>
              ) : (
                history.map(log => (
                  <View key={log.id} style={styles.historyItem}>
                    <Text style={styles.historyText}>
                      {formatDate(log.createdAt)}:
                    </Text>
                    <Text style={styles.historyText}>
                      {log.weight} kg x {log.reps} reps
                    </Text>
                  </View>
                ))
              )
            )}
            {/* --------------------------- */}

            <View style={styles.separator} />

            <Text style={styles.inputLabel}>Novo Registro:</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Peso (kg)"
                placeholderTextColor="#777"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Reps"
                placeholderTextColor="#777"
                keyboardType="numeric"
                value={reps}
                onChangeText={setReps}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#FF4500" />
              <Button title="Salvar" onPress={handleSaveLog} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* A Lista de Exercícios (igual a antes) */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSets}>{item.sets}</Text>
              </View>
              <TouchableOpacity style={styles.logButton} onPress={() => handleOpenModal(item)}>
                <Text style={styles.logButtonText}>Registrar</Text>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={
            <Text style={styles.header}>Exercícios de Hoje:</Text>
          }
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum exercício encontrado.</Text>
          }
        />
      )}
    </SafeAreaView>
  );
}

// --- 8. ESTILOS ATUALIZADOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSets: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  logButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyText: {
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 24,
    width: '90%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    marginBottom: 20,
  },
  // --- Estilos do Histórico ---
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  historyText: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  historyEmpty: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 16,
  },
  // --- Estilos dos Inputs ---
  inputLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#3A3A3A',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  inputHalf: {
    width: '48%', // Inputs lado a lado
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
});