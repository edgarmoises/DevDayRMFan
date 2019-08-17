import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        paddingRight: 50,
        paddingLeft: 50
    },
    button: {
        backgroundColor: colors.accentColor
    },
    buttonText: {
        color: colors.white
    }
});