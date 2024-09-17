import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiJHPM7HoYoYa3_g1CCB6OjEFrHozT-qE",
    authDomain: "typing-test-59934.firebaseapp.com",
    projectId: "typing-test-59934",
    storageBucket: "typing-test-59934.appspot.com",
    messagingSenderId: "861536238543",
    appId: "1:861536238543:web:65f8f072a750e1bd3430ba",
    measurementId: "G-TXEW87GDPC"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig) 
const auth = firebase.auth()
const db = firebaseApp.firestore()


export {auth, db}


