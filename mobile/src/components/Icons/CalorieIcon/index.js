import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

export default function CalorieIcon({ name, size, color, style, ...rest }) {
  return (
    <View style={style}>
      <Icon {...rest} name={name} size={size} color={color} />
    </View>
  );
}

CalorieIcon.defaultProps = {
  name: 'whatshot',
  size: 22,
  color: '#fff',
};

CalorieIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.oneOf(PropTypes.object, PropTypes.arrayOf(PropTypes.object)),
};
