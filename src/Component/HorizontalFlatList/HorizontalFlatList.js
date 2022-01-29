import React, {useState} from 'react';
import {Images, ScreenName} from '../../Theme';
import {Actions} from 'react-native-router-flux';

import {
  ContainerView,
  CategoryText,
  MovieImage,
  MovieButton,
} from './HorizontalFlatListStyle';

export default function HorizontalFlatList(props) {
  const [moviesDetails, setMoviesDetails] = useState(props.item);

  const onPressMovie = moviesData => {
    Actions[ScreenName.MovieDetailsScreen]({moviesDetails: moviesData});
  };

  //render Method
  return (
    <ContainerView>
      <MovieButton onPress={() => onPressMovie(moviesDetails)}>
        <MovieImage
          resizeMode={'cover'}
          source={{
            uri: Images.url + moviesDetails.poster_path,
          }}
        />
        <CategoryText>{moviesDetails.title}</CategoryText>
      </MovieButton>
    </ContainerView>
  );
}
