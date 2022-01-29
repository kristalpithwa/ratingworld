import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Axios from 'axios';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {Images, ScreenName, Colors, Responsive} from '../../../Theme';

import {
  ContainerView,
  MovieDetailsView,
  MovieNameText,
  MoviesImage,
  ReleaseText,
  MovieDetailsText,
  CastFlatList,
  CastImage,
  CastName,
  CastText,
  DetailsView,
  BackButtonImage,
  HeaderView,
  CommonButton,
  RatingBox,
  PopularityView,
  PopularityText,
  RatingText,
  GradientView,
} from './MoviesDetailsStyle';
import Loader from '../../../Component/Loader';

export default function MoviesDetailsScreen(props) {
  const [details, setDetails] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesDetails, setMoviesDetails] = useState(props.moviesDetails);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    setIsLoading(true);
    const path = `https://api.themoviedb.org/3/movie/${props.moviesDetails.id}/credits?api_key=69ebe38e113211a2a7943be581e7898b&language=en-US`;
    Axios.get(path)
      .then(response => {
        setDetails(response.data.cast);
        setRefresh(!refresh);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log('upcomingMovies Error =>>', error);
      });
  };

  const castRenderItem = ({item}) => {
    return (
      <CommonButton onPress={() => onPressCharacter(item)}>
        <CastImage
          source={{
            uri: Images.url + item.profile_path,
          }}
        />
        <CastName>{item.original_name}</CastName>
        <CastName isMargin={true}>In Movie : {item.character}</CastName>
      </CommonButton>
    );
  };

  const onPressBackButton = () => {
    Actions.pop();
  };

  const onPressCharacter = item => {
    Actions[ScreenName.CastDetailsScreen]({characterDetails: item});
  };

  return (
    <ContainerView>
      <Loader isLoading={isLoading} />
      <MoviesImage
        resizeMode={'stretch'}
        source={{
          uri: Images.url + moviesDetails.poster_path,
        }}>
        <GradientView>
          <LinearGradient
            style={{flex: 1}}
            colors={[Colors.transparent, Colors.transparent, Colors.black1]}
          />
        </GradientView>
      </MoviesImage>
      <HeaderView>
        <CommonButton onPress={onPressBackButton}>
          <BackButtonImage source={Images.leftArrow} />
        </CommonButton>
      </HeaderView>
      <ScrollView style={{marginBottom: Responsive.heightPercentageToDP(3)}}>
        <MovieDetailsView>
          <MovieNameText>{moviesDetails.original_title}</MovieNameText>
          <DetailsView>
            <ReleaseText>{moviesDetails.release_date}</ReleaseText>
            <ReleaseText>Action</ReleaseText>
            <ReleaseText>Science Fiction</ReleaseText>
            <ReleaseText>Adventure</ReleaseText>
          </DetailsView>

          <MovieDetailsText>{moviesDetails.overview}</MovieDetailsText>

          <RatingBox>
            <PopularityView>
              <PopularityText>Rating</PopularityText>
              <RatingText>{moviesDetails.vote_average}/10</RatingText>
            </PopularityView>
            <PopularityView>
              <PopularityText>Popularity</PopularityText>
              <RatingText>{moviesDetails.popularity}</RatingText>
            </PopularityView>
          </RatingBox>

          <CastText>Movie Cast</CastText>
          <CastFlatList
            data={details}
            numColumns={2}
            extraData={refresh}
            nestedScrollEnabled={true}
            renderItem={castRenderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </MovieDetailsView>
      </ScrollView>
    </ContainerView>
  );
}
