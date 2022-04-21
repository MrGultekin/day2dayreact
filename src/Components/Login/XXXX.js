// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyB6h7cQ9hiH2Xhdw7ibw7TmPdCmAoa6y5g",
    authDomain: "simple-4a1f0.firebaseapp.com",
    projectId: "simple-4a1f0",
    storageBucket: "simple-4a1f0.appspot.com",
    messagingSenderId: "306717063555",
    appId: "1:306717063555:web:3a95f2609f4f56dd8c1eb6",
    measurementId: "G-6YLCMNDP0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };



// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
//
// const firebaseConfig = {
//     apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU",
//     authDomain: "eshop-c2e0a.firebaseapp.com",
//     projectId: "eshop-c2e0a",
//     storageBucket: "eshop-c2e0a.appspot.com",
//     messagingSenderId: "941031253944",
//     appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d",
//     measurementId: "G-5BDLQRB305"
// };
//
// const firebaseApp = firebase.initializeApp(firebaseConfig);
//
// const db = firebaseApp.firestore();
//
// const auth = firebase.auth();
//
// export { db, auth };