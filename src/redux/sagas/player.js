import { Audio } from 'expo';
import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as playerActions from '../actions/playerActions';
import { getTrackSelector } from '../selectors';

export default [
  playWatcher,
];

// WATCHERS //

function * playWatcher() {
  yield takeLatest(actionTypes.PLAY, playHandler);
}

// HANDLERS //

function * playHandler({ payload }) {
  try {
    const { data } = yield call(apiGetSongs, payload);
    yield put(songsActions.setSongs(data));
    const track = yield select(getTrackSelector);
    yield soundObject.loadAsync(require(track));
    

  } catch(e) {
    console.log('Get songs error: ', e);
  }
}
