import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body:{
        backgroundColor: '#202d4f',
        height: '100%',
        padding: 30,
    },
    conteiner:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#244068',
        position: 'relative',
    },
    row:{
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    texto:{
        width: 100,
        fontSize: 20,
        color: '#FFFFFF',
    },
    input:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: "60%",
        color: '#FFFFFF',
        paddingLeft: 10,
        borderRadius: 10,
    },
    botao:{
        flexDirection: 'row',
        backgroundColor: '#d865b3',
        width: 150,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    botaoTexto:{
        fontSize: 15,
        color: '#FFFFFF',
        padding: 10,
    },
    rowBotoes:{
        justifyContent: 'space-evenly',
    },
    divisor:{
        width: '100%',
        height: 5,
        backgroundColor: '#202d4f',
    }
})