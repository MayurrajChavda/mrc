import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDlKAdsehR50T_DTCvTskAFDt24wQjoJNY",
  authDomain: "reactjs-9dec2.firebaseapp.com",
  projectId: "reactjs-9dec2",
  storageBucket: "reactjs-9dec2.appspot.com",
  messagingSenderId: "990466319816",
  appId: "1:990466319816:web:9d446df3cf02ff36464cfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
