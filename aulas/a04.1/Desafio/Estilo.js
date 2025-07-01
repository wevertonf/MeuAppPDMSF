import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            //ajustar em linhas
            backgroundColor: 'black',
            alignItems: 'center',
            flex: 1,
//           maxHeight: Dimensions.get('window').height,
            paddingBottom: 10,
            paddingTop: 10,

        },
        titulo: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
        }

    }
);