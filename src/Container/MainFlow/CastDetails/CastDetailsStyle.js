import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../../Theme';

export const CommonButton = styled.TouchableOpacity``;

export const ContainerView = styled.View`
  flex: 1;
`;

export const HeaderView = styled.View`
  position: absolute;
  margin-top: ${Responsive.heightPercentageToDP('6%')}px;
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const BackButtonImage = styled.Image`
  width: ${Responsive.heightPercentageToDP('4%')}px;
  height: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const CharacterView = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightPercentageToDP('13%')}px;
  margin-left: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const CharacterImage = styled.Image`
  resize-mode: cover;
  width: ${Responsive.widthPercentageToDP('48%')}px;
  height: ${Responsive.heightPercentageToDP('25%')}px;
  border-radius: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const CharacterNameView = styled.View`
  justify-content: center;
  width: ${Responsive.widthPercentageToDP('42%')}px;
  margin-left: ${Responsive.heightPercentageToDP('1%')}px;
`;

export const CharacterText = styled.Text`
  align-self: center;
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('32')}px;
`;

export const BirthdayText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('20')}px;
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
  margin-left: ${Responsive.heightPercentageToDP('1.5%')}px;
`;

export const NativePlace = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('20')}px;
  margin-top: ${Responsive.heightPercentageToDP('3%')}px;
  margin-left: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const PopularityText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('20')}px;
  margin-top: ${Responsive.heightPercentageToDP('1.5%')}px;
  margin-left: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const BiographyText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('16')}px;
  margin-top: ${Responsive.heightPercentageToDP('1.5%')}px;
  margin-left: ${Responsive.heightPercentageToDP('3%')}px;
  margin-right: ${Responsive.heightPercentageToDP('2.4%')}px;
`;

export const NickNameText = styled.Text`
  color: ${Colors.black};
  font-size: ${Responsive.convertFontScale('20')}px;
  margin-top: ${Responsive.heightPercentageToDP('1.5%')}px;
  margin-left: ${Responsive.heightPercentageToDP('3%')}px;
`;
