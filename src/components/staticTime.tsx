import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function StaticTime() {

  const [hora, setHora] = useState<string>('');

  useEffect(() => {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    setHora(`${horas}:${minutos}:${segundos}`);
  }, []);

  const atualizarHora = () => {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    setHora(`${horas}:${minutos}:${segundos}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{hora}</Text>
      </View>

      <View style={styles.btn}>
        <Button title="🔁 Atualizar Hora" onPress={atualizarHora} />
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
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  text: {
    fontSize: 45,
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
  }
});
