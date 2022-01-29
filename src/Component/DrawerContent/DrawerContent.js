import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Linking,
  Platform,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
// import _ from 'lodash';
import {radioButtonJson, socialMediaType} from '../../Theme/Constants';
import Loader from '../../Component/Loader';
import {showAlert} from '../../Functions/Alerts';
import APICall from '../../APIRequest/APICall';
import EndPoints from '../../APIRequest/EndPoints';
// import {Dropdown} from 'react-native-element-dropdown';
import {socialURLValidate} from '../../Functions/Validate';
// import CountryPicker from 'react-native-country-picker-modal';
import {Images, Colors, Constant, Responsive} from '../../Theme';
import AsyncStorage from '@react-native-community/async-storage';
import CommonTextInput from '../CommonTextInput/CommonTextInput';

const data = [
  {label: 'Facebook', value: '0'},
  {label: 'Instagram', value: '1'},
  {label: 'Linkedin', value: '2'},
  {label: 'Twitter', value: '3'},
  {label: 'Whatsapp', value: '4'},
  {label: 'Telegram', value: '5'},
  {label: 'Website', value: '6'},
];

import {
  ContainerView,
  ProfileView,
  ProfileImage,
  UserNameDesignationView,
  UserNameText,
  DesignationText,
  ListView,
  ListCommonText,
  ListCommonView,
  DropDownImage,
  CommonButton,
  ContactUsView,
  UploadFileView,
  LogoutText,
  CommonImage,
  RadioButtonView,
  AddressTextInput,
  UploadPortalArchiveView,
  UploadFilesImage,
  UploadArchiveWrapView,
  InnerUploadPortalArchiveView,
  UploadPortalArchiveText,
  DownloadArchiveImage,
  TotalSpaceRemainingView,
  TotalSpaceImage,
  TotalSpaceText,
  TotalSpaceMbText,
  TotalSpaceTextView,
  RadioBtnView,
  RadioBtnText,
  RadioBtnImage,
  LogoutButton,
  CommonView,
  DrawerButton,
  DrawerImage,
  CommonInput,
  TextInputWrapView,
  DrawerDropDownText,
  DropDownButton,
  SocialMediaImage,
  SocialMediaView,
  SocialMediaWrapView,
} from './DrawerContentStyle';

export default function SideMenu(props) {
  const [expandJsonArr, setExpandJsonArr] = useState();
  const [isAccount, setIsAccount] = useState(false);
  const [isUploadFilesHere, setIsUploadFilesHere] = useState(false);
  const [isUploadSocialMedia, setIUploadSocialMedia] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Arrow
  const [isAccountArrow, setIsAccountArrow] = useState(true);
  const [isUploadFileArrow, setIsDropDownAccount] = useState(true);
  const [isSocialMediaArrow, setIsSocialMediaArrow] = useState(true);
  const [isContactUsArrow, setIsContactUsArrow] = useState(true);
  const [isArchiveArrow, setIsArchiveArrow] = useState(true);

  //Account info
  const [id, setId] = useState('');
  const [radioButton, setRdButton] = useState();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('IN');
  const [countryName, setCountryName] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [numberThree, setNumberThree] = useState('');
  const [urlOne, setUrlOne] = useState('');
  const [urlTwo, setUrlTwo] = useState('');
  const [urlThree, setUrlThree] = useState('');
  const [socialMediaArray, setSocialMediaArray] = useState([]);
  const [dropdownValue, setDropdownValue] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  //async Method
  const getData = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.userData).then(res => {
      if (res) {
        const newRes = JSON.parse(res);
        console.log('getData=>>>', newRes);
        const objAry = radioButtonJson;
        const updatedArr = objAry.map(item => {
          if (item.id === newRes.accountType) {
            item.isSelected = true;
          } else {
            item.isSelected = false;
          }
          return item;
        });
        setExpandJsonArr(updatedArr);
        setRefresh(!refresh);
        setRdButton(newRes.accountType);
        setSocialMediaArray(newRes.socialLinks);
        setId(newRes.id);
        setName(newRes.name);
        setCountryName(newRes.country);
        setPersonalEmail(newRes.personalEmail);
        setBusinessEmail(newRes.email);
        setAddress(newRes.businessAddress);
        setCity(newRes.address);
        setNumberOne(newRes.phoneNumber1);
        setNumberTwo(newRes.phoneNumber2);
        setNumberThree(newRes.phoneNumber3);
      } else {
        console.log('Data Fail');
      }
    });
  };

  const updateData = async data => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.userData).then(res => {
      if (res) {
        const newRes = JSON.parse(res);
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          newRes.socialLinks.push(element);
        }
        setSocialMediaArray(newRes.socialLinks);
        AsyncStorage.setItem(
          Constant.asyncStorageKeys.userData,
          JSON.stringify(newRes),
        );
        setUrlOne('');
        setUrlTwo('');
        setUrlThree('');
        setDropdownValue(null);
      } else {
        console.log('Data Fail');
      }
    });
  };

  const accountUpdate = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.userData).then(res => {
      if (res) {
        const newRes = JSON.parse(res);
        console.log('accountUpdateNewRes=>', newRes);
        newRes.accountType = radioButton;
        newRes.name = name;
        newRes.country = countryName;
        newRes.personalEmail = personalEmail;
        newRes.businessAddress = address;
        newRes.address = city;
        newRes.businessAddress = address;
        newRes.phoneNumber1 = numberOne;
        newRes.phoneNumber2 = numberTwo;
        newRes.phoneNumber3 = numberThree;
        AsyncStorage.setItem(
          Constant.asyncStorageKeys.userData,
          JSON.stringify(newRes),
        );
      } else {
        console.log('Data Fail');
      }
    });
  };

  //api Method
  const editProfileApi = async id => {
    setIsLoading(true);
    const payload = {
      accountType: radioButton,
      name: name,
      country: countryName,
      personalEmail: personalEmail || '',
      email: businessEmail || '',
      businessAddress: address,
      address: city,
      phoneNumber1: numberOne,
      phoneNumber2: numberTwo,
      phoneNumber3: numberThree,
    };
    console.log('payload=>>>', payload);
    APICall('POST', payload, EndPoints.editProfile + id).then(
      async response => {
        console.log('response=>', response);
        if (response.statusCode === Constant.apiResponse.success) {
          accountUpdate();
          setIsLoading(false);
          showAlert(response?.message);
        } else {
          setIsLoading(false);
          showAlert(response?.message);
        }
      },
    );
  };

  const addSocialMediaLinkApi = async id => {
    setIsLoading(true);
    let mediaUrl = [];
    if (24 - socialMediaArray.length >= 3) {
      if (urlOne) {
        mediaUrl.push(urlOne);
      }
      if (urlTwo) {
        mediaUrl.push(urlTwo);
      }
      if (urlThree) {
        mediaUrl.push(urlThree);
      }
      console.log('3 url add');
    } else if (24 - socialMediaArray.length === 2) {
      if (urlOne) {
        mediaUrl.push(urlOne);
      }
      if (urlTwo) {
        mediaUrl.push(urlTwo);
      }
      console.log('2 url add');
    } else if (24 - socialMediaArray.length === 1) {
      if (urlOne) {
        mediaUrl.push(urlOne);
      }
      console.log('1 url add');
    } else if (24 - socialMediaArray.length === 0) {
      showAlert('Maximum Links are 24');
    }

    const payload = {
      type: dropdownValue,
      urls: mediaUrl,
    };
    console.log('payload=>', payload);
    APICall('POST', payload, EndPoints.socialMedia + id).then(
      async response => {
        console.log('response=>', response);
        if (response.statusCode === Constant.apiResponse.success) {
          console.log('responseData=>', response.data);
          updateData(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          showAlert(response?.message);
        }
      },
    );
  };

  //countryPicker Method
  const onSelect = (country: Country) => {
    setCountry(country.cca2);
    setCountryName(country.name);
    // console.log('country=>', country);
    // console.log('countryFlag=>', country.cca2);
    // countryFlag(country.cca2);
  };

  //onPress Method
  const onPressAccountExpand = () => {
    console.log('onPressAccountExpand');
    setIsAccount(!isAccount);
    setIsAccountArrow(!isAccountArrow);
  };

  const onPressUploadInfo = () => {
    if (name.length === 0) {
      showAlert('Please enter name');
    } else if (countryName.length === 0) {
      showAlert('Please select country');
    } else if (businessEmail.length === 0) {
      showAlert('Please enter businessEmail');
    } else if (address === null || address === '') {
      showAlert('Please enter address');
    } else if (city.length === 0) {
      showAlert('Please enter city');
    } else if (numberOne.length === 0 || numberOne.length > 10) {
      showAlert('Please enter number1');
    } else if (numberTwo.length === 0 || numberTwo.length > 10) {
      showAlert('Please enter number2');
    } else if (numberThree.length === 0 || numberThree.length > 10) {
      showAlert('Please enter number3');
    } else {
      editProfileApi(id);
    }
  };

  const onPressUploadFilesHereExpand = () => {
    console.log('onPressUploadFilesHereExpand');
    setIsUploadFilesHere(!isUploadFilesHere);
    setIsDropDownAccount(!isUploadFileArrow);
  };

  const onPressUploadPortal = () => {
    console.log('onPressUploadPortal');
  };

  const onPressUploadFilesArchive = () => {
    console.log('onPressUploadFilesArchive');
  };

  const onPressUploadSocialMediaLinksExpand = () => {
    console.log('onPressUploadSocialMediaLinks');
    setIUploadSocialMedia(!isUploadSocialMedia);
    setIsSocialMediaArrow(!isSocialMediaArrow);
  };

  const onPressAddSocialMediaLinks = (url1, url2, url3) => {
    if (dropdownValue === null) {
      showAlert('Please select social media platform');
      return;
    }
    if (
      urlOne?.trim().length === 0 &&
      urlTwo?.trim().length === 0 &&
      urlThree?.trim().length === 0
    ) {
      showAlert('Please enter valid url');
      return;
    }
    if (urlOne && urlOne.trim().length > 0 && !socialURLValidate(urlOne)) {
      showAlert('Please enter valid url');
      return;
    }

    if (urlTwo && urlTwo.trim().length > 0 && !socialURLValidate(urlTwo)) {
      showAlert('Please enter valid url');
      return;
    }

    if (
      urlThree &&
      urlThree.trim().length > 0 &&
      !socialURLValidate(urlThree)
    ) {
      showAlert('Please enter valid url');
      return;
    }
    addSocialMediaLinkApi(id);
  };

  const onPressContactUsForExpand = () => {
    console.log('onPressContactUsForExpand');
    setIsContactUsArrow(!isContactUsArrow);
  };

  const onPressArchiveExpand = () => {
    console.log('onPressArchiveExpand');
    setIsArchiveArrow(!isArchiveArrow);
  };

  const onPressLogout = () => {
    console.log('onPressLogout');
    Constant.commonConstant.emitter.emit(
      Constant.eventListenerKeys.logoutListener,
    );
  };

  const onPressSocialMediaIcon = item => {
    Linking.openURL('https://www.' + item.url);
  };

  //flatList Method
  const renderRadioButtonList = ({item}) => {
    return (
      <RadioBtnView>
        <CommonButton onPress={() => radioButtonToggle(item.id)}>
          <RadioBtnImage
            isRadioBtn={item.isSelected}
            source={
              item.isSelected ? Images.radioChecked : Images.radioUnChecked
            }
          />
        </CommonButton>
        <RadioBtnText>{item.label}</RadioBtnText>
      </RadioBtnView>
    );
  };

  const radioButtonToggle = id => {
    expandJsonArr.map(item => {
      if (item.id === id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setRdButton(id);
    setRefresh(!refresh);
  };

  const getSocialMediaType = type => {
    switch (type) {
      case '0':
        return socialMediaType.facebook;
      case '1':
        return socialMediaType.instagram;
      case '2':
        return socialMediaType.linkedin;
      case '3':
        return socialMediaType.twitter;
      case '4':
        return socialMediaType.whatsapp;
      case '5':
        return socialMediaType.telegram;
      default:
        return socialMediaType.website;
    }
  };

  const renderSocialMediaList = ({item}) => {
    return (
      <CommonButton onPress={() => onPressSocialMediaIcon(item)}>
        <SocialMediaView>
          <SocialMediaImage source={getSocialMediaType(item.type)} />
        </SocialMediaView>
      </CommonButton>
    );
  };

  const renderSocialMediaNameList = item => {
    return (
      <View
        style={{
          padding: Responsive.heightPercentageToDP('1.5%'),
        }}>
        <Text
          style={{
            marginLeft: Responsive.widthPercentageToDP('2%'),
          }}>
          {item.label}
        </Text>
      </View>
    );
  };

  //render Method
  return (
    <ContainerView>
      <Loader isLoading={isLoading} />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.black}
        translucent={Platform.OS === 'android' ? true : false}
      />
      {/* Profile */}
      <ProfileView>
        <ProfileImage source={Images.profile} />
        <UserNameDesignationView>
          <UserNameText>{name}</UserNameText>
          <DesignationText>MVR - 7</DesignationText>
        </UserNameDesignationView>
        {/* {isDrawer && (
          <DrawerButton onPress={onPressDrawer}>
            <DrawerImage source={Images.drawerClose} />
          </DrawerButton>
        )} */}
      </ProfileView>
      <ScrollView>
        <ListView>
          {/* Account info */}
          <CommonButton onPress={onPressAccountExpand}>
            <ListCommonView isBottom={isAccount}>
              <ListCommonText>Account Info</ListCommonText>
              {isAccountArrow ? (
                <DropDownImage source={Images.dropDownIcon} />
              ) : (
                <DropDownImage source={Images.upArrow} />
              )}
            </ListCommonView>
          </CommonButton>
          {isAccount && (
            <CommonView>
              <RadioButtonView>
                <FlatList
                  horizontal
                  bounces={false}
                  data={expandJsonArr}
                  renderItem={renderRadioButtonList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                />
              </RadioButtonView>
              <CommonTextInput
                text={'Name'}
                value={name}
                maxLength={30}
                topMargin={'0.5%'}
                onChangeText={value => {
                  setName(value);
                }}
              />
              {/* <DropDownButton>
                <CountryPicker
                  {...{onSelect}}
                  containerButtonStyle={{
                    width: Responsive.widthPercentageToDP('78%'),
                    marginLeft: Responsive.widthPercentageToDP('2%'),
                  }}
                  visible={false}
                  withFlag={true}
                  withFilter={true}
                  countryCode={country}
                />
                <DrawerDropDownText>{countryName}</DrawerDropDownText>
              </DropDownButton> */}

              <CommonTextInput
                maxLength={30}
                topMargin={'1.35%'}
                value={personalEmail}
                text={'Personal email'}
                onChangeText={value => {
                  setPersonalEmail(value);
                }}
              />
              <CommonTextInput
                text={'Business email'}
                value={businessEmail}
                maxLength={30}
                topMargin={'1.35%'}
                onChangeText={value => {
                  setBusinessEmail(value);
                }}
              />
              <AddressTextInput
                multiline
                value={address}
                numberOfLines={5}
                placeholder={'Address'}
                placeholderTextColor={Colors.gray9c}
                onChangeText={value => {
                  setAddress(value);
                }}
              />
              <TextInputWrapView>
                <CommonInput>
                  <CommonTextInput
                    value={city}
                    text={'City'}
                    maxLength={30}
                    topMargin={'1.35%'}
                    onChangeText={value => {
                      setCity(value);
                    }}
                  />
                </CommonInput>
                <CommonInput>
                  <CommonTextInput
                    text={'Number 1'}
                    value={numberOne}
                    maxLength={30}
                    topMargin={'1.35%'}
                    onChangeText={value => {
                      setNumberOne(value);
                    }}
                  />
                </CommonInput>
              </TextInputWrapView>
              <TextInputWrapView>
                <CommonInput>
                  <CommonTextInput
                    text={'Number 2'}
                    value={numberTwo}
                    maxLength={30}
                    topMargin={'1.35%'}
                    onChangeText={value => {
                      setNumberTwo(value);
                    }}
                  />
                </CommonInput>
                <CommonInput>
                  <CommonTextInput
                    text={'Number 3'}
                    value={numberThree}
                    maxLength={30}
                    topMargin={'1.35%'}
                    onChangeText={value => {
                      setNumberThree(value);
                    }}
                  />
                </CommonInput>
              </TextInputWrapView>

              <SubmitButton
                width={'50.5%'}
                text={'Update Info'}
                onPress={onPressUploadInfo}
              />
            </CommonView>
          )}

          {/* UploadFiles Here */}
          <CommonButton onPress={onPressUploadFilesHereExpand}>
            <ListCommonView isBottom={isUploadFilesHere}>
              <UploadFileView>
                <ListCommonText>UploadFiles Here</ListCommonText>
                <CommonImage source={Images.memoryCard} />
              </UploadFileView>
              {isUploadFileArrow ? (
                <DropDownImage source={Images.dropDownIcon} />
              ) : (
                <DropDownImage source={Images.upArrow} />
              )}
            </ListCommonView>
          </CommonButton>
          {isUploadFilesHere && (
            <CommonView>
              <UploadArchiveWrapView>
                <CommonButton onPress={onPressUploadPortal}>
                  <UploadPortalArchiveView>
                    <UploadFilesImage source={Images.uploadPortal} />
                    <InnerUploadPortalArchiveView>
                      <UploadPortalArchiveText>
                        Upload Portal
                      </UploadPortalArchiveText>
                      <DownloadArchiveImage source={Images.download} />
                    </InnerUploadPortalArchiveView>
                  </UploadPortalArchiveView>
                </CommonButton>
                <CommonButton onPress={onPressUploadFilesArchive}>
                  <UploadPortalArchiveView>
                    <UploadFilesImage source={Images.uploadPortal} />
                    <InnerUploadPortalArchiveView>
                      <UploadPortalArchiveText>Archive</UploadPortalArchiveText>
                      <DownloadArchiveImage source={Images.archive} />
                    </InnerUploadPortalArchiveView>
                  </UploadPortalArchiveView>
                </CommonButton>
              </UploadArchiveWrapView>
              <TotalSpaceRemainingView>
                <TotalSpaceImage source={Images.uploadPortal} />
                <TotalSpaceTextView>
                  <TotalSpaceText>Total Space Remaining</TotalSpaceText>
                  <TotalSpaceMbText>44.05 MB.</TotalSpaceMbText>
                </TotalSpaceTextView>
              </TotalSpaceRemainingView>
            </CommonView>
          )}

          {/* Upload Social Media Links */}
          <CommonButton onPress={onPressUploadSocialMediaLinksExpand}>
            <ListCommonView isBottom={isUploadSocialMedia}>
              <ListCommonText>Upload Social Media Links</ListCommonText>
              {isSocialMediaArrow ? (
                <DropDownImage source={Images.dropDownIcon} />
              ) : (
                <DropDownImage source={Images.upArrow} />
              )}
            </ListCommonView>
          </CommonButton>
          {/* {isUploadSocialMedia && (
            <CommonView>
              <Dropdown
                maxHeight={Responsive.heightPercentageToDP('28%')}
                data={data}
                search={false}
                placeholderStyle={{
                  marginLeft: Responsive.widthPercentageToDP('3%'),
                }}
                style={{
                  borderColor: Colors.grayEb,
                  height: Responsive.heightPercentageToDP('5%'),
                  marginTop: Responsive.heightPercentageToDP('3%'),
                  borderWidth: Responsive.widthPercentageToDP('0.2%'),
                }}
                value={dropdownValue}
                labelField="label"
                valueField="value"
                placeholder="Select Social Media Platform"
                selectedTextStyle={{
                  fontSize: Responsive.convertFontScale('12'),
                  marginLeft: Responsive.widthPercentageToDP('2%'),
                }}
                placeholderStyle={{
                  color: Colors.gray9c,
                  fontSize: Responsive.convertFontScale('12'),
                  marginLeft: Responsive.widthPercentageToDP('2%'),
                }}
                onChange={(item) => {
                  setDropdownValue(item.value);
                }}
                renderItem={(item) => renderSocialMediaNameList(item)}
              />

              <CommonTextInput
                value={urlOne}
                topMargin={'1.35%'}
                text={'Enter url...'}
                onChangeText={(value) => {
                  setUrlOne(value);
                }}
              />
              <CommonTextInput
                value={urlTwo}
                topMargin={'1.35%'}
                text={'Enter url...'}
                onChangeText={(value) => {
                  setUrlTwo(value);
                }}
              />
              <CommonTextInput
                value={urlThree}
                topMargin={'1.35%'}
                text={'Enter url...'}
                onChangeText={(value) => {
                  setUrlThree(value);
                }}
              />
              <SubmitButton
                width={'50.5%'}
                text={'Add Social Media Links'}
                onPress={() => onPressAddSocialMediaLinks()}
              />
              <SocialMediaWrapView>
                <FlatList
                  numColumns={6}
                  data={socialMediaArray}
                  renderItem={renderSocialMediaList}
                  keyExtractor={(item, index) => index.toString()}
                />
              </SocialMediaWrapView>
            </CommonView>
          )} */}

          {/* Contact us */}
          <CommonButton onPress={onPressContactUsForExpand}>
            <ListCommonView>
              <ContactUsView>
                <ListCommonText>
                  Contact us for a certified background check today at
                </ListCommonText>
              </ContactUsView>
              <DropDownImage source={Images.dropDownIcon} />
              {/* {isContactUsArrow ? (
                <DropDownImage source={Images.dropDownIcon} />
              ) : (
                <DropDownImage source={Images.upArrow} />
              )} */}
            </ListCommonView>
          </CommonButton>

          {/* Archive */}
          <CommonButton onPress={onPressArchiveExpand}>
            <ListCommonView>
              <ListCommonText>Archive</ListCommonText>
              <DropDownImage source={Images.dropDownIcon} />

              {/* {isArchiveArrow ? (
                <DropDownImage source={Images.dropDownIcon} />
              ) : (
                <DropDownImage source={Images.upArrow} />
              )} */}
            </ListCommonView>
          </CommonButton>
        </ListView>
      </ScrollView>

      {/* BottomView */}
      <LogoutButton onPress={onPressLogout}>
        <CommonImage source={Images.door} />
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </ContainerView>
  );
}
