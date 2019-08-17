import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getTrackSelector } from '../selectors';

export default [
  playWatcher,
];

function * playWatcher() {
  yield takeLatest(actionTypes.PLAY, playHandler);
}

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
