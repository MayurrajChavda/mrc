import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../myFirebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";

function login(userData){
    signInWithEmailAndPassword(auth,userData.email,userData.password)
    .then((user)=>{
        const db = getDatabase();
        onValue(ref(db, 'facebookuser/' + user.user.uid), (snapshot)=>{
            console.log(snapshot.val());
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default login;