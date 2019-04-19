import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as appActions from '../actions/appActions';
import * as playlistActions from '../actions/playlistActions';
import * as navigationActions from '../actions/navigationActions';
import { apiGetPlaylist, apiSetStreamingService } from '../../lib/apiCalls';
import { getPlaylistGenre, getPlaylist } from '../selectors';

export default [
  getPlaylistWatcher,
  getPlaylistScrollWatcher,
  isRefreshingWatcher,
  setStreamingServiceWatcher,
];

function * getPlaylistWatcher() {
  yield takeLatest(actionTypes.GET_PLAYLIST, getPlaylistHandler);
}

function * getPlaylistScrollWatcher() {
  yield takeLatest(actionTypes.GET_PLAYLIST_SCROLL, getPlaylistScrollHandler);
}

function * isRefreshingWatcher() {
  yield takeLatest(actionTypes.IS_REFRESHING, isRefreshingHandler);
}

function * setStreamingServiceWatcher() {
  yield takeLatest(actionTypes.SET_STREAMING_SERVICE, setStreamingServiceHandler);
}

function * getPlaylistHandler() {
  try {
    yield put(appActions.setLoading());
    const { value } = yield select(getPlaylistGenre);
    const { data } = yield call(apiGetPlaylist, { date: Date.now(), genre: value });
    yield put(playlistActions.setPlaylist(data));
    yield put(appActions.setNotLoading());
  } catch(e) {
    console.log('getPlaylistHandler error: ', e);
  }
}

function * getPlaylistScrollHandler() {
  try {
    const { value } = yield select(getPlaylistGenre);
    const playlist = yield select(getPlaylist);
    const date = playlist[playlist.length - 1].date;
    const { data } = yield call(apiGetPlaylist, { date, genre: value });
    yield put(playlistActions.setPlaylist([...playlist, ...data]));
  } catch(e) {
    console.log('getPlaylisScrollHandler error: ', e);
  }
}

function * isRefreshingHandler() {
  try {
    yield put(playlistActions.setRefreshing(true));
    const { value } = yield select(getPlaylistGenre);
    const { data } = yield call(apiGetPlaylist, { date: Date.now(), genre: value });
    yield put(playlistActions.setPlaylist(data));
    yield put(playlistActions.setRefreshing(false));
  } catch(e) {
    yield put(playlistActions.setRefreshing(false));
    console.log('isRefreshingHandler error: ', e);
  }
}

function * setStreamingServiceHandler({ payload }) {
  try {
    const body = { streamingService: payload };
    console.log(body);
    // Navigate to genre screen here
    yield put(navigationActions.navigateTo({ current: 'Genres', previous: 'Signup' }));
    const { data } = yield call(apiSetStreamingService, body);
    yield put(playlistActions.setStreamingServiceReducer(data.streamingService));
  } catch(e) {
    // Navigate to genre screen here
    yield put(navigationActions.navigateTo({ current: 'Genres', previous: 'Signup' }));
    console.log('setStreamingServiceHandler error: ', e);
  }
}
