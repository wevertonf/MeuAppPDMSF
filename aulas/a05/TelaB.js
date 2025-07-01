import { Text, View } from "react-native";
import Visual from "./Visual";
import React from "react";

export default ({mensagem}) => {
    return (
        <View style={Visual.container}>
            <Text>{mensagem}</Text>
        </View>
    );
}