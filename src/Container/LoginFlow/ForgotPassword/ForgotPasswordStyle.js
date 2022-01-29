import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  convertFontScale as cf,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../../Theme';
import styled from 'styled-components/native';

export const CommonButton = styled.TouchableOpacity``;

export const ContainerView = styled.View`
  flex: 1;
  background-color: black;
`;

export const BackButtonView = styled.View`
  align-self: center;
  justify-content: center;
  height: ${hp('5%')}px;
  width: ${wp('90%')}px;
`;

export const BackButtonImage = styled.Image`
  resize-mode: contain;
  width: ${wp('8%')}px;
  height: ${hp('5%')}px;
  tint-color: ${Colors.white};
`;

export const LockTextInputTextView = styled.View`
  align-self: center;
  width: ${wp('90%')}px;
  height: ${hp('80%')}px;
  margin-top: ${hp('5%')}px;
`;

export const LockImage = styled.Image`
  align-self: center;
  resize-mode: contain;
  height: ${hp('15%')}px;
  width: ${wp('30%')}px;
`;

export const TroubleText = styled.Text`
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.9px
  color: ${Colors.white};
`;

export const NoteText = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-top: ${hp('5%')}px;
  color: ${Colors.white};
`;

export const EmailTextInput = styled.TextInput`
  font-size: 18px;
  color: ${Colors.black};
  margin-top: ${hp('5%')}px;
  border-radius: ${wp('2%')}px;
  background-color: ${Colors.white};
`;

export const SendLinkText = styled.Text`
  font-size: 18px;
  align-self: center;
  color: ${Colors.white};
  margin-top: ${hp('2%')}px;
`;
