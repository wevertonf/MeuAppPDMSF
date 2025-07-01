import { Image, Text, View } from "react-native";
import Estilo from "../a02/Estilo";

export default (props) => {
    return (
        <View style={[Estilo.card, {backgroundColor: props.cor}]}>
            <Image
                source={{ uri:props.escudo}}
                style={Estilo.escudo}
            />
            <View>
                <Text style={Estilo.nome}>{props.time}</Text>
                <Text style={Estilo.conquista}>{props.conquista}</Text>
            </View>
            

        </View>


    );
}