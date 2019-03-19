import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as songsActions from '../actions/songsActions';
import * as authActions from '../actions/authActions';
import * as navigationActions from '../actions/navigationActions';
import { apiLogin, apiSignup, apiIsLoggedIn, apiGetSongs } from '../../lib/apiCalls';
import { soundObject1, soundObject2 } from '../../index';

export default [
  loginWatcher,
  signupWatcher,
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(actionTypes.ON_APP_LOAD, appLoadHandler);
} 

function * loginWatcher() {
  yield takeLatest(actionTypes.ON_LOGIN, loginHandler);
}

function * signupWatcher() {
  yield takeLatest(actionTypes.ON_SIGNUP, signupHandler);
}

function * appLoadHandler() {
  try {
    yield call(apiIsLoggedIn);
    const { data } = yield apiGetSongs('hiphop');
    yield soundObject1.loadAsync({ uri: data[0].audio });
    yield soundObject2.loadAsync({ uri: data[1].audio });
    yield put(songsActions.setSongs(data));
    yield put(navigationActions.navigateTo({ current: 'Main', previous: 'Login' }));
  } catch(e) {
    console.log('appLoadHandler error: ', e);
    yield put(navigationActions.navigateTo({ current: 'Login', previous: 'Auth' }));
  }
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
