import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCioONTSI1Wingy5dG2RK9axsNrTZ9XjAo",
    authDomain: "e-ride-app-a8462.firebaseapp.com",
    projectId: "e-ride-app-a8462",
    storageBucket: "e-ride-app-a8462.appspot.com",
    messagingSenderId: "788937761927",
    appId: "1:788937761927:web:87e109a9ff873105d18422"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
