import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// 1. DADOS ATUALIZADOS com seu treino
const routines = [
  { id: 'segunda', name: 'Segunda: Peito/Tríceps' },
  { id: 'terca', name: 'Terça: Costas/Bíceps' },
  { id: 'quarta', name: 'Quarta: Quadríceps' },
  { id: 'quinta', name: 'Quinta: Ombros' },
  { id: 'sexta', name: 'Sexta: Posterior/Glúteos' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EvoFit</Text>
        <Text style={styles.subtitle}>Selecione seu treino do dia:</Text>
      </View>

      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // 2. O Link agora passa o 'name' para a próxima tela
          <Link
            href={{
              pathname: `/routine/${item.id}`, // Ex: /routine/segunda
              params: { name: item.name }, // Passa "Segunda: Peito/Tríceps"
            }}
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ paddingHorizontal: 20 }}
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
});