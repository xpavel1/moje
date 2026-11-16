import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // Stav pro uchování aktuálního počtu kliknutí
  const [pocet, setPocet] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.nadpis}>Moje první aplikace</Text>
      <Text style={styles.cislo}>Počet kliknutí: {pocet}</Text>
      
      <Button 
        title="Klikni na mě" 
        onPress={() => setPocet(pocet + 1)} 
      />
    </View>
  );
}

// Základní styly pro vzhled aplikace
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nadpis: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cislo: {
    fontSize: 18,
    marginBottom: 20,
  },
});
