import { Alert } from 'react-native';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import {
  createDietPlanSuccess,
  createDietPlanFailure,
} from '~/store/modules/dietPlan/actions';

import api from '~/services/api';

export function* create({ payload }) {
  if (!payload) return;

  try {
    const response = yield call(api.post, 'diet-plans', payload);
    const dietPlan = response.data;

    yield put(createDietPlanSuccess(dietPlan));
  } catch (err) {
    Alert.alert(
      'Error',
      `Falha na criação do plano de dieta, verifique seus dados ${err}`
    );

    yield put(createDietPlanFailure());
  }
}

export default all([takeLatest('@dietPlan/CREATE_DIET_PLAN_REQUEST', create)]);
