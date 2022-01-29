import React from 'react';
import PropTypes from 'prop-types';
import {Images} from '../../../Theme';
import {BackgroundImage, ContainerView} from './SplashStyle';
export default function SplashScreen(props) {
  return (
    <ContainerView>
      <BackgroundImage source={Images.splashLogo} resize-mode="contain" />
    </ContainerView>
  );
}

SplashScreen.propTypes = {
  isAuth: PropTypes.bool,
};
SplashScreen.defaultProps = {
  isAuth: false,
};
