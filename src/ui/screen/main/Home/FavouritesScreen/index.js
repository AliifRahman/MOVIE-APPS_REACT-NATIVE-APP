import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TopTap from './components/TopTap';

import {uiStyle} from '../../../../constants';

const FavouritesScreen = () => {
  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      {/* <Text>Favourites Screen</Text> */}
      <TopTap />
    </SafeAreaView>
  );
};

export default FavouritesScreen;
