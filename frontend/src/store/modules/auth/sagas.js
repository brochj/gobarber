import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário não é prestador');
      return;
    }
    // put é para disparar actions
    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (eer) {
    yield put(signFailure());
  }
}

// all é pra ficar ouvindo as actions
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
