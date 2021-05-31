import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import MoviesScreen from '../ui/screen/main/Home/MoviesScreen';
import TvShowsScreen from '../ui/screen/main/Home/TvShowsScreen';
import FavouritesScreen from '../ui/screen/main/Home/FavouritesScreen';
import AccountScreen from '../ui/screen/main/Home/AccountScreen';
import {uiColor, uiDimen, uiStyle} from '../ui/constants';

const Tab = createBottomTabNavigator();

const BottomIcon = ({family, name, color}) => {
  if (family === 'material-community') {
    return <IconMC name={name} color={color} size={24} />;
  } else if (family === 'material') {
    return <IconM name={name} color={color} size={24} />;
  }
};

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const routeNames = [
    {
      title: 'Movies',
      icon: {
        family: 'material',
        name: 'local-movies',
      },
    },
    {
      title: 'TV Shows',
      icon: {
        family: 'material',
        name: 'tv',
      },
    },
    {
      title: 'Favourites',
      icon: {
        family: 'material-community',
        name: 'heart-outline',
      },
    },
    {
      title: 'Account',
      icon: {
        family: 'material-community',
        name: 'account-circle-outline',
      },
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: uiColor.bgBottomTab,
        paddingVertical: uiDimen.md,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <BottomIcon
              family={routeNames[index].icon.family}
              name={routeNames[index].icon.name}
              color={isFocused ? uiColor.primary : uiColor.accent1}
            />
            <Text
              style={{
                ...uiStyle.textSemiBold,
                fontSize: 12,
                color: isFocused ? uiColor.primary : uiColor.accent1,
              }}>
              {routeNames[index].title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="TvShows" component={TvShowsScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
