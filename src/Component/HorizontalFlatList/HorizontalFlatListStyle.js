import styled from 'styled-components/native';
import {Responsive, Colors, Fonts} from '../../Theme';

export const ContainerView = styled.View``;

export const MovieButton = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP('45%')}px;
  height: ${Responsive.heightPercentageToDP('31%')}px;
  margin-left: ${Responsive.widthPercentageToDP('4%')}px;
  margin-right: ${Responsive.widthPercentageToDP('1%')}px;
`;

export const MovieImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('43%')}px;
  height: ${Responsive.heightPercentageToDP('25%')}px;
  border-radius: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const CategoryText = styled.Text`
  color: ${Colors.black};
  margin-top: ${Responsive.heightPercentageToDP('1%')}px;
  margin-left: ${Responsive.widthPercentageToDP('2%')}px;
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('17')}px;
`;
