import { Image, Text, View } from "react-native";
import Estilo from "./Estilo";

export default (props) => {
    return(
        <View style={Estilo.container}>
            <Image
                source={{ uri: 'https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2017/04/fortaleza-escudo.png?resize=512%2C512&ssl=1'}}
                style={Estilo.simbolo}
            />
            <View style={Estilo.viewCentral}>
                <Text style={Estilo.texto}>
                    O {props.time} conquistou {props.conquista}
                </Text>
            </View>

        </View>
    );
}