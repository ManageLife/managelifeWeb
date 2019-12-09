// USING FIREBASE WITH EXPO
// https://docs.expo.io/versions/v34.0.0/guides/using-firebase/
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appID: process.env.REACT_APP_FIREBASE_APP_ID,
}

try {
   firebase.initializeApp(firebaseConfig)
   firebase.firestore()
   console.log('Firebase Initialized')
} catch (err) {
   console.error(err)
}

// React-redux-firebase config for rrfProps -> redux/store.js
const rrfConfig = {
   userProfile: 'users',
   useFirestoreForProfile: true,
   enableLogging: false,
}

export { firebaseConfig, firebase, rrfConfig }
