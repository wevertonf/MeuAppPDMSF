import React from "react";
import { Text, SafeAreaView, View, Image, Pressable, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Plantel from "./Plantel";
import Competicoes from "./Competicoes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {

  //desserializando o objeto
  const { nome, escudo, conquista } = route.params

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{nome}</Text>
          <Image source={{ uri: escudo }} style={styles.escudo} />
          <Text style={styles.subtitulo}>Conquista</Text>
          <Text style={styles.conquista}>{conquista}</Text>
        </View>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
              height: 30,
              borderStyle: 'none',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 15,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              height: 60,
              paddingTop: 10,
            },
            tabBarActiveTintColor: '#2980b9',
            tabBarInactiveTintColor: '#fff',
          }}
        >
          <Tab.Screen
            name="Plantel"
            component={Plantel}
            initialParams={{ nome, escudo}}
            options={{
              tabBarLabel: 'Plantel',
              tabBarLabelPosition: 'below-icon',
              tabBarIcon: ({ focused }) => (
                <Image style={styles.iconeBotao}
                  source={require('./src/plantel.png')}
                />
              )
            }}
          />
          <Tab.Screen
            name="Competições"
            component={Competicoes}
            initialParams={{ nome, escudo}}
            options={{
              tabBarLabel: 'Competiçoes',
              tabBarLabelPosition: 'below-icon',
              tabBarIcon: () => (
                <Image style={styles.iconeBotao}
                  source={require('./src/competicoes.png')}
                />
              )
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  escudo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#000',
  },
  conquista: {
    fontSize: 16,
    color: '#fff',
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    maxHeight: 85,
    maxWidth: 85,
    width: '100%',
    height: '100%',
  },
  iconeBotao: {
    width: 40,
    height: 40,
    marginBottom: 5,
    alignSelf: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
  }
});

