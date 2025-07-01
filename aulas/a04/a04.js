import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Design from './aulas/a04/Design';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import Sobre from './aulas/a04/Sobre';
import Home from './aulas/a04/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen component={Home} name='Home'
          options={ { title:"INICIAL", headerLeft: () => (
            <Icon name="home" size={20} color="black" style={{marginLeft: 15}}/>
          ) } }
        />

        <Stack.Screen component={Sobre} name='Sobre'
          options={ { title:"Sobre", headerLeft: () => (
            <Icon name="building" size={20} color="blue" style={{marginLeft: 15}}/>
          ) } } 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
