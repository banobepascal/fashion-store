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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
