import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {Space} from '../../../../../../components';
import {uiDimen, uiStyle} from '../../../../../../constants';
import TvCreditItem from './TvCreditItem';

const TvCreditSection = ({data}) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>TV Shows</Text>
      </View>
      <Space height={uiDimen.md}></Space>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Space width={uiDimen.md} />
        {data.map((item, index) => {
          return <TvCreditItem key={index} data={item} />;
        })}
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    marginHorizontal: uiDimen.lg,
  },
  headingTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 16,
  },
});

export default TvCreditSection;
