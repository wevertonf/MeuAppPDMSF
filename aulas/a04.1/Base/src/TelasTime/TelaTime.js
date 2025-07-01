import React from "react";
import {Text } from "react-native";

function TelaTime({navigation, route}) {

    //desserializando o objeto
    const{time, simbolo, facanha} = route.params

    return (
        <>
            <Text> Tela do Time  </Text>
            <Text> {time} </Text>
        </>
    )
}

export default TelaTime;
