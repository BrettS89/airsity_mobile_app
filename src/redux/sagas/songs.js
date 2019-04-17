import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as songsActions from '../actions/songsActions';
import * as playerActions from '../actions/playerActions';
import * as appActions from '../actions/appActions';
import * as navigationActions from '../actions/navigationActions';
import * as playlistActions from '../actions/playlistActions';
import { apiGetSongs, apiListened, apiAddToPlaylist } from '../../lib/apiCalls';
import { getSongsSelector, getGenre, getPlaylistGenre, getSort } from '../selectors';
import { soundObject1, soundObject2 } from '../../index';

export default [
  nextSongWatcher,
  setGenreWatcher,
  changeSortByWatcher,
];

function * nextSongWatcher() {
  yield takeLatest(actionTypes.NEXT_SONG, nextSongHandler);
}

function * setGenreWatcher() {
  yield takeLatest(actionTypes.SET_GENRE, setGenreHandler);
}

function * changeSortByWatcher() {
  yield takeLatest(actionTypes.CHANGE_SORT_BY, changeSortByHandler);
}

function * nextSongHandler({ payload }) {
  try {
    let songs = yield select(getSongsSelector);
    const playlistGenre = yield select(getPlaylistGenre);
    if (songs.length <= 3) {
      if (payload.action === 'dismiss') {
        yield call(apiListened, payload);
      } else if (payload.action === 'like') {
        const body = payload.song;
        const { data } = yield call(apiAddToPlaylist, body);
        if (playlistGenre.value === 'all' || playlistGenre.value === data.song.genre) {
          yield put(playlistActions.addToPlaylist(data));
        }
      }
      const genre = yield select(getGenre);
      const sort = yield select(getSort);
      let { data } = yield call(apiGetSongs, { genre: genre.value, sort: sort.value });
      data = data.sort((a, b) => b.popularity - a.popularity);
      songs = data; [...songs, ...data];
    } else {
      if (payload.action === 'dismiss') {
        yield call(apiListened, payload);
      } else if (payload.action === 'like') {
        const body = payload.song;
        const { data } = yield call(apiAddToPlaylist, body);
        if (playlistGenre.value === 'all' || playlistGenre.value === data.song.genre) {
          yield put(playlistActions.addToPlaylist(data));
        }
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
    const sort = yield select(getSort);
    let { data } = yield call(apiGetSongs, { genre: payload.value, sort: sort.value });
    data = data.sort((a, b) => b.popularity - a.popularity);
    yield soundObject1.loadAsync({ uri: data[0].audio});
    yield soundObject2.loadAsync({ uri: data[1].audio});
    yield put(songsActions.setSongs(data));
    yield put(appActions.setNotLoading());
    const genreData = JSON.stringify({ value: payload.value, display: payload.display });
    yield AsyncStorage.setItem('genre', genreData);
  } catch(e) {
    yield put(appActions.setNotLoading());
    console.log('setGenreHandler error: ', e);
  }
}

function * changeSortByHandler({ payload }) {
  try {
    yield put(playerActions.setIsPaused());
    yield soundObject1.unloadAsync();
    yield soundObject2.unloadAsync();
    yield put(appActions.setLoading());
    const genre = yield select(getGenre);
    let { data } = yield call(apiGetSongs, { genre: genre.value, sort: payload.value });
    data = data.sort((a, b) => b.popularity - a.popularity);
    yield soundObject1.loadAsync({ uri: data[0].audio});
    yield soundObject2.loadAsync({ uri: data[1].audio});
    yield put(songsActions.setSongs(data));
    yield put(appActions.setNotLoading());
    yield AsyncStorage.setItem('sort', JSON.stringify(payload));
  } catch(e) {
    yield put(appActions.setNotLoading());
    console.log('Change sort by handler: ', e);
  }
}
