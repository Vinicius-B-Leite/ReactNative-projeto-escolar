import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        widht: '100%',
        height: '100%',
        alignItems: 'center'
    },
    form:{
        marginTop: 150,
        backgroundColor: 'white',
        width: 300,
        height:  350,
    },
    label:{
        fontSize: 25,
        paddingLeft: 20,
        paddingTop: 20,
    },
    input:{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        fontSize: 18,
        marginBottom: 40,
        width: '70%',
        marginLeft: 20,
    },
    btn:{
        width: '95%',
        backgroundColor: '#564a7c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
    },
    btnText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40%',
        zIndex: -1,
    }
})