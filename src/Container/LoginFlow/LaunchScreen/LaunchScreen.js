import React, {useEffect, useState} from 'react';
import {
  BackgroundImage,
  ContainerView,
  DetailsText,
  GetStartedButton,
  GetStartedText,
  QutoesText,
  QutoesView,
  GradiantView,
} from './LaunchScreenStyle';
import {Images, ScreenName} from '../../../Theme';
import {Actions} from 'react-native-router-flux';

export default function LaunchScreen(props) {
  useEffect(() => {}, []);

  const onPressGetStartred = () => {
    Actions[ScreenName.LoginScreen]();
  };

  return (
    <ContainerView>
      <BackgroundImage source={Images.launch}>
        <GradiantView>
          <QutoesView>
            <QutoesText>Enjoy your favourite</QutoesText>
            <QutoesText>movies everywhere</QutoesText>
            <DetailsText isTop={true}>
              Browse through our collections and
            </DetailsText>
            <DetailsText>
              discover hundreds of movies and series that
            </DetailsText>
            <DetailsText>you'lll love!</DetailsText>
          </QutoesView>
          <GetStartedButton onPress={onPressGetStartred}>
            <GetStartedText>Get Started</GetStartedText>
          </GetStartedButton>
        </GradiantView>
      </BackgroundImage>
    </ContainerView>
  );
}
