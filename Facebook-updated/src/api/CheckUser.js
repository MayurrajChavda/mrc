import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../myFirebase/firebase";

function checkUser(){
    return onAuthStateChanged(auth, user => user);
}
export {checkUser};