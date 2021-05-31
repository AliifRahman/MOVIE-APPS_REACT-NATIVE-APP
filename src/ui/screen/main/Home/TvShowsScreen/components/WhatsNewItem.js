import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TMDB_IMG_URL} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const WhatsNewItem = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetail', {id: data.id, link: 'tv'});
      }}
      style={styles.ImageContainer}>
      <Image
        source={{uri: `${TMDB_IMG_URL}${data.poster_path}`}}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          {data.name}
        </Text>
        <View style={styles.metaRating}>
          <IconM name="star" color={uiColor.star} size={14} />
          <Space width={uiDimen.sm / 2} />
          <Text style={styles.metaRatingText}>{data.vote_average}</Text>
        </View>
        <Text numberOfLines={3} style={styles.metaDescriptionText}>
          {data.overview}
        </Text>
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
    width: 95,
    height: 134,
    borderRadius: uiDimen.sm,
    position: 'absolute',
    marginLeft: uiDimen.md,
    zIndex: 1,
  },

  metaContainer: {
    width: 310,
    height: 131,
    padding: uiDimen.md,
    backgroundColor: uiColor.accent1,
    borderRadius: uiDimen.sm,
    marginVertical: uiDimen.md,
  },

  metaTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
    paddingLeft: 110,
  },

  metaRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 110,
  },

  metaRatingText: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
  },

  metaDescriptionText: {
    ...uiStyle.textRegular,
    fontSize: 12,
    paddingLeft: 110,
  },
});

WhatsNewItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(WhatsNewItem);
