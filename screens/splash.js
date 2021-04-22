import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './dashboard';
import Detail from './detail';

const Stack = createStackNavigator();

export default function Splash() {
    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }