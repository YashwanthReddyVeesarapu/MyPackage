// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrh0gfeGN7xJA9W3BJpbDYi6hd2kgT4jA",
  authDomain: "my-package-solution.firebaseapp.com",
  projectId: "my-package-solution",
  storageBucket: "my-package-solution.appspot.com",
  messagingSenderId: "564439130795",
  appId: "1:564439130795:web:2f74639f5fb3bf8c710dee",
  measurementId: "G-CK1Y5RH620",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
