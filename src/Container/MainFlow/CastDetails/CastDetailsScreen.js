import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {ScrollView} from 'react-native';
import Loader from '../../../Component/Loader';
import {Actions} from 'react-native-router-flux';
import {Images, Responsive} from '../../../Theme';

import {
  BackButtonImage,
  BiographyText,
  BirthdayText,
  CharacterImage,
  CharacterNameView,
  CharacterText,
  CharacterView,
  CommonButton,
  ContainerView,
  HeaderView,
  NativePlace,
  NickNameText,
  PopularityText,
} from './CastDetailsStyle';

export default function CastDetailsScreen(props) {
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    getCastDetails();
  }, []);

  const getCastDetails = () => {
    setIsLoading(true);
    const path = `https://api.themoviedb.org/3/person/${props.characterDetails.id}?api_key=69ebe38e113211a2a7943be581e7898b`;
    Axios.get(path)
      .then(response => {
        setCastDetails(response.data);
        setRefresh(!refresh);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log('upcomingMovies Error =>>', error);
      });
  };

  const onPressBackButton = () => {
    Actions.pop();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginBottom: Responsive.heightPercentageToDP(2)}}>
      <ContainerView>
        <Loader isLoading={isLoading} />
        <HeaderView>
          <CommonButton onPress={onPressBackButton}>
            <BackButtonImage source={Images.leftArrow} />
          </CommonButton>
        </HeaderView>
        <CharacterView>
          <CharacterImage
            source={{uri: Images.url + castDetails.profile_path}}
          />
          <CharacterNameView>
            <CharacterText>{castDetails.name}</CharacterText>
            <BirthdayText>{castDetails.birthday}</BirthdayText>
          </CharacterNameView>
        </CharacterView>
        <NativePlace>Native Place: {castDetails.place_of_birth}</NativePlace>
        {castDetails.length > 0 && (
          <NickNameText>
            Nick Name:
            {castDetails.also_known_as.map(item => {
              return item;
            })}
          </NickNameText>
        )}
        <PopularityText>Popularity: {castDetails.popularity}</PopularityText>

        <BiographyText>{castDetails.biography}</BiographyText>
      </ContainerView>
    </ScrollView>
  );
}
