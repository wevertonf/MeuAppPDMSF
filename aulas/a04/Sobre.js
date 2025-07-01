import { Text, View } from "react-native";
import Design from "./Design";

export default () => {
/* export default ({navigation, route}) => {
    const {id, nome} = route.params; */
    return (
        <View style={Design.ctnrSobre}>
            <Text style={Design.texto}>Sobre: </Text>
            {/* <Text style={Design.texto}>Sobre: {nome}</Text> */}
        </View>
    );
}