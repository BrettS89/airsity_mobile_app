import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authActions from '../actions/authActions';
import * as navigationActions from '../actions/navigationActions';
import { apiLogin, apiSignup } from '../../lib/apiCalls';

export default [
  loginWatcher,
  signupWatcher,
];

function * loginWatcher() {
  yield takeLatest(actionTypes.ON_LOGIN, loginHandler);
}

function * signupWatcher() {
  yield takeLatest(actionTypes.ON_SIGNUP, signupHandler);
}

function * loginHandler({ payload }) {
  try {
    yield put(authActions.setLoginError(null))
    const { data } = yield call(apiLogin, payload);
    yield AsyncStorage.setItem('token', JSON.stringify(data.token));
    yield put(navigationActions.navigateTo({ current: 'Discover', previous: 'Login' }));
  } catch(e) {
    yield put(authActions.setLoginError(e.toString()))
    console.log('Login error: ', e);
  }
}

function * signupHandler({ payload }) {
  try {
    const { data } = yield call(apiSignup, payload);
    yield AsyncStorage.setItem('token', JSON.stringify(data.token));
    yield put(navigationActions.navigateTo({ current: 'Discover', previous: 'Signup' }));
  } catch(e) {
    console.log('Signup error ', e);
  }
}
