import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
//  import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Zjumoi3rsFj-D1xVInWuHaeXd16dxNI",
  authDomain: "efuniture-776a3.firebaseapp.com",
  projectId: "efuniture-776a3",
  storageBucket: "efuniture-776a3.appspot.com",
  messagingSenderId: "1074604385912",
  appId: "1:1074604385912:web:1b6b8f983066763a802f8d",
  measurementId: "G-BZRSKNSSWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth();
export { storage, auth };
