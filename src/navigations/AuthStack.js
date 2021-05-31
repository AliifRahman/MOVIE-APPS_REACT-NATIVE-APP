import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../ui/screen/auth/SignInScreen';
import SingUpScreen from '../ui/screen/auth/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SingUpScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
