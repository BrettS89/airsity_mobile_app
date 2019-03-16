import { combineReducers } from 'redux';
import appReducer from './app';
import authReducer from './auth';
import navigationReducer from './navigation';
import songsReducer from './songs';
import playerReducer from './player';
import playlistReducer from './playlist';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  navigation: navigationReducer,
  songs: songsReducer,
  player: playerReducer,
  playlist: playlistReducer,
});
