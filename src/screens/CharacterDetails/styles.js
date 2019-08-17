import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create ({
  container: {
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    padding: 30
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.accentColor,
    marginBottom: 10
  },
  contentContainer: {
    paddingTop: 10,
  },
  propertyText: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.white,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.accentColor,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  spinner: {
    color: colors.accentColor,
  },
});
