import { Linking, Pressable, Text, View } from "react-native";
import Design from "./Design";

export default ({navigation}) =>{
    return(
        <View style={Design.ctnrHome}>
            <Pressable
                style={ ({ pressed }) => [Design.botao, { backgroundColor: pressed? "#2980b9":"#fff" }] }
                onPress={ () => navigation.navigate('Sobre') }
                //onPress={ () => navigation.navigate('Sobre', { id: 1, "nome": "Fulano" }) }
            >
                <Text style={Design.textoBotao}>Go to Sobre</Text>
            </Pressable>

            <Pressable onPress={() => Linking.openURL("https://google.com")}>
                <Text>Abrir Google...</Text>
            </Pressable>

        </View>
    );
}