import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },

    conteiner:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    imagem:{
        width: 200,
        resizeMode: 'contain',
        marginTop: 30,
    },

    input: {
        width: 250,
        borderWidth: 1.8,
        borderColor: 'white',
        borderRadius: 20,
        height: 40,
        backgroundColor: 'transparent',
        marginBottom: 15,
        paddingLeft: 20,
        color: 'white',
        fontSize: 15,
    },

    btn:{
        backgroundColor: 'white',
        width: 250,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginBottom: 15,
        marginTop: 20,
        fontWeight: 'bold',
    },

    btnText:  {
        color: '#5B5B5B',
        fontSize: 20,
    }
})