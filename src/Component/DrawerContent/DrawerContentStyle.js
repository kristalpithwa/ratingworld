import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Colors, Fonts, Responsive} from '../../Theme';

export const ContainerView = styled.View`
  flex: 1;
`;

export const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.purple36};
  padding-top: ${Platform.OS === 'android'
    ? Responsive.heightPercentageToDP('3.5%')
    : Responsive.heightPercentageToDP('4%')};
`;

export const ProfileImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.heightPercentageToDP('6.38%')};
  height: ${Responsive.heightPercentageToDP('6.38%')};
  margin-top: ${Responsive.heightPercentageToDP('1.55%')};
  margin-left: ${Responsive.widthPercentageToDP('3.60%')};
  margin-bottom: ${Responsive.heightPercentageToDP('1.55%')};
  border-radius: ${Responsive.heightPercentageToDP('3.20%')};
`;

export const UserNameDesignationView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('3.60%')};
`;

export const UserNameText = styled.Text`
  color: ${Colors.white};
  font-size: ${Responsive.convertFontScale('21')};
  font-family: ${Fonts.fonts.themeFontBlack};
`;

export const DesignationText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('15')};
  margin-top: ${Responsive.heightPercentageToDP('0.05%')};
`;

export const ListView = styled.View`
  width: ${Responsive.widthPercentageToDP('82%')};
  margin-top: ${Responsive.heightPercentageToDP('2%')};
  margin-bottom: ${Responsive.heightPercentageToDP('3%')};
  margin-left: ${Responsive.widthPercentageToDP('3.60%')};
`;

export const ListCommonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) =>
    props.isBottom
      ? Responsive.heightPercentageToDP('1%')
      : Responsive.heightPercentageToDP('4%')};
`;

export const UploadFileView = styled.View`
  flex-direction: row;
`;

export const ListCommonText = styled.Text`
  color: ${Colors.purple53};
  font-size: ${Responsive.convertFontScale('15')};
  font-family: ${Fonts.fonts.themeFontMedium};
`;

export const DropDownImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('4%')};
  height: ${Responsive.heightPercentageToDP('1.45%')};
  margin-top: ${Responsive.heightPercentageToDP('0.3%')};
`;

export const ContactUsView = styled.View`
  justify-content: center;
  width: ${Responsive.widthPercentageToDP('74%')};
`;

export const CommonImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('6%')};
  height: ${Responsive.widthPercentageToDP('5%')};
  margin-left: ${Responsive.widthPercentageToDP('3%')};
`;

export const RadioButtonView = styled.View`
  margin-top: ${Responsive.heightPercentageToDP('2.9%')};
  margin-bottom: ${Responsive.heightPercentageToDP('1%')};
`;

export const RadioBtnView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioBtnImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('4.8%')};
  height: ${Responsive.widthPercentageToDP('4.8%')};
  tint-color: ${(props) =>
    props.isRadioBtn ? Colors.purple36 : Colors.gray9c};
`;

export const RadioBtnText = styled.Text`
  color: ${Colors.gray9c};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
  margin-left: ${Responsive.widthPercentageToDP('2.2%')};
  margin-right: ${Responsive.widthPercentageToDP('7.2%')};
`;

export const AddressTextInput = styled.TextInput`
  border-width: 1;
  border-color: ${Colors.grayEb};
  background-color: ${Colors.whiteFF};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
  border-radius: ${Responsive.widthPercentageToDP('0.5%')};
  height: ${Responsive.heightPercentageToDP('8.35%')};
  padding-left: ${Responsive.widthPercentageToDP('2.45%')};
  margin-top: ${Responsive.heightPercentageToDP('1.35%')};
`;

export const TextInputWrapView = styled.View`
  flex-direction: row;
`;

export const UploadArchiveWrapView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Responsive.heightPercentageToDP('2%')};
`;

export const UploadPortalArchiveView = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-style: dashed;
  justify-content: space-around;
  border-color: ${Colors.lightBlueGrey};
  height: ${Responsive.heightPercentageToDP('7.80%')};
  width: ${Responsive.widthPercentageToDP('38.45%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
`;

export const UploadFilesImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('12.5%')};
  height: ${Responsive.heightPercentageToDP('5.58%')};
`;

export const InnerUploadPortalArchiveView = styled.View`
  align-items: center;
`;

export const UploadPortalArchiveText = styled.Text`
  color: ${Colors.purple36};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
`;

export const DownloadArchiveImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('5%')};
  height: ${Responsive.heightPercentageToDP('3%')};
`;

export const TotalSpaceRemainingView = styled.View`
  align-items: center;
  flex-direction: row;
  border-width: 2px;
  border-style: dashed;
  border-color: ${Colors.lightBlueGrey};
  height: ${Responsive.heightPercentageToDP('7.80%')};
  width: ${Responsive.widthPercentageToDP('82%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
  margin-top: ${Responsive.heightPercentageToDP('2%')};
  margin-bottom: ${Responsive.heightPercentageToDP('3.6%')};
`;

export const TotalSpaceImage = styled.Image`
  align-self: center;
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('12.5%')};
  height: ${Responsive.heightPercentageToDP('5.58%')};
  margin-left: ${Responsive.widthPercentageToDP('2%')};
`;

export const TotalSpaceTextView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('3.6%')};
`;

export const TotalSpaceText = styled.Text`
  color: ${Colors.purple36};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
`;

export const TotalSpaceMbText = styled.Text`
  color: ${Colors.purple36};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('18')};
`;

export const LogoutButton = styled.TouchableOpacity`
  bottom: 0;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.whitef9};
  width: ${Responsive.heightPercentageToDP('41.55%')};
  height: ${Responsive.heightPercentageToDP('5.70%')};
`;

export const LogoutText = styled.Text`
  color: ${Colors.purple36};
  font-family: ${Fonts.fonts.themeFontMedium};
  font-size: ${Responsive.convertFontScale('12')};
  margin-left: ${Responsive.widthPercentageToDP('2%')};
`;

export const DrawerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.purple36};
  width: ${Responsive.widthPercentageToDP('10.60%')};
  height: ${Responsive.widthPercentageToDP('8.60%')};
  margin-left: ${Responsive.widthPercentageToDP('50.50%')};
  margin-top: ${Responsive.heightPercentageToDP('1.90%')};
  border-radius: ${Responsive.widthPercentageToDP('10.90%')};
`;

export const DrawerImage = styled.Image`
  resize-mode: contain;
  width: ${Responsive.widthPercentageToDP('2%')};
  height: ${Responsive.heightPercentageToDP('2.5%')};
  margin-left: ${Responsive.widthPercentageToDP('3.8%')};
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${Colors.transparent};
  width: ${Responsive.widthPercentageToDP('5%')};
  height: ${Responsive.widthPercentageToDP('500%')};
`;

export const CommonInput = styled.View`
  width: ${Responsive.widthPercentageToDP('38.45%')};
  margin-right: ${Responsive.widthPercentageToDP('5%')};
`;
export const CommonView = styled.View``;

export const CommonButton = styled.TouchableOpacity``;

export const FlagView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('1%')};
  flex-direction: row;
`;

export const DropDownButton = styled.TouchableOpacity`
  border-width: 1;
  flex-direction: row;
  align-items: center;
  border-color: ${Colors.grayEb};
  background-color: ${Colors.whiteFF};
  margin-top: ${Responsive.heightPercentageToDP('1.5%')};
  height: ${Responsive.heightPercentageToDP('5%')};
  border-radius: ${Responsive.widthPercentageToDP('0.5%')};
`;

export const DrawerDropDownText = styled.Text`
  position: absolute;
  color: ${Colors.gray9c};
  font-family: ${Fonts.fonts.themeFontBook};
  font-size: ${Responsive.convertFontScale('12')};
  margin-left: ${Responsive.widthPercentageToDP('13%')};
`;

export const SocialMediaWrapView = styled.View`
  flex-direction: row;
  margin-bottom: ${Responsive.heightPercentageToDP('3%')};
`;

export const SocialMediaView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.purple36};
  margin-bottom: ${Responsive.widthPercentageToDP('3%')};
  width: ${Responsive.widthPercentageToDP('12.03%')};
  height: ${Responsive.heightPercentageToDP('5.55%')};
  border-radius: ${Responsive.widthPercentageToDP('1%')};
  margin-right: ${Responsive.widthPercentageToDP('2.01%')};
`;

export const SocialMediaImage = styled.Image`
  resize-mode: contain;
  tint-color: ${Colors.white};
  width: ${Responsive.widthPercentageToDP('6%')};
  height: ${Responsive.heightPercentageToDP('3%')};
`;
