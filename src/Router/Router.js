import React from 'react';
import {ScreenName} from '../Theme';
import {Router, Scene, Stack} from 'react-native-router-flux';

import {TabIcon} from '../Component/TabIcon/TabIcon';

// Login Flow
import LaunchScreen from '../Container/LoginFlow/LaunchScreen/LaunchScreen';
import LoginScreen from '../Container/LoginFlow/Login/LoginScreen';
import SignUpScreen from '../Container/LoginFlow/SignUp/SignUpScreen';
import ForgotPwScreen from '../Container/LoginFlow/ForgotPassword/ForgotPassword';

//Main Flow
import MovieScreen from '../Container/MainFlow/Movies/MoviesScreen';
import MovieDetailsScreen from '../Container/MainFlow/MoviesDetails/MoviesDetailsScreen';
import CastDetailsScreen from '../Container/MainFlow/CastDetails/CastDetailsScreen';

// Main Navigation Flow
export default function RouterComponent({isAuthed}) {
  return (
    <Router>
      <Stack>
        <Scene
          key="auth"
          hideNavBar
          gesturesEnabled={!isAuthed}
          initial={!isAuthed}>
          <Scene
            initial
            isAuth={isAuthed}
            component={LaunchScreen}
            key={ScreenName.LaunchScreen}
          />
          <Scene key={ScreenName.LoginScreen} component={LoginScreen} />
          <Scene key={ScreenName.SignUpScreen} component={SignUpScreen} />
          <Scene key={ScreenName.ForgotPwScreen} component={ForgotPwScreen} />
        </Scene>

        <Scene key="root" gesturesEnabled={false} initial={isAuthed} hideNavBar>
          <Stack>
            {/* <Tabs
              key="tabBar"
              hideNavBar
              tabs={true}
              showLabel={true}
              tabBarStyle={{
                height: Responsive.heightPercentageToDP(7),
                borderTopLeftRadius: Responsive.heightPercentageToDP(2),
                borderTopRightRadius: Responsive.heightPercentageToDP(2),
                backgroundColor: 'black',
              }}> */}
            <Scene
              hideNavBar
              component={MovieScreen}
              key={ScreenName.MovieScreen}
              icon={TabIcon(ScreenName.MovieScreen)}
            />
            <Scene
              hideNavBar
              component={MovieDetailsScreen}
              key={ScreenName.MovieDetailsScreen}
            />
            <Scene
              hideNavBar
              component={CastDetailsScreen}
              key={ScreenName.CastDetailsScreen}
            />
            {/* <Scene
                hideNavBar
                component={WebSeriesScreen}
                key={ScreenName.WebSeriesScreen}
                icon={TabIcon(ScreenName.WebSeriesScreen)}
              /> */}
            {/* </Tabs> */}
          </Stack>
        </Scene>
      </Stack>
    </Router>
  );
}
