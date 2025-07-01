import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: '#000'
        },
        simbolo: {
            width: 175,
            height: 175
        },
        viewCentral: {
            marginTop: 20,
            borderColor: 'white', 
            borderWidth: 1,
            borderRadius: 10, 
            borderStyle: 'dashed', 
            backgroundColor: 'blue', 
            padding: 10, 
        },
        texto: {
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold'
        },
        escudo: {
            width: 75,
            height: 75

        },
        card: {
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 8,
            padding: 10,
            alignItems: 'center',
            marginBottom: 10

        },
        nome: {
            fontSize: 20,
            fontWeight: 'bold'

        },
        conquista: {
            fontSize: 16,
            fontWeight: 'thin'
        }
    }
);