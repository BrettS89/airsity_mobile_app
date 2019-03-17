import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as songsActions from '../actions/songsActions';
import * as playerActions from '../actions/playerActions';
import * as appActions from '../actions/appActions';
import * as navigationActions from '../actions/navigationActions';
import { apiGetSongs, apiListened, apiAddToPlaylist } from '../../lib/apiCalls';
import { getSongsSelector, getGenre } from '../selectors';
import { soundObject1, soundObject2 } from '../../index';

export default [
  getSongsWatcher,
  nextSongWatcher,
  setGenreWatcher,
];

// WATCHERS ////////////////////////////////////////////////////////

function * getSongsWatcher() {
  yield takeLatest(actionTypes.GET_SONGS, getSongsHandler);
}

function * nextSongWatcher() {
  yield takeLatest(actionTypes.NEXT_SONG, nextSongHandler);
}

function * setGenreWatcher() {
  yield takeLatest(actionTypes.SET_GENRE, setGenreHandler);
}

// HANDLERS ////////////////////////////////////////////////////////

function * getSongsHandler({ payload }) {
  try {
    yield put(appActions.setLoading());
    const { data } = yield apiGetSongs(payload);
    console.log(data);
    yield put(songsActions.setSongs(data));
    // yield put(appActions.setNotLoading());
  } catch(e) {
    console.log('Get songs error: ', e);
  }
}

function * nextSongHandler({ payload }) {
  try {
    let songs = yield select(getSongsSelector);
    if (songs.length <= 3) {
      if (payload.action === 'dismiss') {
        yield call(apiListened, payload);
      } else if (payload.action === 'like') {
        const body = payload.song;
        yield call(apiAddToPlaylist, body);
      }
      const genre = yield select(getGenre);
      const { data } = yield call(apiGetSongs, genre.value);
      songs = data; [...songs, ...data];
    } else {
      if (payload.action === 'dismiss') {
        yield call(apiListened, payload);
      } else if (payload.action === 'like') {
        const body = payload.song;
        yield call(apiAddToPlaylist, body);
      }

      songs.shift();
    }
    yield put(songsActions.setSongs(songs));

  } catch(e) {
    console.log('Next song error', e);
  }
}

function * setGenreHandler({ payload }) {
  try {
    yield put(playerActions.setIsPaused());
    yield soundObject1.unloadAsync();
    yield soundObject2.unloadAsync();
    yield put(navigationActions.navigateTo({ current: 'Discover', previous: 'Genres' }));
    yield put(appActions.setLoading());
    const { data } = yield call(apiGetSongs, payload.value);
    yield soundObject1.loadAsync({ uri: data[0].audio});
    yield soundObject2.loadAsync({ uri: data[1].audio});
    yield put(songsActions.setSongs(data));
    yield put(appActions.setNotLoading());
  } catch(e) {
    console.log('setGenreHandler error: ', e);
  }
}
