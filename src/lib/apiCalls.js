import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { URI } from '../config';

const getToken = async () => {
  const token = JSON.parse(await AsyncStorage.getItem('token'));
  if (!token) throw new Error('No token');
  return {
    headers: {
      authorization: token,
    },
  };
};

export const apiLogin = async body => {
  try {
    return await axios.post(`${URI}/auth/login`, body);
  } catch(e) {
    throw e;
  }
};

export const apiSignup = async body => {
  try {
    return await axios.post(`${URI}/auth/signup`, body);
  } catch(e) {
    throw e;
  }
};

export const apiGetSongs = async body => {
  const config = await getToken();
  try {
    return await axios.get(`${URI}/songs/get/${body}`, config);
  } catch(e) {
    throw e;
  }
};

export const apiListened = async body => {
  const config = await getToken();
  try {
    return await axios.post(`${URI}/listened/add`, body, config);
  } catch(e) {
    throw e;
  }
};

export const apiAddToPlaylist = async body => {
  const config = await getToken();
  try {
    return await axios.post(`${URI}/playlist/add`, body, config);
  } catch(e) {
    throw e;
  }
};

export const apiGetPlaylist = async body => {
  try {
    const config = await getToken();
    return await axios.get(`${URI}/playlist/get/${body.genre}/${body.date}`, config);
  } catch(e) {
    throw e;
  }
};
