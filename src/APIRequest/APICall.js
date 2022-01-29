import Axios from 'axios';
import {lowerFirst} from 'lodash';
import {Constant} from '../Theme';
import {Config} from '../APIConfig';
import {LoginManager} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

// import {commonConstant, EventListener} from '../utils/constants';

const axiosInstance = Axios.create({
  baseURL: Config.baseURL,
  timeout: Config.timeOut,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = await AsyncStorage.getItem(Constant.asyncStorageKeys.UserToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // if (global.userData && global.userData.token) {
    //   config.headers.Authorization = `Bearer ${global.userData.token}`;
    // }
    __DEV__ && console.log('axios request =>', config);
    return config;
  },
  (error) => {
    console.log('error :: ', error.response)
    __DEV__ &&
      console.log(
        'axios request error =>',
        error.response ? error.response : error,
      );
    
    // if (error.response === 401) {
    //   console.log('Auth error');
    // }
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (config) => {
    __DEV__ && console.log('axios response =>', config);
    return config;
  },
  (error) => {
    __DEV__ &&
      console.log(
        'axios response error =>',
        error.response ? error.response : error,
      );
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  },
);

const logoutUser = async () => {
  // commonConstant.emitter.emit(EventListener.loginListener, null)
  // LoginManager.logOut()
};

const APICall = async (
  method = 'post',
  body,
  url = null,
  headers = null,
  formData = false,
) => {
  const apiMethod = method.toLowerCase();
  // console.log('body=>', body);
  const config = {
    method: apiMethod,
  };
  if (url) {
    config.url = url;
  }

  if ((apiMethod === 'delete' || apiMethod === 'get') && body) {
    config.params = body;
  } else {
    // config.data = body && formData ? getFormData(body) : body;
    config.data = body;
  }

  if (headers) {
    config.headers = headers;
  }

  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then((res) => resolve(res.data))
      .catch((error) => {
        if (error.response && error.response.data) {
          resolve(error.response.data);
        }
        reject(error);
      });
  });
};

export default APICall;
