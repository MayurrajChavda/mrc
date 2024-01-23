import React, { useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../myFirebase/firebase';
function SignUp() {
  const email = useRef(null);
  const pass = useRef(null);
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth,email.current.value,pass.current.value)
    .then((user)=>{console.log(user)})
    .catch((err)=>{console.log(err)});
  }

  return (
    <div className='row'>
        <div className='col-6 m-auto'>
            <div>
                <h1>Create account</h1>
                <label>Enter email</label>
                <input ref={email} type='email' className='form-control'/>
                <label>Enter password</label>
                <input ref={pass} type='password' className='form-control'/>
                <button 
                onClick={signUpUser}
                className='btn btn-success'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp