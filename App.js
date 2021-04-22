import React, { Component } from 'react';
import Welcome from './screens/welcome';
import SignUp from './screens/signUp';
import Login from './screens/login';
import OtpVerify from './screens/otpVerify';
import ForgotPass from './screens/forgotPass';
import ResetPass from './screens/resetPass';
import MyTab from './Tab';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="MyTab" component={MyTab} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
