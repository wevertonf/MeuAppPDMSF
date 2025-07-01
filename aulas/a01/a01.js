import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//import Comp01 from './aulas/a01/Comp01';
//import Comp02 from './aulas/a01/Comp02';
import Perfil from './aulas/a01/Perfil';

export default function App() {
  return (
/*  <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
*/

/*  <SafeAreaView styles={styles.container}>
        <Text>{1+1}</Text>
    </SafeAreaView>
*/

/*  <View style={styles.container}>
      <Comp02 label={"Clique aqui!"} />
    </View>
*/

    <View style={styles.container}>
      <Perfil nome="Jubileu Ney" descr="Tigrinho Player" imagem="https://randomuser.me/api/portraits/men/2.jpg" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
