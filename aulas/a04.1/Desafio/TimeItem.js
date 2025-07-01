import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

export default (props) => {
    return (
        <View style={[styles.card, {backgroundColor: props.cor}]}>
            <Image
                style={styles.escudo}
                source={{ uri: props.escudo }}
            >
            </Image>

            <View style={styles.textContainer}>
                <Text style={styles.nome}> {props.nome} </Text>
                <Text style={styles.conquista}> {props.treinador} </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'black',
        flex: 1,
        width: '350'
    },
    escudo: {
        width: 100,
        height: 100,
        alignSelf: 'flex-start'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    nome: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
    conquista: {
        fontSize: 16,
        color: 'white',
        marginTop: 5, // Dá um espaçamento entre o nome e a façanha
        textAlign: 'center', // Alinha o texto à esquerda
        flexWrap: 'wrap' // Garante que o texto não ultrapasse a largura disponível

    }
})

