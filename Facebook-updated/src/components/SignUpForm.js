import React, { useRef, useState } from 'react'
import signin from '../api/signin';
function SignUpForm() {
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

  return (
    <div>
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
  )
}

export default SignUpForm