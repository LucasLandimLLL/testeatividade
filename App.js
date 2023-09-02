import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function App() {
const [frases, setFrases]=useState()

const botaoPressionado = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio*5);

  var frases = Array();
  frases[0] = "vai cu";
  frases[1] = "O senhor é meu pastor e nada faltara";
  frases[2] = "Amigo de todos, Amigo de ninguem";
  frases[3] = "Em terra de cego quem tem um olho é rei";
  frases[4] = "Há pessoas que caminham pela floresta e so encherga LENHA";

  var fraseEscolhida = frases[numeroAleatorio];
 setFrases(fraseEscolhida)
};

  return (
    <View style={styles.container}>
      <Text>{frases}</Text>
 <Button onPress={botaoPressionado} title="Sorte"></Button>
 <Button onPress={botaoPressionado} title="Sorte"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:16,
    color:"white",
  },
});
