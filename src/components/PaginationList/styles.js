import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create ({
  container: {
    backgroundColor: colors.primaryColor,
  },
  item: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    height: 44,
  },
  itemText: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 15,
  },
});
