import { SET_LOADING, SET_NOT_LOADING, ON_APP_LOAD } from './actionTypes';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setNotLoading = () => ({
  type: SET_NOT_LOADING,
});

export const appLoad = () => ({
  type: ON_APP_LOAD,
});
