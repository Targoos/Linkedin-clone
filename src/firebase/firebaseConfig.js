import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeDrfwEOyjYD-E76xrU0FSxOI1ilwY89s",
  authDomain: "linkedin-clone-515ef.firebaseapp.com",
  projectId: "linkedin-clone-515ef",
  storageBucket: "linkedin-clone-515ef.appspot.com",
  messagingSenderId: "239195099065",
  appId: "1:239195099065:web:2f224322344ec76fa13068",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
