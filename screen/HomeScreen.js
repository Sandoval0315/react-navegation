import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Módulo 3.5</Text>
      <Text style={styles.subtitle}>
        Desarrollo de componentes para dispositivos móviles
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonText}>Ver perfil del estudiante</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f4f6fc' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4b0082', marginBottom: 12 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#333' },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
