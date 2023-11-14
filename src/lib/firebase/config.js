import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBrh0gfeGN7xJA9W3BJpbDYi6hd2kgT4jA",
  authDomain: "my-package-solution.firebaseapp.com",
  projectId: "my-package-solution",
  storageBucket: "my-package-solution.appspot.com",
  messagingSenderId: "564439130795",
  appId: "1:564439130795:web:2f74639f5fb3bf8c710dee",
  measurementId: "G-CK1Y5RH620",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
