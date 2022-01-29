import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import {Images, ScreenName, Constant, Colors, Responsive} from '../../../Theme';
import {
  ContainerView,
  HeaderView,
  LogoImage,
  RegisterText,
  BackgroundImage,
  GradiantView,
  BottomView,
  LoginText,
  EmailPasswordTextInput,
  ForgotPasswordText,
  OrContinueText,
  LoginWithView,
  GoogleFaceBookImage,
  LoginButton,
  LoginButtonText,
  CommonButton,
} from './LoginScreenStyle';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return function cleanup() {};
  }, []);

  const onPressRegister = () => {
    console.log('onPressRegister');
    Actions[ScreenName.SignUpScreen]();
  };

  const onPressLogin = () => {
    console.log('onPressLogin');
    Constant.commonConstant.emitter.emit(Constant.eventListenerKeys.Login);
  };

  const onPressForgot = () => {
    console.log('onPressForgot');
    Actions[ScreenName.ForgotPwScreen]();
  };

  const onPressGoogle = () => {
    console.log('onPressGoogle');
  };

  const onPressFacebook = () => {
    console.log('onPresFacebook');
  };

  return (
    <ContainerView>
      <BackgroundImage source={Images.loginBg}>
        <LinearGradient
          style={{flex: 1}}
          colors={[Colors.transparent, Colors.black, Colors.black]}>
          <GradiantView>
            <HeaderView>
              <LogoImage source={Images.smallLogo} />
              <CommonButton onPress={onPressRegister}>
                <RegisterText>Register</RegisterText>
              </CommonButton>
            </HeaderView>
            <BottomView>
              <LoginText>Login</LoginText>
              <EmailPasswordTextInput
                isMargin={true}
                value={email}
                maxLength={25}
                placeholder={'Email'}
                autoCapitalize={'none'}
                placeholderTextColor={Colors.white}
                onChangeText={value => setEmail(value)}
              />
              <EmailPasswordTextInput
                value={password}
                maxLength={25}
                placeholder={'Password'}
                autoCapitalize={'none'}
                placeholderTextColor={Colors.white}
                onChangeText={value => setPassword(value)}
              />
              <CommonButton onPress={onPressForgot}>
                <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
              </CommonButton>
              <OrContinueText>or continue with</OrContinueText>
              <LoginWithView>
                <CommonButton onPress={onPressGoogle}>
                  <GoogleFaceBookImage source={Images.google} />
                </CommonButton>
                <CommonButton onPress={onPressFacebook}>
                  <GoogleFaceBookImage source={Images.facebook} />
                </CommonButton>
              </LoginWithView>
              <LoginButton onPress={onPressLogin}>
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>
            </BottomView>
          </GradiantView>
        </LinearGradient>
      </BackgroundImage>
    </ContainerView>
  );
}
