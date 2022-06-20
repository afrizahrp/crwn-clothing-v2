import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInwithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3HpFOKXL3klWppYjfdlncOCVsPZbEwpQ",
  authDomain: "crwn-clothing-db-7f3a8.firebaseapp.com",
  projectId: "crwn-clothing-db-7f3a8",
  storageBucket: "crwn-clothing-db-7f3a8.appspot.com",
  messagingSenderId: "399530714183",
  appId: "1:399530714183:web:019fddb4dc0fee807fbd62",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
