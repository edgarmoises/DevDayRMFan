import { AsyncStorage } from 'react-native';
import {db} from './FirebaseClient';

const _userKey = '@rmfanapp:user';
const _firebaseTokenCollection = 'messaging_tokens';

export const saveUser = async(uid) => {
    try {
        await AsyncStorage.setItem(_userKey, uid);
    } catch(error) {
        return undefined;
    }
}

export const getUser = () => {
    return new Promise(async(resolve) => {
        try {
            const user = await AsyncStorage.getItem(_userKey);
            resolve(user);
        }catch(error) {
            resolve(undefined);
        }
    });
}

export const saveToken = (uid, token) => {
    return new Promise(async(resolve) => {
        try {
            console.log(token);
            const actualToken = await db.collection(_firebaseTokenCollection).where('uid', '==', uid).get();
            if (actualToken.empty) await db.collection(_firebaseTokenCollection).add({ uid, token });
        } catch(error){
            console.log(error.message);
        } finally {
            resolve();
        }
    })
}

export const logoutUser = () => {
    return new Promise(async resolve => {
        try {
            await AsyncStorage.removeItem(_userKey);
        } catch(error) {
            console.log(error);
        } finally {
            resolve();
        }
    })
}