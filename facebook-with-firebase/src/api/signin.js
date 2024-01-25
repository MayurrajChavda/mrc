import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../myFirebase/firebase';

function signin(userData){
    createUserWithEmailAndPassword(auth,userData.email,userData.password)
    .then((user)=>{
        const db = getDatabase();        
        set(ref(db, 'facebookuser/' + user.user.uid), userData);
    })
    .catch(()=>{
        alert("Some error");
    })
}

export default signin;