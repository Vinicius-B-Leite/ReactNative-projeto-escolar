import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import estilos from "./estilos";

export default function TelaPrincipal({navigation}){
    return (
        <View style={estilos.conteiner}>
            <LinearGradient
                colors={['#122641', '#4d4679','#d865b3']}
                start={{x: 0,y: 1}}
                end={{x: 1,y: 0}} 
                style={estilos.background}/>

            <TouchableOpacity style={estilos.botaoNav} onPress={() => navigation.navigate('Calculadora')}><Text style={estilos.textBotaoNav}>Calculadora</Text></TouchableOpacity>
            <TouchableOpacity style={estilos.botaoNav} onPress={() => navigation.navigate('MediaAluno')}><Text style={estilos.textBotaoNav}>Média Aluno</Text></TouchableOpacity>
            <TouchableOpacity style={estilos.botaoNav} onPress={() => navigation.navigate('Login')}><Text style={estilos.textBotaoNav}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={estilos.botaoNav} onPress={() => navigation.navigate('Area')}><Text style={estilos.textBotaoNav}>Area</Text></TouchableOpacity>
        </View>   
    )
}