import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import {Space} from '../../../../../components';
import {uiDimen, uiStyle} from '../../../../../constants';
import PopularItem from './PopularItem';

const PopularSection = ({data}) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>Popular</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headingLinkText}>View All</Text>
        </TouchableOpacity>
      </View>
      <Space height={uiDimen.sm}></Space>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Space width={uiDimen.md} />
        {data.map((item, index) => {
          return <PopularItem key={index} data={item} />;
        })}
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 16,
  },
  headingLinkText: {
    ...uiStyle.textRegular,
    fontSize: 12,
  },
});

PopularSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PopularSection;
