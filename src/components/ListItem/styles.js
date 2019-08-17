import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    height: 44,
  },
  infoContainer: {
    flex: 1,
  },
  text: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 15,
  },
  originText: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 10,
  },
  arrowContainer: {
      width: 50,
      justifyContent: 'center',
      alignItems: 'flex-end'
  },
  arrow: {
      color: colors.accentColor
  },
  separator: {
      height: 0.3,
      backgroundColor: colors.accentColor,
      marginTop: 5,
      marginBottom: 8,
  }
});
