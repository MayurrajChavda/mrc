import React, { useRef, useState } from 'react'
import signin from '../api/signin';
import login from '../api/login';
function Home() {
    const login_email = useRef(null);
    const login_pass = useRef(null);

    
    const fname = useRef(null);
    const lname = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const bdate = useRef(null);
    const [gender,setGender] = useState(undefined);

    const signinUser = () => {
        const userObj = {
            firstname:fname.current.value,
            lastname:lname.current.value,
            email:email.current.value,
            password:pass.current.value,
            birthdate:bdate.current.value,
            gender:gender
        }
        signin(userObj);
    }

    const loginUser = () => {
        const userObj = {
            email:login_email.current.value,
            password:login_pass.current.value,
        }
        login(userObj);
    }
    return (
    <>
    <div className='bg-primary'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='fs-1 fw-bold text-white'>facebook</p>
                <div>
                    <input ref={login_email} type='email' className='me-2'/>
                    <input ref={login_pass} type='password' className='me-2'/>
                    <button onClick={loginUser} className='btn btn-sm btn-success'>login</button>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <p className='fs-1 fw-bold mt-5'>Signup</p>
                <div className='row'>
                    <div className='col-6'>
                        <input ref={fname} type='text' placeholder='first name' className='form-control'/>
                    </div>
                    <div className='col-6'>
                        <input ref={lname} type='text' placeholder='last name' className='form-control'/>
                    </div>
                </div>
                <input ref={email} type='text' placeholder='Email or Phonenumber' className='form-control mt-3'/>
                <input ref={pass} type='password' placeholder='Password' className='form-control mt-3'/>
                <label className='form-lable mt-3'>Birthdate</label>
                <input ref={bdate} type='date' className='form-control'/>
                <label className='form-lable mt-3'>Gender</label>
                <div>
                    <input onChange={(e)=>{setGender(e.target.value)}} type='radio' name="gender" value="male"/>Male
                    <input onChange={(e)=>{setGender(e.target.value)}} type='radio' name="gender" value="female" className='ms-2'/>Female
                </div>
                <button
                onClick={signinUser}
                className='btn btn-success mt-3'>Signin</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home