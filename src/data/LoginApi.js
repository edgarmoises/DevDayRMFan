import {auth} from './FirebaseClient';

export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(email, password)
        .then(data => resolve(data.user))
        .catch(() => reject());
    });
}

export const signupUser = (email, password) => {
    return new Promise(resolve => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(data => resolve(data.user));
    });
}