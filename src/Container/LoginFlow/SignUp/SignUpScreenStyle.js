import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Colors, Responsive, Fonts} from '../../../Theme';

export const CommonButton = styled.TouchableOpacity``;

export const ContainerView = styled.View`
  flex: 1;
  background-color: black;
`;

export const MainView = styled.View`
  align-self: center;
  width: ${Responsive.widthPercentageToDP('90%')}px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${Responsive.widthPercentageToDP('90%')}px;
  margin-top: ${Platform.OS === 'android'
    ? Responsive.heightPercentageToDP('3.5%')
    : Responsive.heightPercentageToDP('5.5%')};
`;

export const BackButtonImage = styled.Image`
  tint-color: white;
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('8%')}px;
  height: ${Responsive.heightPercentageToDP('4%')}px;
`;

export const RegisterText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('18')};
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const LogoImage = styled.Image`
  resize-mode: contain;
  align-self: center;
  width: ${Responsive.widthPercentageToDP('40%')}px;
  height: ${Responsive.heightPercentageToDP('12%')}px;
  margin-top: ${Responsive.heightPercentageToDP('5%')}px;
`;

export const QutoesText = styled.Text`
  color: ${Colors.white};
  align-self: center;
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('18')};
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
  margin-top: ${props =>
    props.isMargin
      ? Responsive.heightPercentageToDP('5%')
      : Responsive.heightPercentageToDP('0.5%')};
`;

export const CommonTextInput = styled.TextInput`
  color: ${Colors.white};
  border-bottom-color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('15')}px;
  height: ${Responsive.heightPercentageToDP('6%')}px;
  margin-top: ${props =>
    props.isMargin
      ? Responsive.heightPercentageToDP('3%')
      : Responsive.heightPercentageToDP('2.5%')}px;
  border-bottom-width: ${Responsive.heightPercentageToDP('0.1%')}px;
`;

export const SignUpButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${Responsive.widthPercentageToDP('90%')};
  height: ${Responsive.heightPercentageToDP('6%')};
  margin-top: ${Responsive.heightPercentageToDP('4.5%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
  background-color: ${Colors.blue};
`;

export const SignUpText = styled.Text`
  color: ${Colors.black};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('20')};
`;

export const TermsConditionText = styled.Text`
  align-self: center;
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('14')};
  margin-top: ${Responsive.heightPercentageToDP('2.5%')};
`;

export const OrSignUpText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('15')}px;
  margin-top: ${Responsive.heightPercentageToDP('4%')}px;
`;

export const LoginWithView = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
`;

export const GoogleFaceBookImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('10%')}px;
  height: ${Responsive.heightPercentageToDP('5%')}px;
  margin-right: ${Responsive.widthPercentageToDP('4%')}px;
  border-radius: ${Responsive.widthPercentageToDP('1%')}px;
`;
