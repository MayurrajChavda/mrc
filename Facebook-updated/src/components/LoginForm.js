import React, { useRef } from 'react'
import login from '../api/login';
function LoginForm() {
    const login_email = useRef(null);
    const login_pass = useRef(null);

    const loginUser = () => {
        const userObj = {
            email:login_email.current.value,
            password:login_pass.current.value,
        }
        login(userObj);
    }
  return (
    <>
        <input ref={login_email} type='email' className='me-2'/>
        <input ref={login_pass} type='password' className='me-2'/>
        <button onClick={loginUser} className='btn btn-sm btn-success'>login</button>   
    </>
  )
}

export default LoginForm