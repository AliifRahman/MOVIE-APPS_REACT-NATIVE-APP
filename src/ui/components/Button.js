import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {uiDimen, uiStyle, uiColor} from '../constants';

const Button = ({title, onPress, outlined = false, loadingButton = false}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container({outlined})}>
      {loadingButton ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <Text style={styles.title({outlined})}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: ({outlined}) => ({
    backgroundColor: outlined ? uiColor.bg : uiColor.primary,
    alignItems: 'center',
    paddingVertical: uiDimen.md,
    borderRadius: uiDimen.sm,
    borderWidth: 2,
    borderColor: uiColor.primary,
  }),
  title: ({outlined}) => ({
    ...uiStyle.textMedium,
    color: outlined ? uiColor.primary : uiColor.text,
    fontSize: 16,
  }),
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
};

export default Button;
