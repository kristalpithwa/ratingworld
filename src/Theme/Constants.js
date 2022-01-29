import {Dimensions, useColorScheme, Appearance} from 'react-native';
import APIConfig from '../Config/ApiConfig/index';

var {EventEmitter} = require('fbemitter');
const axiosDefaults = require('axios/lib/defaults');

export const commonConstant = {
  // Screen Width And Height
  appName: 'Rating World',
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,

  // Other Misc Constants
  emitter: new EventEmitter(),
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  appUser: null,
};

export const asyncStorageKeys = {
  userData: 'userData',
  userToken: 'userToken',
  LoginDetails: 'LoginDetails',
};

export const eventListenerKeys = {
  loginListener: 'loginListener',
  logoutListener: 'logoutListener',
  Login: 'Login',
  Logout: 'Logout',
};

export const FixedAPI = 'https://api.themoviedb.org/3/movie';

export const key = 'api_key=69ebe38e113211a2a7943be581e7898b&';

export const EndPoints = {
  upcoming: '/upcoming?',
  popular: '/popular?',
  topRated: '/top_rated?',
};

export const region = {
  us: '&region=us',
  in: '&region=in',
};

export const apiResponse = {
  success: 200,
  fail: 400,
  serverError: 500,
};

export default {
  key,
  FixedAPI,
  EndPoints,
  region,
  apiResponse,
  commonConstant,
  asyncStorageKeys,
  eventListenerKeys,
};
