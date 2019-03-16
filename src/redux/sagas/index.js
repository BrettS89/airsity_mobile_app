import { all, fork } from 'redux-saga/effects';
import authSagas from './auth';
import navigationSagas from './navigation';
import songsSagas from './songs';
import playlistSagas from './playlist';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(authSagas),
    ...forkList(navigationSagas),
    ...forkList(songsSagas),
    ...forkList(playlistSagas),
  ]);
}
