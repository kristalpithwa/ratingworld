import React, {useEffect, useState} from 'react';
import {View, StatusBar, LogBox} from 'react-native';
import {Colors, Constant} from './src/Theme';
import Axios from 'axios';
import ApiConfig from './src/Config/ApiConfig';
import RouterComponent from './src/Router/Router';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './src/Container/LoginFlow/Splash/Splash';

LogBox.ignoreAllLogs();

export default function App(props) {
  const [loader, setLoader] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // getDataFromLocalStorage();

    Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.Login,
      () => {
        console.log('Call Login=>>');
        setIsAuth(true);
      },
    );

    Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.logoutListener,
      async () => {
        console.log('logout called...');
        await AsyncStorage.clear();
        Constant.commonConstant.appUser = null;
        let headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        Axios.defaults.headers = headers;
        setIsAuth(false);
      },
    );
  }, []);

  async function getDataFromLocalStorage() {
    await setLoader(true);
    await AsyncStorage.getItem(Constant.asyncStorageKeys.userData)
      .then(res => {
        if (res && res !== null && res !== undefined) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
        setLoader(false);
      })
      .catch(() => setIsAuth(false));
  }

  return loader ? (
    <SplashScreen />
  ) : (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={Colors.transparent}
        barStyle={'dark-content'}
      />
      <RouterComponent isAuthed={true} />
    </View>
  );
}
