import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function Timer() {

  const [hora, setHora] = useState<string>('');

  useEffect(() => {
    const atual = setInterval(() => {
      const agora = new Date();
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutos = agora.getMinutes().toString().padStart(2, '0');
      const segundos = agora.getSeconds().toString().padStart(2, '0');

      setHora(`${horas}:${minutos}:${segundos}`);
    }, 1000);

    return () => clearInterval(atual);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{hora}</Text>
      </View>

      <View style={styles.btn}>
        <Button title="🔁Atualizar Hora" onPress={() => atual()} />
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    backgroundColor: '#19CFFC',
    borderColor: '#1BB3EF',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004',
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#00A6ED',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  }
});