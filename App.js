import { StatusBar } from 'expo-status-bar';
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import ZipCodeScreen from './screen/ZipCodeScreen';
 import WeatherScreen from './screen/WeatherScreen';

 const Stack = createStackNavigator();

 export default function App() {
   return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home"component={ZipCodeScreen}
           options={{
           headerStyle: {
            backgroundColor: 'blue',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
         }}
       />
      <Stack.Screen name = "Weather" component= {WeatherScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}
