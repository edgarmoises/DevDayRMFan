import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
    toolbar: {
        backgroundColor: colors.secondaryColor,
        color: colors.white  
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: colors.primaryColor
    },
    input: {
        marginBottom: 20,
        borderColor: colors.accentColor,
        backgroundColor: colors.white
    },
    button: {
        backgroundColor: colors.accentColor
    },
    buttonText: {
        flex: 1,
        textAlign: 'center'
    },
    spinner: {
        marginTop: 15,
        color: colors.accentColor
    }
});