import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {Space} from '../../../../../components';
import {uiDimen, uiStyle} from '../../../../../constants';
import WhatsNewItem from './WhatsNewItem';

const WhatsNewSection = ({data}) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>What's New</Text>
      </View>
      <Space height={uiDimen.sm}></Space>

      <ScrollView marginHorizontal={uiDimen.md}>
        {data.map((item, index) => {
          if (index <= 9) {
            return <WhatsNewItem key={index} data={item} />;
          }
        })}
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

WhatsNewSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WhatsNewSection;
