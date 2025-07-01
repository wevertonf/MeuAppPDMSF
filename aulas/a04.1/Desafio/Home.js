import React from "react";
import { Text, Pressable, ScrollView, SafeAreaView } from "react-native";
import Estilo from "./Estilo";
import TimeItem from "./TimeItem";
import dbTime from "./dbTime.json";


export default ({ navigation }) => {

  return (

    <SafeAreaView style={Estilo.container}>
      <Text style={Estilo.titulo}>Lista de Times</Text>
      <ScrollView>

        {dbTime.times.map((time, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate("TimeTela", {
                nome: time.nome,
                treinador: time.treinador,
                conquista: time.conquista,
                escudo: time.escudo,
                jogadores: time.jogadores,
                competicoes: time.competicoes
              })
            }
          >
            <TimeItem nome={time.nome} cor={time.cor} treinador={time.treinador} escudo={time.escudo} />
          </Pressable>
        ))}

      </ScrollView>

    </SafeAreaView>
  );
}