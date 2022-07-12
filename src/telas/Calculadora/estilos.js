import React from 'react';
import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    conteiner:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#122641',
    },
    equacao:{
        fontSize: 25,
        paddingTop: 50,
        paddingRight: 20,
        paddingBottom: 20,
        alignSelf: 'flex-end',
        color: '#FFFFFF',
    },
    resultado: {
        fontSize: 18,
        paddingRight: 20,
        paddingBottom: 90,
        alignSelf: 'flex-end',
        color: '#FFFFFF',
    },
    conteinerBotao:{
        flexDirection: 'row',
    },
    botao:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 70,
        borderRadius: 20,
        margin: 2,
        backgroundColor: '#4d4679',
    },
    textoBotao:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    botaoAcao:{
        backgroundColor: '#d865b3',
    },

})