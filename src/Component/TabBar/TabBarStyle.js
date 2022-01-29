import {StyleSheet} from 'react-native'
import {Colors, Responsive} from '../../Theme'

export const styles = StyleSheet.create({
  centerView: {alignSelf: 'center'},
  container: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    padding: Responsive.widthPercentageToDP('3%'),
    width: '100%',
  },
})

export default {styles}
