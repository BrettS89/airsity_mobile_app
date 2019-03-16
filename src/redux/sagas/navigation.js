import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as navigationActions from '../actions/navigationActions';
import Navigate from '../../utilities/navigation';

export default [
  navigateToWatcher,
];

function * navigateToWatcher() {
  yield takeLatest(actionTypes.NAVIGATE_TO, navigateToHandler);
}

function * navigateToHandler({ payload }) {
  try {
    const { current, previous } = payload;
    yield put(navigationActions.setNavigation({ current, previous }));
    Navigate.to(current);
  } catch(e) {
    console.log('navigateTo error: ', e);
  }
}
