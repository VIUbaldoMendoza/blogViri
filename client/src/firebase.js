// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55SNFu7bFXOSzQYITJSXMzNJ_xesrBAY",
  authDomain: "blogviri.firebaseapp.com",
  projectId: "blogviri",
  storageBucket: "blogviri.appspot.com",
  messagingSenderId: "878533580821",
  appId: "1:878533580821:web:d7c7d79df1c7bc374f161c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };