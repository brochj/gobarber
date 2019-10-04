import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from 'react-native-ui-kitten';

import bolo from '~/res/images/recipes/bolo.jpg';

import styles from './styles';

export default function RecipeCardItem({ data, onPress }) {
  const { id, name, preparation_time, servings, difficulty } = data;
  let ptbrDifficulty;

  switch (difficulty) {
    case 'easy':
      ptbrDifficulty = 'fácil';
      break;
    case 'medium':
      ptbrDifficulty = 'médio';
      break;
    case 'hard':
      ptbrDifficulty = 'difícil';
      break;
    default:
      break;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={bolo} />
      <Text style={styles.title} numberOfLines={1} category="h5">
        {id} {name}
      </Text>
      <View style={styles.stats}>
        <View style={styles.row}>
          <Icon name="timer" size={22} color="#666" />
          <Text style={styles.info} category="h6">
            {' '}
            {preparation_time} min
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="people" size={22} color="#666" />
          <Text style={styles.info} category="h6">
            {servings === 1 ? `${servings  } porção` : `${servings  } porções`}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="network-check" size={22} color="#666" />
          <Text style={styles.info} category="h6">
            {' '}
            {ptbrDifficulty}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
