import React from "react";
import { Text, SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import dbTime from "./dbTime.json";


function Competicoes({route}) {
    
    const { nome, escudo } = route.params;

    const timesCompeticao = dbTime.times.find(t => t.nome === nome);

    const participacoes = timesCompeticao.competicoes;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {participacoes.map((n, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.titulo}>{n.nome}</Text>
                            <Text style={styles.nome}><Text style={styles.label}>Tipo:</Text> {n.tipo}</Text>
                            <Text style={styles.nome}><Text style={styles.label}>Fase:</Text> {n.fase}</Text>
                            <Text style={styles.nome}><Text style={styles.label}>Início:</Text> {n.inicio}</Text>
                            <Text style={styles.nome}><Text style={styles.label}>Fim:</Text> {n.fim}</Text>
                        </View>
                    ))}
            </ScrollView>  
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
        container: {
            //ajustar em linhas
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            paddingTop: 10,
          },
        scrollContainer: {
            width: '100%',
            alignItems: 'center',
        },
          titulo: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          },
          card:{
            flexDirection: 'column',
            borderWidth:1,
            borderColor: 'white',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            marginBottom: 10,
            backgroundColor: 'black',
            width: '100%',
            height: '220'
        },
        img:{
            width: 100,
            height:100,
            margin: 10
        },
        nome: {
            fontSize: 20,
            color: 'white',
            marginBottom: 4
        },
        label:{ 
            fontWeight: 'bold',
            color: '#bbb'
        }
    });

export default Competicoes;