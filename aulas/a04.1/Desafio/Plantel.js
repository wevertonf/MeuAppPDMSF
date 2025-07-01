import React from "react";
import { Text, SafeAreaView, View, ScrollView, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import dbTime from "./dbTime.json"

function Plantel({ route }) {

    const { nome, escudo } = route.params;



    // filtrando o time com base no selecionado
    const plantel = dbTime.times.find(t => t.nome === nome);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {plantel && Object.entries(plantel.jogadores).map(([posicao, jogadores], index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.titulo}>{posicao}</Text>
                        {jogadores.map((jogador, i) => (
                            <Text key={i} style={styles.nome}>• {jogador}</Text>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //ajustar em linhas
        backgroundColor: 'black',
        alignItems: 'center',
        flex: 1,
        maxHeight: Dimensions.get('window').height,
        paddingBottom: 10,
        paddingTop: 10,

    },
    scrollContainer: {
        alignItems: 'center',
        flexGrow: 1,
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        backgroundColor: 'black',

    },
    img: {
        width: 75,
        height: 75,
        alignSelf: 'center',
        marginBottom: 10
    },
    nome: {
        fontSize: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 300,
        textAlign: 'center',
    },
});
export default Plantel;
