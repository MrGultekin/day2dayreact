// import firebase from "firebase/compat";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDh32bYpVSOSbIGdeuEri2gGLkbMnGrwv8",
    authDomain: "as-like.firebaseapp.com",
    projectId: "as-like",
    storageBucket: "as-like.appspot.com",
    messagingSenderId: "369601820900",
    appId: "1:369601820900:web:d6a8cfc1aaf70ff8ca14f1",
    measurementId: "G-XB1XPV196F"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
