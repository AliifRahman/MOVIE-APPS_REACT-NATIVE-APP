import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {TMDB_IMG_CAST_URL} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {Space} from '../../../../../components';
import {uiDimen, uiStyle} from '../../../../../constants';

const CastSection = ({data, navigation}) => {
  return (
    <View style={{paddingHorizontal: uiDimen.lg}}>
      <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Cast</Text>
      <Space height={uiDimen.sm} />

      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BiographyDetail', {id: item.id});
            }}
            key={index}
            style={{flexDirection: 'row', marginBottom: uiDimen.md}}>
            <Image
              source={{uri: `${TMDB_IMG_CAST_URL}${item.profile_path}`}}
              style={{borderRadius: uiDimen.sm, width: 62, height: 62}}
            />
            <Space width={uiDimen.md} />
            <View style={{justifyContent: 'center'}}>
              <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                {item?.name}
              </Text>
              <Text style={{...uiStyle.textRegular, fontSize: 16}}>
                {item?.character}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default withNavigation(CastSection);
