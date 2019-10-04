import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FlatList, Button } from 'react-native';

import {
  ActionButton,
  ActionIcon,
  Calorie,
  CalorieIcon,
  CalorieText,
  Container,
  Content,
  DailyPercent,
  Divider,
  Header,
  MealCard,
  Title,
  ChangeCalorieIcon,
  Input,
  TextCalories,
} from './styles';

import { createMultipleMealsRequest } from '~/store/modules/meal/actions';

function MealItem({ data, editMode, changeCalorie }) {
  function handleEditCalorie() {
    editMode();
  }

  const handleChangeCalorie = useCallback(
    calorie => {
      changeCalorie(calorie);
    },
    [changeCalorie]
  );

  return (
    <MealCard>
      <Header>
        <Title>{data.title}</Title>
        <Title>{data.isSelected}</Title>
        <ActionButton onPress={handleEditCalorie}>
          {data.isSelected ? (
            <ActionIcon name="done" size={28} />
          ) : (
            <ActionIcon />
          )}
        </ActionButton>
      </Header>
      <Divider />
      <DailyPercent> 20% das calorias diárias</DailyPercent>
      {data.isSelected ? (
        <Content>
          <ChangeCalorieIcon name="remove-circle" />
          <Input
            value={String(data.calorie)}
            autoFocus
            onChangeText={text =>
              handleChangeCalorie(Number(text.replace(/[^0-9]/g, '')))
            }
            onSubmitEditing={handleEditCalorie}
            keyboardType="phone-pad"
            maxLength={4}
          />
          <ChangeCalorieIcon name="add-circle" />
          <CalorieText>kcal</CalorieText>
        </Content>
      ) : (
        <Content>
          <CalorieIcon />
          <Calorie onPress={handleEditCalorie}>{data.calorie}</Calorie>
          <CalorieText>kcal</CalorieText>
        </Content>
      )}
    </MealCard>
  );
}

MealItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    calorie: PropTypes.number,
    isSelected: PropTypes.bool,
  }).isRequired,
  editMode: PropTypes.func.isRequired,
  changeCalorie: PropTypes.func.isRequired,
};

export default function MealsCalories({ navigation }) {
  const dispatch = useDispatch();
  const calorieGoal = useSelector(state => state.user.calorieGoal);
  const dietPlanId = useSelector(state => state.dietPlan.id);

  const apiMeals = [
    { id: 31, calorie: 250, title: 'Café da manhã' },
    { id: 33, calorie: 180, title: 'Lanche da manhã' },
    { id: 34, calorie: 550, title: 'Almoço' },
    { id: 35, calorie: 250, title: 'Lanche da tarde' },
    { id: 36, calorie: 250, title: 'Jantar' },
    { id: 37, calorie: 150, title: 'Pré-treino' },
    { id: 38, calorie: 250, title: 'Pós-treino' },
  ];

  const [meals, setMeals] = useState(
    apiMeals.map(meal => ({
      ...meal,
      isSelected: false,
    }))
  );

  const totalCalories = useMemo(
    () => meals.reduce((a, b) => +a + +b.calorie, 0),
    [meals]
  );

  const handleEditMode = useCallback(
    index => {
      const selectedMeal = meals[index];
      setMeals(
        Object.assign([], meals, {
          [index]: { ...selectedMeal, isSelected: !selectedMeal.isSelected },
        })
      );
    },
    [meals]
  );

  const handleChangeCalorie = useCallback(
    (calorie, index) => {
      const selectedMeal = meals[index];
      setMeals(
        Object.assign([], meals, {
          [index]: { ...selectedMeal, calorie },
        })
      );
    },
    [meals]
  );

  function handleCreateMeals() {
    dispatch(createMultipleMealsRequest(meals, dietPlanId));
  }

  return (
    <Container>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button title="Create Meals" onPress={handleCreateMeals} />
      <TextCalories>Sua meta é {calorieGoal} kcal</TextCalories>
      <TextCalories>A soma atual é {totalCalories} kcal</TextCalories>
      <FlatList
        data={meals}
        extraData={meals}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <MealItem
            data={item}
            editMode={() => handleEditMode(index)}
            changeCalorie={calorie => handleChangeCalorie(calorie, index)}
          />
        )}
      />
    </Container>
  );
}

MealsCalories.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
