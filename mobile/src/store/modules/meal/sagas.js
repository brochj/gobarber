import { Alert } from 'react-native';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  createMealSuccess,
  createMealFailure,
  createMultipleMealsSuccess,
  getMealsSuccess,
} from '~/store/modules/meal/actions';

import api from '~/services/api';

export function* createMeal({ payload }) {
  if (!payload) return;

  const {
    meal: { calorie },
    meal: { title },
    dietPlanId,
  } = payload;

  try {
    const response = yield call(api.post, `diet-plans/${dietPlanId}/meals`, {
      calorie,
      title,
    });

    yield put(createMealSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Error',
      `Falha na criação da refeição, verifique seus dados ${err}`
    );

    yield put(createMealFailure());
  }
}

export function* createMultipleMeals({ payload }) {
  if (!payload) return;

  const { meals, dietPlanId } = payload;

  try {
    const sanitizedMeals = meals.map(({ title, calorie }) => ({
      title,
      calorie,
    }));
    yield call(api.patch, `diet-plans/${dietPlanId}/meals`, {
      meals: sanitizedMeals,
    });

    yield put(createMultipleMealsSuccess());
  } catch (err) {
    Alert.alert(
      'Error',
      `Falha na criação de múltiplas refeições, verifique seus dados ${err}`
    );

    yield put(createMealFailure());
  }
}

export function* getMeals({ payload }) {
  if (!payload) return;

  try {
    const response = yield call(api.get, `diet-plans/${payload}/meals`);

    yield put(getMealsSuccess(response.data));
  } catch (err) {
    Alert.alert('Error', `Falha na listagem das refeições. ${err}`);

    yield put(createMealFailure());
  }
}

export default all([
  takeLatest('@meal/CREATE_MEAL_REQUEST', createMeal),
  takeLatest('@meal/CREATE_MULTIPLE_MEALS_REQUEST', createMultipleMeals),
  takeLatest('@meal/GET_MEALS_REQUEST', getMeals),
]);
