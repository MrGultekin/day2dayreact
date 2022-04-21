// import firebase from "firebase/compat";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6h7cQ9hiH2Xhdw7ibw7TmPdCmAoa6y5g",
    authDomain: "simple-4a1f0.firebaseapp.com",
    projectId: "simple-4a1f0",
    storageBucket: "simple-4a1f0.appspot.com",
    messagingSenderId: "306717063555",
    appId: "1:306717063555:web:3a95f2609f4f56dd8c1eb6",
    measurementId: "G-6YLCMNDP0P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
