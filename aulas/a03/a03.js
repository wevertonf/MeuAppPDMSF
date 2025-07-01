import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ex01 from './aulas/a02/Ex01';
import ItemLista from './aulas/a03/ItemLista';
import Estilo from './aulas/a02/Estilo';


/* 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

const Botao = ({ onPress }) => {
  return <Button title="Clique aqui" onPress={onPress} />;
};


export default function App() {
  return (
/*    <View style={styles.container}>  
        <Botao onPress={() => alert("Botão clicado!")} />
        <Ex01 time="Laion" conquista="Campeão Brasileiro 2025" />
        <StatusBar style='auto'/>

      </View>
*/
    <View style={styles.container}>
      <Text style={Estilo.texto}>Times Campeões 2025</Text>
      <ScrollView>
        <>
        <ItemLista time="Laion" cor="#67c4ff" conquista="Brasileirão 2025" escudo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2017/04/fortaleza-escudo.png?resize=512%2C512&ssl=1" />
        <ItemLista time="Internacional" cor="#ff674d" conquista="Copa do Brasil 2025" escudo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/Internacional-logo.png?resize=512%2C512&ssl=1"/>
        <ItemLista time="Grêmio" cor="#67c4ff" conquista="Rebaixado p/ Série B 2025" escudo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/10/gr%C3%AAmio-escudo.png?fit=512%2C512&ssl=1" />
        <ItemLista time="Ceará" cor="#bec0a6" conquista="Copa do Nordeste 2025" escudo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2017/04/ceara-escudo.png?w=512&ssl=1"/>
        <ItemLista time="Vasco da Gama" cor="#bec0a6" conquista="Conmebol Sulamericana 2025" escudo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/logo-vasco-da-gama-1.png?w=320&ssl=1"/>
        <ItemLista time="Racing Club" cor="#67c4ff" conquista="Conmebol Libertadores 2025" escudo="https://kitsdreamleaguesoccer.com/wp-content/uploads/2019/04/escudo-racing-club-dream-league-soccer-512-logo.png"/>
        </>
      </ScrollView>
      
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
