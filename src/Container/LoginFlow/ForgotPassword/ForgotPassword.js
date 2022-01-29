import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Images} from '../../../Theme';

import {
  ContainerView,
  BackButtonView,
  BackButtonImage,
  LockTextInputTextView,
  LockImage,
  TroubleText,
  NoteText,
  EmailTextInput,
  SendLinkText,
  CommonButton,
} from './ForgotPasswordStyle';

export default function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState('');

  const renderHeaderView = () => {
    return (
      <BackButtonView>
        <CommonButton onPress={() => Actions.pop()}>
          <BackButtonImage source={Images.leftArrow} />
        </CommonButton>
      </BackButtonView>
    );
  };

  const renderMiddleView = () => {
    return (
      <LockTextInputTextView>
        <LockImage source={Images.lock} />
        <TroubleText>Trouble Logging In?</TroubleText>
        <NoteText>
          Enter your email and we'll send you a link to Get back into your
          account.
        </NoteText>
        <EmailTextInput
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType={'email-address'}
          placeholder={'Enter Your Email'}
          onChangeText={value => setEmail(value)}
        />
        <CommonButton onPress={() => console.log('onPress')}>
          <SendLinkText>Send Login Link</SendLinkText>
        </CommonButton>
      </LockTextInputTextView>
    );
  };

  //Render Methods
  return (
    <ContainerView>
      {renderHeaderView()}
      {renderMiddleView()}
    </ContainerView>
  );
}
