import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TMDB_IMG_URL} from '@env';

import {Space} from '../../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../../constants';

const TvCreditItem = ({data}) => {
  return (
    <View style={styles.ImageContainer}>
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
          <Icon name="star" color={uiColor.star} size={14} />
          <Space width={uiDimen.sm / 2} />
          <Text style={styles.metaRatingText}>{data.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    width: 154,
    height: 200,
    backgroundColor: 'red',
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: uiDimen.md,
  },
  metaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: uiDimen.md,
    paddingVertical: uiDimen.sm,
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
export default TvCreditItem;
