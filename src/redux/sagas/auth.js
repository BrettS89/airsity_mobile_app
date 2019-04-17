import { AsyncStorage } from 'react-native';
import { Constants, Facebook } from 'expo';
import axios from 'axios';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as songsActions from '../actions/songsActions';
import * as authActions from '../actions/authActions';
import * as navigationActions from '../actions/navigationActions';
import { apiLogin, apiSignup, apiIsLoggedIn, apiGetSongs, apiFacebookAuth } from '../../lib/apiCalls';
import { soundObject1, soundObject2 } from '../../index';
import { getIsoDate, validateEmailFormat } from '../../utilities/misc';

export default [
  loginWatcher,
  signupWatcher,
  appLoadWatcher,
  logoutWatcher,
  facebookAuthWatcher,
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

function * facebookAuthWatcher() {
  yield takeLatest(actionTypes.FACEBOOK_AUTH, facebookAuthHandler);
}

function * logoutWatcher() {
  yield takeLatest(actionTypes.LOGOUT, logoutHandler);
}

function * appLoadHandler() {
  try {
    yield call(apiIsLoggedIn);
    yield fetchSongs();
    yield put(navigationActions.navigateTo({ current: 'Main', previous: 'Login' }));
  } catch(e) {
    console.log('appLoadHandler error: ', e);
    yield put(navigationActions.navigateTo({ current: 'Login', previous: 'Auth' }));
  }
}

function * loginHandler({ payload }) {
  try {
    yield put(authActions.setLoginLoading(true));
    yield put(authActions.setLoginError(false));
    const { data } = yield call(apiLogin, payload);
    yield AsyncStorage.setItem('token', JSON.stringify(data.token));
    yield fetchSongs();
    yield put(navigationActions.navigateTo({ current: 'Discover', previous: 'Login' }));
    yield put(authActions.setLoginLoading(false));
  } catch(e) {
    yield put(authActions.setLoginError(e.toString()))
    console.log('Login error: ', e);
    yield put(authActions.setLoginError(true));
    yield put(authActions.setLoginLoading(false));
  }
}

function * signupHandler({ payload }) {
  try {
    yield put(authActions.setSignupLoading(true));
    yield put(authActions.setSignupError(false));
    if (!validateEmailFormat(payload.email)) {
      yield put(authActions.setSignupError(true));
      yield put(authActions.setSignupLoading(false));
      return;
    }
    const { data } = yield call(apiSignup, payload);
    yield AsyncStorage.setItem('token', JSON.stringify(data.token));
    yield fetchSongs();
    yield put(navigationActions.navigateTo({ current: 'Genres', previous: 'Signup' }));
    yield put(authActions.setSignupLoading(false));
  } catch(e) {
    console.log('Signup error ', e);
    yield put(authActions.setSignupError(true));
    yield put(authActions.setSignupLoading(false));
  }
}

function * facebookAuthHandler() {
  try {
    yield put(authActions.setFacebookLoading(true));
    const { type, token } = yield Facebook.logInWithReadPermissionsAsync('2151282281652049', {
      permissions: ['public_profile', 'email']
    });

    if (type === 'cancel') return;

    let { data } = yield axios.get(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
    data.date = Date.now();
    data.isoDate = getIsoDate();
    const res = yield call(apiFacebookAuth, data);
    const airsityToken = res.data.token;
    yield AsyncStorage.setItem('token', JSON.stringify(airsityToken));
    yield fetchSongs();
    yield put(navigationActions.navigateTo({ current: 'Genres', previous: 'Login' }));
    yield put(authActions.setFacebookLoading(false));
  } catch(e) {
    console.log('facebookAuthHandler error: ', e);
    yield put(authActions.setLoginError(true));
    yield put(authActions.setSignupError(true));
    yield put(authActions.setFacebookLoading(false));
  }
}

function * logoutHandler() {
  try {
    yield AsyncStorage.clear();
    yield put(authActions.resetStore());
    yield put(navigationActions.navigateTo({ current: 'Login', previous: 'Account' }));
  } catch(e) {
    console.log('logoutHandler error: ', e);
  }
}

function * fetchSongs() {
  try {
    yield soundObject1.unloadAsync();
    yield soundObject2.unloadAsync();
    const lastGenre = yield AsyncStorage.getItem('genre');
    const lastSort = yield AsyncStorage.getItem('sort');
    const genre = lastGenre ? JSON.parse(lastGenre).value : 'hiphop';
    const sort = lastSort ? JSON.parse(lastSort).value : 'popular';
    const { data } = yield apiGetSongs({ genre, sort });
    const songs = data.sort((a, b) => b.popularity - a.popularity);
    yield soundObject1.loadAsync({ uri: songs[0].audio });
    yield soundObject2.loadAsync({ uri: songs[1].audio });
    yield put(songsActions.setSongs(songs));
    
    if (lastGenre) {
      yield put(songsActions.setGenreDisplay(JSON.parse(lastGenre)));
    }  else {
      yield put(songsActions.setGenreDisplay({ value: 'hiphop', display: 'Hip hop' }));
    }
    if (lastSort) {
      yield put(songsActions.changeSortByDisplay(JSON.parse(lastSort)));
    }  else {
      yield put(songsActions.changeSortByDisplay({ value: 'popular', display: 'Popular songs' }));
    }

  } catch(e) {
    console.log('Fetch songs error: ', e);
    throw e;
  }
}
