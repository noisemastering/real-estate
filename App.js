import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import HomeScreen from './screens/HomeScreen'
import EstateLivingScreen from './screens/EstateLivingScreen'
import EstateBusinessScreen from './screens/EstateBusinessScreen'
import ValueScreen from './screens/ValueScreen'
import SettingsScreen from './screens/SettingsScreen'
import SearchScreen from './screens/SearchScreen'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HomeStack" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Inicio",
            tabBarIcon: () => <Entypo name="home" size={24} color="black"/>
          }}
        />
        <Tab.Screen 
          name="Vivienda" 
          component={EstateLivingScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Vivienda",
            tabBarIcon: () => <FontAwesome5 name="house-user" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="Oficina" 
          component={EstateBusinessScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Oficinas",
            tabBarIcon: () => <MaterialCommunityIcons name="office-building" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="Avaluos" 
          component={ValueScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Avaluos",
            tabBarIcon: () => <MaterialIcons name="attach-money" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Buscar",
            tabBarIcon: () => <FontAwesome name="search" size={24} color="black"/>
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Ajustes",
            tabBarIcon: () => <FontAwesome name="cog" size={24} color="black"/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
