import React, {useEffect, useState} from 'react'
import {View, Text, FlatList} from 'react-native'
import PropTypes from 'prop-types'
import {Colors, Fonts, Responsive} from '../../Theme'
import {styles} from './TabBarStyle'

export default function TabBar(props) {
  const [data, setData] = useState(props.source)
  const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex)
  let ref = null

  useEffect(() => {
    if (selectedIndex !== props.selectedIndex && data.length >= selectedIndex) {
      setSelectedIndex(props.selectedIndex)
      //   ref.scrollToIndex({
      //     animated: true,
      //     index: props.selectedIndex,
      //     viewOffset: 0,
      //     viewPosition: 1,
      //   })
    } else if (data !== props.source) {
      setData(props.source)
    }
  }, [props])

  function onPressTab(item) {
    setSelectedIndex(item.id)
    props.onSelectedItem(item)
  }
  function renderItemTab({item}) {
    return (
      <View
        style={{
          paddingHorizontal: Responsive.widthPercentageToDP('3%'),
          //   paddingVertical: Responsive.widthPercentageToDP('1%'),
          marginHorizontal: Responsive.widthPercentageToDP('2%'),
          justifyContent: item.id === selectedIndex ? 'flex-start' : 'flex-end',
          //   borderRadius: Responsive.widthPercentageToDP('2%'),
          //   backgroundColor:
          //     item.id === selectedIndex ? Colors.DarkYellowBackground : Colors.transparent,
        }}>
        <Text
          onPress={() => onPressTab(item)}
          style={
            item.id === selectedIndex
              ? [Fonts.style.title]
              : [Fonts.style.mediumTextStyleBold, {color: Colors.white}]
          }>
          {item.consolename}
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        ref={(flatRef) => (ref = flatRef)}
        data={data}
        extraData={useState}
        renderItem={renderItemTab}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.centerView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}

TabBar.propTypes = {
  source: PropTypes.array,
  selectedIndex: PropTypes.number,
  onSelectedItem: PropTypes.func,
}

TabBar.defaultProps = {
  source: [],
  selectedIndex: 1,
  onSelectedItem: () => {},
}
