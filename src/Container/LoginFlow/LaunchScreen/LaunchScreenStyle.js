import styled from 'styled-components/native';
import {Images, Colors, Responsive, Fonts} from '../../../Theme';

export const ContainerView = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${Responsive.heightPercentageToDP('100%')};
  width: ${Responsive.widthPercentageToDP('100%')};
`;

export const GradiantView = styled.View`
  flex: 1;
  background-color: 'rgba(52, 52, 52, 0.6)';
`;

export const QutoesView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('3%')};
  margin-top: ${Responsive.heightPercentageToDP('40%')};
`;

export const QutoesText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBold};
  font-size: ${Responsive.convertFontScale('28')};
`;

export const DetailsText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('18')};
  margin-top: ${props =>
    props.isTop
      ? Responsive.heightPercentageToDP('3%')
      : Responsive.heightPercentageToDP('0.5%')};
`;

export const GetStartedButton = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  bottom: ${Responsive.widthPercentageToDP('8%')};
  width: ${Responsive.widthPercentageToDP('90%')};
  height: ${Responsive.heightPercentageToDP('4.45%')};
  margin-top: ${Responsive.heightPercentageToDP('6.15%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
  background-color: ${Colors.blue};
`;

export const GetStartedText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('18')};
  font-family: ${Fonts.fonts.themeFontMediumItalic};
`;
