import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'




    const [sorte, setSorte ] = useState();

    function alterarsorte(valor){
    setSorte(valor)
  }

  const botaoPressionado = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio*5);
  
    var frases = Array();
    frases[0] = "A felicida so e real quando compartilhada";
    frases[1] = "O senhor é meu pastor e nada faltara";
    frases[2] = "Amigo de todos, Amigo de ninguem";
    frases[3] = "Em terra de cego quem tem um olho é rei";
    frases[4] = "Há pessoas que caminham pela floresta e so encherga LENHA";
  
    var fraseEscolhida = frases[numeroAleatorio];
    setfrase(fraseEscolhida);

  };

  export default function Teste(){
    return (
        <TouchableOpacity onPress={botaoPressionado} style={style.Botao}>    
        <Text style={{ fontSize: 30 }}>{sorte}</Text>
        <Text style={style.textBotao}>{alterarsorte}</Text>

        
        </TouchableOpacity>
    );
}


  

const style = StyleSheet.create ({
    Botao: {
        width: 140,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "red",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
   
    textBotao: {
     color:'white',
     fontSize: 16,
     fontWeight: 'bold',
     textAlign: "center",
     backgroundColor: "Red",
    } 
   
   });