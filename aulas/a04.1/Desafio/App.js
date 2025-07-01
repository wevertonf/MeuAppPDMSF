import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './aulas/a04.1/Desafio/Home';
import TimeTela from './aulas/a04.1/Desafio/TimeTela';



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            title: "Início",
            headerLeft: () => (
              <Icon name='home' size={30} color='black' />)
          }}
        />
        <Stack.Screen
          component={TimeTela}
          name="TimeTela"
          options={({ route }) => ({ title: route.params.nome })}>
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
