import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAWMno_FHJzp-UNdPqt7_fsf1VlCGPA2Zg",
    authDomain: "wooden-churner-db.firebaseapp.com",
    databaseURL: "https://wooden-churner-db.firebaseio.com",
    projectId: "wooden-churner-db",
    storageBucket: "wooden-churner-db.appspot.com",
    messagingSenderId: "260340445481",
    appId: "1:260340445481:web:d46b9a07dea2c5fd2f8738",
    measurementId: "G-DJBRGB69HN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;