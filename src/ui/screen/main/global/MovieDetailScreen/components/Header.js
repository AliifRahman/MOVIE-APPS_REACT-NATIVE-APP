import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from '@react-navigation/compat';
import PropTypes from 'prop-types';
import {TMDB_IMG_URL} from '@env';

import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const Header = ({navigation, posterPath}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 360,
        backgroundColor: 'red',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: uiDimen.md,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 100,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrow-back" size={24} color="white"></Icon>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconMC name="heart-outline" size={24} color="white"></IconMC>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: uiColor.accent1,
          opacity: 0.8,
          zIndex: 50,
        }}
      />
      {posterPath && (
        <Image
          source={{uri: `${TMDB_IMG_URL}${posterPath}`}}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: uiColor.accent1,
            opacity: 0.8,
          }}
          resizeMode="cover"
        />
      )}
    </View>
  );
};
Header.propTypes = {
  posterPath: PropTypes.string,
};

export default withNavigation(Header);
