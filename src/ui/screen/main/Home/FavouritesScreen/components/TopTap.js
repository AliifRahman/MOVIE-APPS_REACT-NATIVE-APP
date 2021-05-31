import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {uiColor, uiStyle, uiDimen} from '../../../../../constants';

const FavMoviesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: uiColor.bg,
      }}>
      <Text style={{...uiStyle.textBold}}>Favourite Movies Screen</Text>
    </View>
  );
};

const FavTvShowsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: uiColor.bg,
      }}>
      <Text style={{...uiStyle.textBold}}>Favourite TV Shows Screen</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const TopTap = () => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: uiDimen.md,
          ...uiStyle.textBold,
          fontSize: 20,
        }}>
        Favourites
      </Text>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 14},
          activeTintColor: uiColor.primary,
          inactiveTintColor: uiColor.accent1,
          style: {backgroundColor: uiColor.bg},
          indicatorStyle: {backgroundColor: uiColor.primary},
        }}>
        <Tab.Screen name="Movies" component={FavMoviesScreen} />
        <Tab.Screen name="Tv Shows" component={FavTvShowsScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTap;
