// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyBXWufCQNrRnDgdtVYBmJctu8KKrVSHf2M",
  authDomain: "geniusshop-96d7c.firebaseapp.com",
  projectId: "geniusshop-96d7c",
  storageBucket: "geniusshop-96d7c.appspot.com",
  messagingSenderId: "1052437519479",
  appId: "1:1052437519479:web:0d5d82bd453c1bff69fa72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
