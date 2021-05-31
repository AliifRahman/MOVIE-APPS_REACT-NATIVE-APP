import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TMDB_IMG_URL} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const TopRatedItem = ({data, navigation}) => {
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
        {/* <Space height={uiDimen.sm / 2}></Space> */}
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
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },

  image: {
    width: 114,
    height: 160,
    borderTopLeftRadius: uiDimen.sm,
    borderTopRightRadius: uiDimen.sm,
  },

  metaContainer: {
    width: 114,
    flexDirection: 'column',
    padding: uiDimen.sm,
    backgroundColor: uiColor.accent1,
    borderBottomLeftRadius: uiDimen.sm,
    borderBottomRightRadius: uiDimen.sm,
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

TopRatedItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(TopRatedItem);
