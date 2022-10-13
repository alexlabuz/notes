// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export function getFirebaseApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyBaWtigrvIHwFTsgQL_P0N3KqHiaJQUQqg",
    authDomain: "ichat-allavi.firebaseapp.com",
    projectId: "ichat-allavi",
    storageBucket: "ichat-allavi.appspot.com",
    messagingSenderId: "119219319066",
    appId: "1:119219319066:web:0dc57289c0afac24713ca3",
    measurementId: "G-82SHZ8ZNGS"
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
}
