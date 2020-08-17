import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPBladD2CinXMLY-KFIaFsN7AyS9k5OAA",
  authDomain: "clone-57031.firebaseapp.com",
  databaseURL: "https://clone-57031.firebaseio.com",
  projectId: "clone-57031",
  storageBucket: "clone-57031.appspot.com",
  messagingSenderId: "729052617518",
  appId: "1:729052617518:web:79b897af6c52fd414d38bf",
  measurementId: "G-VED729JLT9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
