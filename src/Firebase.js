import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSX0Zm6njSki1phYyn0Yai0DkIxS1C99Q",
  authDomain: "clone-9c640.firebaseapp.com",
  projectId: "clone-9c640",
  storageBucket: "clone-9c640.appspot.com",
  messagingSenderId: "68874792171",
  appId: "1:68874792171:web:d4d05366fe4fb37f98a2ae",
  measurementId: "G-TWEGYSE8FG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
