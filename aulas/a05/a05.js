import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "./aulas/a05/TelaA";
import TelaB from "./aulas/a05/TelaB";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Image } from "react-native";
import Visual from "./aulas/a05/Visual";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
        <Tab.Screen name="AbaA" component={TelaA} options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={30} color={focused ? 'tomato' : color} />
          ),
          tabBarBadge: 3
        }} />
        <Tab.Screen name="AbaB"
//        component={TelaB}
          options={{
            tabBarLabel: 'Bzinho',
            tabBarIcon: ({ focused }) => (<Image source={require('./assets/botao-home.png')} style={
              {
                width: 24,
                height: 24,
                tintColor: focused ? 'tomato' : 'gray'
              }
            } />)
          }}
          >
            {() => <TelaB mensagem="Respeita que nós é a liderança ahn. Um brinde à vida mansa, nóis é a liderança, liderança"/>}
          </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );

}