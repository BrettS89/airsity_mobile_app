import { SET_TRACK, SET_PLAYING, SET_PAUSED } from './actionTypes';

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
