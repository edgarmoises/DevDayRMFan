import firebase from 'react-native-firebase';

let firebaseApp = {
    apiKey: "AIzaSyDUZ_bjrkjUqjdBy4PXXM-xEP6k4rZ-3Gs",
    projectId: "864925542094"
};
firebase.initializeApp(firebaseApp);

const auth = firebase.auth();
const db = firebase.firestore();
const messaging = firebase.messaging();

export { auth, db, messaging };