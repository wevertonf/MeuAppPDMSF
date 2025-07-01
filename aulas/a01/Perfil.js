import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default ({ nome, descr, imagem }) => {
    return(
        <View style={estilagem.cartao}>
            <Image source={ {uri: imagem} } style={estilagem.imagem} />
            <Text style={estilagem.nome}>{nome}</Text>
            <Text style={estilagem.descricao}>{descr}</Text>
        </View>
    );
}

const estilagem = StyleSheet.create(
    {
        cartao: {
            width: 300,
            padding: 25,
            borderRadius: 15,
            backgroundColor: "#baf",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
            marginBottom: 20
        },
        imagem: {
            width: 100,
            height: 100,
            borderRadius: 30,
            marginBottom: 10
        },
        nome: {
            color: "#000",
            fontSize: 20,
            fontWeight: "bold"
        },
        descricao: {
            color: "#555",
            fontSize: 14,
            textAlign: "center"
        }
    }

);