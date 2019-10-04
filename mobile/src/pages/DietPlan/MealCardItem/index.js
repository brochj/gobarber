import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Layout, Text, Icon, Button } from 'react-native-ui-kitten';
import CalorieIcon from '~/components/Icons/CalorieIcon';

import {
  MealCard,
  MealHeader,
  MealTitle,
  CalorieView,
  Calorie,
} from './styles';

function FlashIcon() {
  return <Icon name="flash" />;
}

export default function MealCardItem({ data, onPress }) {
  return (
    <MealCard>
      <Icon name="star" />
      <TouchableOpacity onPress={() => onPress(data)}>
        <MealHeader>
          <Text category="h6" style={{ color: '#fff' }}>
            {data.title}
          </Text>
          <CalorieView>
            <CalorieIcon />
            <FlashIcon />
            <Text category="h5" style={{ color: '#fff' }}>
              {data.calorie}
            </Text>
          </CalorieView>
        </MealHeader>
      </TouchableOpacity>
    </MealCard>
  );
}
