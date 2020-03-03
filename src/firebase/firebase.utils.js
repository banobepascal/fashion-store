import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1X8M-VSRueSCmyBR51D1d42VnLUkhHg4",
  authDomain: "fashion-store-db.firebaseapp.com",
  databaseURL: "https://fashion-store-db.firebaseio.com",
  projectId: "fashion-store-db",
  storageBucket: "fashion-store-db.appspot.com",
  messagingSenderId: "403113402991",
  appId: "1:403113402991:web:a23fb2ae0edb3ff662239a",
  measurementId: "G-0VV6QDXWJH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
