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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	console.log(snapShot);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user.", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;