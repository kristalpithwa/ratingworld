import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Axios from 'axios';
import Loader from '../../../Component/Loader';
import {Images, Constant} from '../../../Theme';
import Carousel from 'react-native-snap-carousel';
import HorizontalFlatList from '../../../Component/HorizontalFlatList/HorizontalFlatList';

import {
  CommonFlatList,
  CommonText,
  ContainerView,
  MovieTrailerView,
  UpcomingMoviesImage,
  UpcomingMovieText,
  VideoView,
  CommonView,
} from './MoviesScreenStyle';

export default function MoviesScreen(props) {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [topRatedMovieList, setTopRatedMovieList] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
    getPopularMovies();
    getTopRatedMovie();
  }, []);

  const data = [
    {
      photo: Images.movie1,
    },
    {
      photo: Images.movie1,
    },
    {
      photo: Images.movie1,
    },
    {
      photo: Images.movie1,
    },
  ];

  const getUpcomingMovies = () => {
    setIsLoading(true);
    const path =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=69ebe38e113211a2a7943be581e7898b&page=1&region=us';
    Axios.get(path)
      .then(response => {
        setUpcomingMovies(response.data.results);
        setRefresh(!refresh);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log('upcomingMovies Error =>>', error);
      });
  };

  const getPopularMovies = () => {
    setIsLoading(true);
    const path =
      Constant.FixedAPI +
      Constant.EndPoints.popular +
      Constant.key +
      'page=' +
      page;
    Axios.get(path)
      .then(response => {
        setPopularMoviesList(response.data.results);
        setIsLoading(false);
        setRefresh(!refresh);
        // console.log('getPopularMovies =>>', response.data.results);
      })
      .catch(error => {
        console.log('getPopularMovies Error =>>', error);
        setIsLoading(false);
      });
  };

  const getTopRatedMovie = () => {
    setIsLoading(true);
    const path =
      Constant.FixedAPI +
      Constant.EndPoints.topRated +
      Constant.key +
      'page=' +
      page;
    Axios.get(path)
      .then(response => {
        setTopRatedMovieList(response.data.results);
        setRefresh(!refresh);
        setIsLoading(false);
        // console.log('topRatedMovieList =>>', response.data.results);
      })
      .catch(error => {
        setIsLoading(false);
        console.log('topRatedMovieList Error =>>', error);
      });
  };

  const renderMovieTrailerList = ({item}) => {
    return (
      <VideoView>
        <UpcomingMoviesImage source={item.photo} />
      </VideoView>
    );
  };

  const renderUpcomingMoviesList = ({item, index}) => {
    return (
      <CommonView>
        <HorizontalFlatList item={item} />
      </CommonView>
    );
  };

  const renderPopularMovies = ({item, index}) => {
    return (
      <CommonView>
        <HorizontalFlatList item={item} />
      </CommonView>
    );
  };

  const renderTopRatedMovie = ({item, index}) => {
    return (
      <CommonView>
        <HorizontalFlatList item={item} />
      </CommonView>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Loader isLoading={isLoading} />
      <ContainerView>
        <UpcomingMovieText>Upcoming Movies Trailer</UpcomingMovieText>
        <MovieTrailerView>
          <Carousel
            loop={10}
            data={data}
            autoplay={true}
            itemWidth={300}
            sliderWidth={300}
            layout={'default'}
            renderItem={renderMovieTrailerList}
            // onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </MovieTrailerView>
        <CommonText>Upcoming Movies</CommonText>
        <CommonFlatList
          data={upcomingMovies}
          renderItem={renderUpcomingMoviesList}
          extraData={refresh}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
        <CommonText>Made For You</CommonText>
        <CommonFlatList
          data={popularMoviesList}
          horizontal={true}
          extraData={refresh}
          renderItem={renderPopularMovies}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
        <CommonText>Top Rated Movie</CommonText>
        <CommonFlatList
          data={topRatedMovieList}
          horizontal={true}
          extraData={refresh}
          renderItem={renderTopRatedMovie}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </ContainerView>
    </ScrollView>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
});
