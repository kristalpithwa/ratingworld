import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Colors, Responsive, Fonts} from '../../../Theme';

export const CommonView = styled.View``;

export const ContainerView = styled.View`
  flex: 1;
  margin-bottom: ${Responsive.widthPercentageToDP('2%')}px;
`;

export const UpcomingMovieText = styled.Text`
  color: ${Colors.black};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('22')};
  margin-top: ${Platform.OS === 'android'
    ? Responsive.heightPercentageToDP('3.5%')
    : Responsive.heightPercentageToDP('5.5%')};
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
`;

export const MovieTrailerView = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightPercentageToDP('2%')}px;
`;

export const VideoView = styled.View`
  width: ${Responsive.widthPercentageToDP('70%')}px;
  height: ${Responsive.heightPercentageToDP('25%')}px;
  margin-left: ${Responsive.widthPercentageToDP('8%')}px;
  border-radius: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const UpcomingMoviesImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('70%')}px;
  height: ${Responsive.heightPercentageToDP('25%')}px;
  border-radius: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const MainView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('5%')}px;
`;

export const CommonText = styled.Text`
  color: ${Colors.black};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('20')}px;
  margin-left: ${Responsive.widthPercentageToDP('3%')}px;
  margin-vertical: ${Responsive.heightPercentageToDP('2%')}px;
`;

export const CommonFlatList = styled.FlatList``;

export const SharingMvrChildView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Responsive.heightPercentageToDP('1.7%')};
`;

export const MVRText = styled.Text`
  color: ${Colors.purple53};
  font-size: ${Responsive.convertFontScale('15')};
  font-family: ${Fonts.fonts.themeFontBold};
  margin-left: ${Responsive.widthPercentageToDP('3.65%')};
  margin-top: ${Responsive.heightPercentageToDP('1.7%')};
`;

export const CommentView = styled.TouchableOpacity`
  background-color: ${Colors.purple53};
  border-radius: ${Platform.OS === 'android'
    ? Responsive.widthPercentageToDP('3.8%')
    : Responsive.widthPercentageToDP('3.4%')};
  margin-right: ${Responsive.widthPercentageToDP('3.6%')};
  justify-content: center;
  align-items: center;
`;

export const UrlTextInput = styled.TextInput`
  width: ${Responsive.widthPercentageToDP('68%')};
  background-color: ${Colors.whiteFF};
  margin-left: ${Responsive.widthPercentageToDP('3.6%')};
  color: ${Colors.black};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
`;

export const UrlIcon = styled.Image`
  height: ${Responsive.heightPercentageToDP('1.8%')};
  width: ${Responsive.widthPercentageToDP('3.4%')};
  margin-left: ${Responsive.widthPercentageToDP('3.9%')};
  margin-top: ${Responsive.heightPercentageToDP('1.65%')};
`;
