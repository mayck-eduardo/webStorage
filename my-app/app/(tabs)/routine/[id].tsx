import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dados fictícios de exercícios
const exercises = {
  'treino-a': [
    { id: 'supino', name: 'Supino Reto', sets: '4x10' },
    { id: 'crucifixo', name: 'Crucifixo Inclinado', sets: '3x12' },
    { id: 'triceps-corda', name: 'Tríceps Corda', sets: '4x12' },
  ],
  'treino-b': [
    { id: 'barra-fixa', name: 'Barra Fixa', sets: '4x falha' },
    { id: 'remada', name: 'Remada Curvada', sets: '4x10' },
    { id: 'rosca-direta', name: 'Rosca Direta', sets: '3x12' },
  ],
  'treino-c': [
    { id: 'agachamento', name: 'Agachamento Livre', sets: '4x10' },
    { id: 'leg-press', name: 'Leg Press 45', sets: '4x12' },
    { id: 'desenvolvimento', name: 'Desenvolvimento Militar', sets: '4x10' },
  ],
};

// Tipos para garantir que nosso ID é uma das chaves de 'exercises'
type RoutineId = keyof typeof exercises;

export default function RoutineScreen() {
  // 1. Pega o [id] da URL
  // Se a URL for /routine/treino-a, o 'id' será "treino-a"
  const { id } = useLocalSearchParams<{ id: RoutineId }>();

  // 2. Busca os exercícios para essa ficha
  // Se o 'id' não for válido, usa um array vazio
  const routineExercises = id && exercises[id] ? exercises[id] : [];
  const routineName = id ? id.replace('-', ' ').toUpperCase() : 'Ficha';

  return (
    <SafeAreaView style={styles.container}>
      {/* 2. Configura o Título da Página */}
      {/* O Stack.Screen permite mudar o título da barra superior */}
      <Stack.Screen
        options={{
          title: routineName,
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />

      <FlatList
        data={routineExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSets}>{item.sets}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.header}>Exercícios de Hoje:</Text>
        }
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
}

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
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  cardSets: {
    fontSize: 16,
    color: '#B0B0B0',
  },
});