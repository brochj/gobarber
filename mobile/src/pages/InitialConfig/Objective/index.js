import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import {
  changeObjective,
  changeCalorieGoal,
} from '~/store/modules/user/actions';

// import { Container } from './styles';

export default function Objective({ navigation }) {
  const dispatch = useDispatch();
  const calorieIntake = useSelector(state => state.user.calorieIntake);

  function handleObjective(objective) {
    dispatch(changeObjective(objective));

    if (objective === 'maintainWeight') {
      dispatch(changeCalorieGoal(calorieIntake));

      navigation.navigate('MealsCalories');
    } else {
      navigation.navigate('Difficulty');
    }
  }
  return (
    <View>
      <Text>Objective</Text>
      <Button
        title="Difficulty"
        onPress={() => navigation.navigate('Difficulty')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="maintainWeight"
        onPress={() => handleObjective('maintainWeight')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="gainMuscle"
        onPress={() => handleObjective('gainMuscle')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="weightLoss"
        onPress={() => handleObjective('weightLoss')}
      />
    </View>
  );
}

Objective.navigationOptions = {
  title: 'Objective',
};

Objective.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
