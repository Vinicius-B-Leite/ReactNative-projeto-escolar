import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import estilos from './estilos';

export default function Tela2() {

  const [nota1, setNota1] = useState();
  const [nota2, setNota2] = useState();

  const calcular = () => {
    let resultado = (parseFloat(nota1) + parseFloat(nota2)) / 2
    return Alert.alert('Média', `A média do aluno é ${resultado}. ${resultado > 5 ? 'O aluno passou!!' : 'O aluno reprovou!!'}`)
  }

  return (
    <View>
      <LinearGradient
           colors={['#122641', '#564a7c','#d865b3']}
           start={{x: 0,y: 0}}end={{x: 1,y: 1}}
           style={estilos.background}/>

        <View style={estilos.conteiner}>

            <View style={estilos.form}>

              <Text style={estilos.label}>Nota 1</Text>
              <TextInput
              style={estilos.input}
                value={nota1}
                onChangeText={text => setNota1(text)}
                keyboardType="numeric"/>

              <Text style={estilos.label}>Nota 2</Text>
              <TextInput
              style={estilos.input}
              value={nota2} 
              onChangeText={text => setNota2(text)}
              keyboardType="numeric" />

              <TouchableOpacity onPress={calcular} style={estilos.btn}><Text style={estilos.btnText}>Calcular</Text></TouchableOpacity>

            </View>

        </View>

    </View>
  );
}
