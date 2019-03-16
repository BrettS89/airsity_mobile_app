import { NAVIGATE_TO, SET_NAVIGATION } from './actionTypes';

export const navigateTo = payload => {
  return {
    type: NAVIGATE_TO,
    payload,
  };
};

export const setNavigation = payload => {
  return {
    type: SET_NAVIGATION,
    payload,
  };
};
