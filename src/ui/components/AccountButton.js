import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {uiDimen, uiStyle, uiColor} from '../constants';

const AccountButton = ({
  title,
  onPress,
  accountOutlined = false,
  loadingButton = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container({accountOutlined})}>
      {loadingButton ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: ({accountOutlined}) => ({
    backgroundColor: accountOutlined ? uiColor.bg : uiColor.primary,
    alignItems: 'center',
    paddingVertical: uiDimen.md,
    borderRadius: uiDimen.sm,
    borderWidth: 1,
    borderColor: accountOutlined ? uiColor.placeholder : uiColor.primary,
  }),
  title: {
    ...uiStyle.textMedium,
    color: uiColor.text,
    fontSize: 16,
  },
});

AccountButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  accountOutlined: PropTypes.bool,
};

export default AccountButton;
