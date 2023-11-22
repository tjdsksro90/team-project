import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0aCaK1nNNc5Vlsb2L1X0B0DfDy1Vf7T0",
  authDomain: "melodic-scarab-405810.firebaseapp.com",
  projectId: "melodic-scarab-405810",
  storageBucket: "melodic-scarab-405810.appspot.com",
  messagingSenderId: "804113997694",
  appId: "1:804113997694:web:df739eed5ca0fae94d1d2f",
  measurementId: "G-0MCQDMJNZ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };