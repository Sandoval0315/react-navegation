import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';
const Imagen = "https://www.laprensa.hn/binrepository/864x648/0c0/0d0/none/11004/UFAP/diseno-sin-titulo-2023-10-23t100901_5844664_20231023101031.jpg"

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StudentCard
        nombre="Nelson Sandoval"
        edad="18"
        imagen={{ uri: Imagen }}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅ Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6fc', padding: 24 },
  button: {
    marginTop: 20,
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
