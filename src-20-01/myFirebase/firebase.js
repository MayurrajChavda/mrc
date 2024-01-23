import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX1_n9vUAR-luzLc1k0xOeZ-_wtrgW8AE",
  authDomain: "fir-5fec1.firebaseapp.com",
  projectId: "fir-5fec1",
  storageBucket: "fir-5fec1.appspot.com",
  messagingSenderId: "534613767186",
  appId: "1:534613767186:web:f76175c3e2e512f91814cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};