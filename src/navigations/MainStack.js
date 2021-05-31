import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screen/main/global/MovieDetailScreen';
import BottomTab from './BottomTab';
import UpdateProfileScreen from '../ui/screen/main/Home/AccountScreen/components/UpdateProfileScreen';
import ChangePasswordScreen from '../ui/screen/main/Home/AccountScreen/components/ChangePasswordScreen';
import BiographyDetailScreen from '../ui/screen/main/global/MovieDetailScreen/BiographyDetail';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTab}></Stack.Screen>
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}></Stack.Screen>
      <Stack.Screen
        name="BiographyDetail"
        component={BiographyDetailScreen}></Stack.Screen>
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}></Stack.Screen>
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
