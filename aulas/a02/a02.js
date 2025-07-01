import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CompI from './aulas/a02/CompI';
import FlexComp from './aulas/a02/FlexComp';
import Ex01 from './aulas/a02/Ex01';


export default function App() {
  console.warn('Mensagem de aviso!');

  return (
/*     
    <View style={{flex:1, backgroundColor: 'white'}}>
      <CompI />
 
    </View>
*/
    <View style={styles.container}>
  {/* <FlexComp/> */}
      <Ex01/>
      <StatusBar style='auto'/>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
/* 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
*/
  },
});
