import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { changeCalorieGoal } from '~/store/modules/user/actions';
import { createDietPlanRequest } from '~/store/modules/dietPlan/actions';

import { Input } from './styles';

export default function Difficulty({ navigation }) {
  const dispatch = useDispatch();
  const objective = useSelector(state => state.user.objective);
  const calorieGoal = useSelector(state => state.user.calorieGoal);
  const calorieIntake = useSelector(state => state.user.calorieIntake);
  const physicalActivity = useSelector(state => state.user.physicalActivity);

  function handleDietPlan() {
    dispatch(
      createDietPlanRequest({
        objective,
        calorie_goal: calorieGoal,
        calorie_intake: calorieIntake,
        physical_activity: physicalActivity,
      })
    );
  }

  function handleDifficulty(difficulty) {
    // dispatch(changeDifficulty(difficulty));

    if (objective === 'weightLoss') {
      switch (difficulty) {
        case 'easy':
          dispatch(changeCalorieGoal(calorieIntake - 300));
          break;
        case 'medium':
          dispatch(changeCalorieGoal(calorieIntake - 500));
          break;
        case 'hard':
          dispatch(changeCalorieGoal(calorieIntake - 700));
          break;
        default:
          break;
      }
    } else if (objective === 'gainMuscle') {
      switch (difficulty) {
        case 'easy':
          dispatch(changeCalorieGoal(calorieIntake + 300));
          break;
        case 'medium':
          dispatch(changeCalorieGoal(calorieIntake + 500));
          break;
        case 'hard':
          dispatch(changeCalorieGoal(calorieIntake + 700));
          break;
        default:
          break;
      }
    }
  }

  return (
    <View>
      <Text>Suas calorias diárias</Text>
      <Text>{calorieIntake}</Text>
      <Text>Objective</Text>
      <Text>{objective}</Text>
      <Text>Caloria Meta</Text>
      <Input
        value={String(calorieGoal)}
        onChangeText={text => dispatch(changeCalorieGoal(text))}
      />
      <Button
        title="Meals calories"
        onPress={() => navigation.navigate('MealsCalories')}
      />
      <Button title="Create diet plan" onPress={handleDietPlan} />
      <Text>{calorieGoal}</Text>
      <Button
        style={{ marginTop: 15 }}
        title="easy"
        onPress={() => handleDifficulty('easy')}
      />
      <Text>{calorieGoal}</Text>
      <Button
        style={{ marginTop: 15 }}
        title="medium"
        onPress={() => handleDifficulty('medium')}
      />
      <Text>{calorieGoal}</Text>
      <Button
        style={{ marginTop: 15 }}
        title="hard"
        onPress={() => handleDifficulty('hard')}
      />
    </View>
  );
}

Difficulty.navigationOptions = {
  title: 'Difficulty',
};

Difficulty.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
