import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../../Theme';

export const CommonButton = styled.TouchableOpacity``;

export const ContainerView = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  justify-content: flex-end;
  height: ${Responsive.heightPercentageToDP('100%')}px;
  width: ${Responsive.widthPercentageToDP('100%')}px;
`;

export const GradiantView = styled.View`
  flex: 1;
  background-color: 'rgba(52, 52, 55, 0.4)';
`;

export const HeaderView = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: ${Responsive.widthPercentageToDP('90%')}px;
  margin-top: ${Responsive.heightPercentageToDP('5%')}px;
`;

export const RegisterText = styled.Text`
  color: ${Colors.Yellow};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('22')};
`;

export const LogoImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('35%')}px;
  height: ${Responsive.heightPercentageToDP('5%')}px;
`;

export const BottomView = styled.View`
  align-self: center;
  position: absolute;
  bottom: ${Responsive.heightPercentageToDP('5%')}px;
  width: ${Responsive.widthPercentageToDP('90%')}px;
`;

export const LoginText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('28')};
`;

export const EmailPasswordTextInput = styled.TextInput`
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

export const ForgotPasswordText = styled.Text`
  text-align: right;
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('15')}px;
  margin-top: ${Responsive.heightPercentageToDP('2.8%')}px;
`;

export const OrContinueText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('15')}px;
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
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

export const LoginButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${Responsive.widthPercentageToDP('90%')};
  height: ${Responsive.heightPercentageToDP('4.45%')};
  margin-top: ${Responsive.heightPercentageToDP('4.5%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
  background-color: ${Colors.blue};
`;

export const LoginButtonText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('18')};
  font-family: ${Fonts.fonts.themeFontMedium};
`;
