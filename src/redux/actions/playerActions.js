import { SET_TRACK, SET_PLAYING, SET_PAUSED, PLAYLIST_IS_PLAYING, PLAYLIST_IS_PAUSED } from './actionTypes';

export const setTrack = payload => ({
  type: SET_TRACK,
  payload,
});

export const setIsPlaying = () => ({
  type: SET_PLAYING,
});

export const setIsPaused = () => ({
  type: SET_PAUSED,
});

export const setPlaylistIsPlaying = () => ({
  type: PLAYLIST_IS_PLAYING,
});

export const setPlaylistIsPaused = () => ({
  type: PLAYLIST_IS_PAUSED,
});
