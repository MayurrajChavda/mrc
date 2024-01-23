import React, { useEffect, useState } from 'react'
import { auth } from '../myFirebase/firebase';
import { onAuthStateChanged , signOut , signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

function Index() {
  const [user,setUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
      }
    });
  },[]);
  const logoutUser = () => {
    signOut(auth)
    .then(()=>{setUser(null)})
  }
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  return (
    <div style={{width:'500px',margin:'100px auto'}}>
        {
          !user?<>
            <h1>Create account</h1>
            <a href='signup'>Signup</a>
            <h3>Already have accoutn ?</h3>
            <a href='login'>Login</a><br/>
            <button onClick={signinWithGoogle}>Signin with Google</button>
          </>:<button className='btn btn-success'
          onClick={logoutUser}
          >Logout</button>
        }
    </div>
  )
}

export default Index