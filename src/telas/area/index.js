import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Vibration, ToastAndroid } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';

import estilos from "./estilos.js";

export default function Area(){


    const [altura, setAltura] = useState(0.0)
    const [largura, setLargura] = useState(0.0)

    const Calcular = (quadrado) => {
        if (altura != 0.0 && largura != 0.0){
            let resultado = quadrado ?  parseFloat(altura) * parseFloat(largura) : (parseFloat(altura) * parseFloat(largura)) / 2
            let texto = `Altura: ${altura}\nLargura: ${largura}\nÁrea: ${resultado.toString().replace(".", ",")}m²`
            Alert.alert("Resultado área quadrado", texto)
            return
        }else {
            Vibration.vibrate()
            ToastAndroid.show("Preencha todos os capos.", ToastAndroid.SHORT)
            }
    }
    return(
        <View style={estilos.body}>
            <View style={estilos.conteiner}>

                <View style={estilos.row}>
                    <Text style={estilos.texto}>Altura</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder='metro'
                        placeholderTextColor='white'
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={(text) => setAltura(text.toString())}
                    />
                </View>

                <View style={estilos.row}>
                    <Text style={estilos.texto}>Largura</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder='metro'
                        placeholderTextColor='white'
                        keyboardType="numeric"
                        value={largura}
                        onChangeText={(text) => setLargura(text.toString())}
                    />
                </View>

                <View style={estilos.divisor}></View>
                
                <View style={[estilos.row, estilos.rowBotoes]}>
                    <TouchableOpacity   
                        style={estilos.botao} 
                        onPress={() => Calcular(true)}>
                            <Text style={estilos.botaoTexto}>Calc quadrado</Text>
                            <AntDesign name="minussquareo" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={estilos.botao}
                        onPress={() => Calcular(false)}>
                        <Text style={estilos.botaoTexto}>Calc trian</Text>
                        <Feather name="triangle" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}