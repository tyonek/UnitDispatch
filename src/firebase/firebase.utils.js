import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

//config for firebase 
const Config = {
	apiKey: 'AIzaSyDMcZFN26KHDv8Zc4MEx8XLl-8DwGVD1CY',
	authDomain: 'unitdispatch-7f842.firebaseapp.com',
	databaseURL: 'https://unitdispatch-7f842.firebaseio.com',
	projectId: 'unitdispatch-7f842',
	storageBucket: 'unitdispatch-7f842.appspot.com',
	messagingSenderId: '459496577707',
	appId: '1:459496577707:web:e37a74bf2ca6c201c175ee',
	measurementId: 'G-HPDH6HB132'
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if the users has not login yet return from doing anything
    if (!userAuth) return;   
    //gets the ref for that specific user id
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
    //gets the snapshot to determine whether or not there is data in that ref
	const snapShot = await userRef.get();
    //If there is nothing, if exists is false create/save the user info
	if (!snapShot.exists) {
		const { displayName, email, photoURL,phoneNumber } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
                createdAt,
                photoURL,
                phoneNumber,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error);
		}
    }
    
    return userRef
};


//init firebase with the config 
firebase.initializeApp(Config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
