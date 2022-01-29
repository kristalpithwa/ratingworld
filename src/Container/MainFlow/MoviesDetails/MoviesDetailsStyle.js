import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../../Theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: black;
`;

export const HeaderView = styled.View`
  position: absolute;
`;

export const BackButtonImage = styled.Image`
  tint-color: white;
  width: ${Responsive.heightPercentageToDP('4%')}px;
  height: ${Responsive.heightPercentageToDP('3%')}px;
  margin-top: ${Responsive.heightPercentageToDP('5%')}px;
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const MoviesImage = styled.ImageBackground`
  width: ${Responsive.widthPercentageToDP('100%')}px;
  height: ${Responsive.heightPercentageToDP('62%')}px;
`;

export const GradientView = styled.View`
  flex: 1;
  /* background-color: 'rgba(52, 52, 60, 0.6)'; */
`;

export const MovieDetailsView = styled.View`
  align-self: center;
  width: ${Responsive.widthPercentageToDP('92%')}px;
`;

export const MovieNameText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('30')};
`;

export const DetailsView = styled.View`
  flex-direction: row;
`;

export const ReleaseText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('14')};
  margin-left: ${Responsive.widthPercentageToDP('1.5%')}px;
`;

export const MovieDetailsText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBookItalic};
  font-size: ${Responsive.convertFontScale('14')};
  margin-top: ${Responsive.heightPercentageToDP('1%')}px;
`;

export const MovieTrailerView = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
`;

export const CastFlatList = styled.FlatList`
  flex: 1;
`;

export const CastImage = styled.Image`
  height: ${Responsive.heightPercentageToDP('20%')}px;
  width: ${Responsive.heightPercentageToDP('20%')}px;
  border-radius: ${Responsive.heightPercentageToDP('2%')}px;
  margin-top: ${Responsive.heightPercentageToDP('2.5%')}px;
  margin-left: ${Responsive.heightPercentageToDP('1%')}px;
`;

export const CastName = styled.Text`
  align-self: center;
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('14')};
  margin-top: ${props =>
    props.isMargin
      ? Responsive.heightPercentageToDP('0.3%')
      : Responsive.heightPercentageToDP('1%')}px;
  width: ${Responsive.heightPercentageToDP('16%')}px;
`;

export const CastText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('22')};
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
`;

export const RatingBox = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const PopularityView = styled.View`
  margin-left: ${Responsive.heightPercentageToDP('1.5%')}px;
  align-items: center;
`;

export const PopularityText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('25')};
`;

export const RatingText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('18')};
`;

export const CommonView = styled.View``;

export const CommonButton = styled.TouchableOpacity``;
