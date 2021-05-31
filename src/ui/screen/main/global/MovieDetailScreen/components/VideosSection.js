import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const VideosSection = ({videos, playVideo}) => {
  return (
    <>
      <View style={{paddingHorizontal: uiDimen.lg}}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Videos</Text>
      </View>
      <Space height={uiDimen.sm} />

      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Space width={uiDimen.md} />
        {videos?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => playVideo(item.key)}
              style={{
                marginHorizontal: uiDimen.sm,
                width: 126,
              }}>
              <Image
                source={{
                  uri: `http://img.youtube.com/vi/${item.key}/default.jpg`,
                }}
                style={{
                  width: '100%',
                  height: 82,
                  backgroundColor: uiColor.bg,
                  borderRadius: uiDimen.sm,
                }}
              />
              <Space height={uiDimen.sm / 2} />
              <Text
                style={{...uiStyle.textRegular, fontSize: 14}}
                numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};

export default VideosSection;
