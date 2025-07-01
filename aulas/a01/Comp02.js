import React from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

export default ( {label} ) => {
    const alertaWeb = () => {
        if(Platform.OS == "web"){
            alert("Pressionado e mostrado na WEB");
        } else {
            Alert.alert("Alerta!", "Botão pressionado");
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>COMPONETE PERSONALIZADO</Text>
            <Button
                title={label}
 //             onPress={ () => Alert.alert("Alerta!", "Botão pressionado!") }
                onPress={alertaWeb}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            margin: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            alignItems: "center",
            backgroundColor: "#f9f9f9"
        },
        texto: {
            fontSize: 18,
            marginBottom: 10,
            fontWeight: "bold"
        }

    }
);