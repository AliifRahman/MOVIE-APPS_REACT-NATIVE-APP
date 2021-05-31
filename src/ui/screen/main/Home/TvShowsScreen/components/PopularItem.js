import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TMDB_IMG_URL} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const PopularItem = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetail', {id: data.id, link: 'tv'});
      }}
      style={styles.ImageContainer}>
      <Image
        source={{uri: `${TMDB_IMG_URL}${data.poster_path}`}}
        style={styles.image}
        resizeMode="cover"></Image>

      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          {data.name}
        </Text>
        <View style={styles.metaRating}>
          <IconM name="star" color={uiColor.star} size={14} />
          <Space width={uiDimen.sm / 2} />
          <Text style={styles.metaRatingText}>{data.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    width: 166,
    height: 268,
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },

  image: {
    width: 166,
    height: 268,
    borderRadius: uiDimen.md,
  },

  metaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: uiDimen.md,
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
    borderBottomLeftRadius: uiDimen.md,
    borderBottomRightRadius: uiDimen.md,
    justifyContent: 'center',
  },

  metaTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
  },

  metaRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaRatingText: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
  },
});

PopularItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(PopularItem);
