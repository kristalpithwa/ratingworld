import React, {useEffect, useState} from 'react';
import {Alert, Text, Platform} from 'react-native';
import {
  ContainerView,
  HeaderView,
  BackButtonImage,
  RegisterText,
  LogoImage,
  CommonButton,
  QutoesText,
  MainView,
  CommonTextInput,
  SignUpButton,
  SignUpText,
  TermsConditionText,
  OrSignUpText,
  LoginWithView,
  GoogleFaceBookImage,
} from './SignUpScreenStyle';
import {Actions} from 'react-native-router-flux';
import {Images, Responsive, Colors, Constant, ScreenName} from '../../../Theme';

export default function SignUpScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return function cleanup() {};
  }, []);

  const onPressBackButton = () => {
    Actions.pop();
  };

  const onPressSignUp = () => {
    console.log('onPressSignUp');
  };

  const onPressGoogle = () => {
    console.log('onPressGoogle');
  };

  const onPressFacebook = () => {
    console.log('onPresFacebook');
  };

  return (
    <ContainerView>
      <MainView>
        <HeaderView>
          <CommonButton onPress={onPressBackButton}>
            <BackButtonImage source={Images.leftArrow} />
          </CommonButton>
          <RegisterText>Register</RegisterText>
        </HeaderView>
        <LogoImage source={Images.logo} />
        <QutoesText isMargin={true}>
          Sign up to discover all movies and enjoy
        </QutoesText>
        <QutoesText>our features</QutoesText>
        <CommonTextInput
          isMargin={true}
          value={email}
          maxLength={25}
          placeholder={'Email'}
          autoCapitalize={'none'}
          placeholderTextColor={Colors.white}
          onChangeText={value => setEmail(value)}
        />
        <CommonTextInput
          isMargin={true}
          value={password}
          maxLength={25}
          placeholder={'Password'}
          autoCapitalize={'none'}
          placeholderTextColor={Colors.white}
          onChangeText={value => setPassword(value)}
        />
        <CommonTextInput
          isMargin={true}
          value={confirmPassword}
          maxLength={25}
          placeholder={'Confirm Password'}
          autoCapitalize={'none'}
          placeholderTextColor={Colors.white}
          onChangeText={value => setConfirmPassword(value)}
        />
        <SignUpButton onPress={onPressSignUp}>
          <SignUpText>Sign Up</SignUpText>
        </SignUpButton>
        <TermsConditionText>
          By signing up I accept terms and privacy policy
        </TermsConditionText>
        <OrSignUpText>Signup with</OrSignUpText>
        <LoginWithView>
          <CommonButton onPress={onPressGoogle}>
            <GoogleFaceBookImage source={Images.google} />
          </CommonButton>
          <CommonButton onPress={onPressFacebook}>
            <GoogleFaceBookImage source={Images.facebook} />
          </CommonButton>
        </LoginWithView>
      </MainView>
    </ContainerView>
  );
}
