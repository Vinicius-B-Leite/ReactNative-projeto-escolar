import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import estilos from './estilos'


export default function Login(){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const Validar = () => {
        if (usuario === 'vinicius gostosao' && senha === 'vbl123'){
            Alert.alert('Login acessado', 'Bem-vindo, Vinicius!! Você fez login.')
        }else Alert.alert('Login negado', 'Você não é o Vincius! Vá embora.')
    }
    return (
        <View>

            <LinearGradient
                colors={['#122641', '#564a7c','#d865b3']}
                start={{x: 1,y: 1}}
                end={{x: 1,y: 0}}
                style={estilos.background}/>
            
            <View style={estilos.conteiner}>
                <Image
                    source={require('./img/user.png')}
                    style={estilos.imagem}
                    tintColor='white'
                />
                <TextInput
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                    style={estilos.input}
                    placeholder='Usuário'
                    placeholderTextColor={'white'}
                />
                <TextInput
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    style={estilos.input}
                    placeholder='Senha'
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={Validar} style={estilos.btn}><Text style={estilos.btnText}>Sing in</Text></TouchableOpacity>
                <Text>Esqueceu a senha, rapaz?</Text>
            </View>

        </View>
    )
}