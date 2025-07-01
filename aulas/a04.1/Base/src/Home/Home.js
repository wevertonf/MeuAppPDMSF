import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import ItemLista from "../ItemLista/ItemLista";

function Home({ navigation }) {
    return (
        <SafeAreaView>
            <Text> Lista de Times </Text>
            <ScrollView>
                <Pressable
                    onPress={
                        () => {
                            navigation.navigate('TelaTime',
                                {
                                    time: "Time A",
                                    facanha: "Campeão",
                                    simbolo: "https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/10/gr%C3%AAmio-escudo.png?fit=512%2C512&ssl=1"
                                }
                            )
                        }
                    }
                >
                    <ItemLista
                        nome="Time A"
                        facanha="Campeão"
                        simbolo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/10/gr%C3%AAmio-escudo.png?fit=512%2C512&ssl=1"
                    >
                    </ItemLista>
                </Pressable>

                <ItemLista
                    nome="Time B"
                    facanha="Campeão"
                    simbolo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/10/gr%C3%AAmio-escudo.png?fit=512%2C512&ssl=1"
                >
                </ItemLista>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home