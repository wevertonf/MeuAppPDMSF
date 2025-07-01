import { StyleSheet, View } from "react-native";

export default () => {
    return(
        <View style={[styles.container, {flexDirection: 'row'} ] }>
            <View style={ {flex: 1, backgroundColor: 'red', } } />
            <View style={{flex: 6, backgroundColor: 'darkorange'}} />
            <View style={{flex: 3, backgroundColor: 'blue'}} />

        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        }
    }
);