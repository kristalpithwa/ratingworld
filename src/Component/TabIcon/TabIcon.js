/* eslint-disable react/display-name */
import React from 'react';
import {Image, View} from 'react-native';

// Lib
import Icon from 'react-native-vector-icons/FontAwesome';

// Mics Constants
import {styles} from './TabIconStyle';
import {Colors, Images, Responsive, ScreenName} from '../../Theme';

export const TabIcon =
  title =>
  ({focused}) => {
    let iconName = '';
    switch (title) {
      case ScreenName.MovieScreen:
        iconName = Images.movie;
        break;
      case ScreenName.WebSeriesScreen:
        iconName = Images.webSeries;
        break;
      case ScreenName.TvScreen:
        iconName = Images.tv;
        break;
      case ScreenName.DashboardScreen:
        iconName = Images.dashboard;
        break;
    }
    return (
      <View style={styles.tabContainer}>
        <Image
          source={iconName}
          style={{
            width: Responsive.widthPercentageToDP('10%'),
            height: Responsive.heightPercentageToDP('3%'),
            // tintColor: focused && Colors.red,
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

export default {TabIcon};
