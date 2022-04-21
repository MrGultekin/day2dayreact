// import firebase from "firebase/compat";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_iooqJUBhbspnmvSMeDAaL2Af2Xocoto",
    authDomain: "as-89ffb.firebaseapp.com",
    projectId: "as-89ffb",
    storageBucket: "as-89ffb.appspot.com",
    messagingSenderId: "1086648954539",
    appId: "1:1086648954539:web:918d925295373a4c4ed1ee",
    measurementId: "G-8G91LBN70J"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
