import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import estilos from './estilos';

export default function Calculadora() {
  const [equacao, setEquacao] = useState('')
  const [resultado, setResultado] = useState('')


  const Inserir = (numero) => {
    
    if (equacao == "" && (numero === '/' || numero === '*' || numero === '-' || numero === '+')){
      return setEquacao("IDIOTA! Number first")
    }

    else if (equacao == 'IDIOTA! Number first'){
      setEquacao("")
      let limpo = equacao.substring(0, 0)
      setEquacao(limpo)
      let e = limpo + numero.toString()
      setEquacao(e)
      return 
    }

    else if (['*', '/', '+', '-'].includes(equacao.slice(-1)) && ['*', '/', '+','-'].includes(numero)){
      console.log(equacao.slice(-1))
      let e = equacao.substring(0, equacao.length - 1)
      e = e + numero.toString()
      setEquacao(e)
      return
    }
    
    
    else{
      let e = equacao + numero.toString()
      return setEquacao(e)
    }  
  }
  const Limpar = () => {
    setEquacao("")
    setResultado("")
  }
  const Resultado = () => {
    let res = eval(equacao)
    setResultado(res)
  }
  const Del = () => {
    let d = equacao.substring(0, equacao.length - 1)
    setEquacao(d)
  }


  return (
     <View style={estilos.conteiner}>

        <Text style={estilos.equacao}>{equacao}</Text>
        <Text style={estilos.resultado}>{resultado}</Text>

        <View style={estilos.conteinerBotao}>
            <TouchableOpacity onPress={() => Limpar()} style={[estilos.botao, estilos.botaoAcao]}><Text style={[estilos.textoBotao]}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('(')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}>( </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir(')')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}> )</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('/')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}>/</Text></TouchableOpacity>
        </View>

        <View style={estilos.conteinerBotao}>
            <TouchableOpacity onPress={() => Inserir('7')} style={estilos.botao}><Text style={estilos.textoBotao}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('8')}style={estilos.botao}><Text style={estilos.textoBotao}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('9')} style={estilos.botao}><Text style={estilos.textoBotao}>9</Text></TouchableOpacity>
            <TouchableOpacity  onPress={() => Inserir('*')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}>X</Text></TouchableOpacity>
        </View>

        <View style={estilos.conteinerBotao}>
            <TouchableOpacity onPress={() => Inserir('4')} style={estilos.botao}><Text style={estilos.textoBotao}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('5')} style={estilos.botao}><Text style={estilos.textoBotao}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('6')} style={estilos.botao}><Text style={estilos.textoBotao}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('-')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}>-</Text></TouchableOpacity>
        </View>

        <View style={estilos.conteinerBotao}>
            <TouchableOpacity onPress={() => Inserir('1')} style={estilos.botao}><Text style={estilos.textoBotao}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('2')} style={estilos.botao}><Text style={estilos.textoBotao}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('3')} style={estilos.botao}><Text style={estilos.textoBotao}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('+')} style={[estilos.botao, estilos.botaoAcao]}><Text style={estilos.textoBotao}>+</Text></TouchableOpacity>
        </View>

        <View style={estilos.conteinerBotao}>
            <TouchableOpacity onPress={() => Inserir('0')} style={estilos.botao}><Text style={estilos.textoBotao}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Inserir('.')} style={estilos.botao}><Text style={estilos.textoBotao}>,</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Del()} style={estilos.botao}><Text style={estilos.textoBotao}>del</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Resultado()} style={[estilos.botao, estilos.botaoAcao]}><Text style={[estilos.textoBotao]}>=</Text></TouchableOpacity>
        </View>

     </View>
  );
}
