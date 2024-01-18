import React, { useRef, useState } from 'react'
import { auth } from '../myFirebase/firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Sample() {
    const navigate = useNavigate();

    const email = useRef(null);
    const pass = useRef(null);

    const email_L = useRef(null);
    const pass_L = useRef(null);

    let [error,setError] = useState(false);
    let [errorMsg,setErrorMsg] = useState("");
    const signUpUser = () => {
        createUserWithEmailAndPassword(auth,email.current.value,pass.current.value)
        .then((userCredential)=>{console.log("Success",userCredential)})
        .catch((err)=>{
            if(err.code=="auth/weak-password"){
                setErrorMsg(err.message);
                setError(true);
            }else if(err.code == "auth/email-already-in-use"){
                setErrorMsg(err.message);
                setError(true);
            }
        });
    }

    const loginUser = () => {
        signInWithEmailAndPassword(auth,email_L.current.value,pass_L.current.value)
        .then((userCredential)=>{
            navigate('/');
        })
        .catch((err)=>{
            if(err.code=="auth/invalid-credential"){
                setErrorMsg(err.message);
                setError(true);
            }
        });
    }

    return (
    <div className='container'>
        {
            error?    <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{errorMsg}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>:""
    
        }
        <h1>Signup new User</h1>
        <div className='row mt-5'>
            <div className='col-6 m-auto'>
                <label className='form-label'>Enter email</label>
                <input ref={email} type='email' className='form-control'/>
                <label className='form-label'>Enter password</label>
                <input ref={pass} type='password' className='form-control'/>
                <button
                onClick={signUpUser}
                className='mt-3 btn btn-primary'>Signup</button>
            </div>
        </div>
        <h1 className='mt-5'>Login user</h1>
        <div className='row mt-5'>
            <div className='col-6 m-auto'>
                <label className='form-label'>Enter email</label>
                <input ref={email_L} type='email' className='form-control'/>
                <label className='form-label'>Enter password</label>
                <input ref={pass_L} type='password' className='form-control'/>
                <button
                onClick={loginUser}
                className='mt-3 btn btn-primary'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Sample