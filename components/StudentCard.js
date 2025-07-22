import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StudentCard({ nombre, edad, imagen }) {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.image} />
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.age}>Edad: {edad} años</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  age: {
    fontSize: 16,
    color: '#555',
  },
});
