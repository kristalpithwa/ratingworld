/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
// Lib
import PropTypes from 'prop-types';
import {Colors} from '../Theme';

export default function Loader(props) {
  const [loader, setLoader] = useState(props.isLoading);

  useEffect(() => {
    setLoader(props.isLoading);
  }, [props]);

  return (
    <Modal visible={loader} transparent>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: Colors.shadowColor,
        }}>
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          size="large"
          color={Colors.purple36}
        />
      </View>
    </Modal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  isLoading: false,
};
