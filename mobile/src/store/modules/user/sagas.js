import {Alert} from 'react-native';
import {call, put, all, takeLatest} from 'redux-saga/effects';

import {updateSuccess, updateFailure} from '~/store/modules/user/actions';

import api from '~/services/api';

export function* update({payload}) {
  if (!payload) return;

  console.tron.log(payload);

  try {
    const response = yield call(api.put, 'users', payload);

    const user = response.data;

    yield put(updateSuccess(user));
  } catch (err) {
    Alert.alert('Error', `Falha na atualização, verifique seus dados ${err}`);

    yield put(updateFailure());
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', update)]);
