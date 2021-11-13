// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgeJjIuwGzYCt3UHuYSXIDBBD_upv7RU",
  authDomain: "uberclone-saif.firebaseapp.com",
  projectId: "uberclone-saif",
  storageBucket: "uberclone-saif.appspot.com",
  messagingSenderId: "979200701517",
  appId: "1:979200701517:web:d511e71cea5582a4bf5804",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
