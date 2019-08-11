import { AsyncStorage } from 'react-native';

const _userKey = '@rmfanapp:user';

export const saveUser = async(uid) => {
    try {
        await AsyncStorage.setItem(_userKey, uid);
    } catch(error) {
        return undefined;
    }
}

export const getUser = async() => {
    return new Promise(async(resolve) => {
        try {
            const user = await AsyncStorage.getItem(_userKey);
            resolve(user);
        }catch(error) {
            resolve(undefined);
        }
    });
}