import React, { useEffect, useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../myFirebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";

function Home() {
    const [profile,setProfile] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                const db = getDatabase();
                const starCountRef = ref(db, 'facebookuser/' + user.uid);
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val();
                    setProfile(data);
                });
            }
       }); 
    },[])

    const logoutUser = () => {
        signOut(auth)
        .then(()=>{setProfile(null)})
        .catch(()=>{alert("Sign out failed")});
    }
    return (
    <>
    <div className='bg-primary'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='fs-1 fw-bold text-white'>facebook</p>
                <div>
                    {
                        profile?
                        <><i class="fa-solid fa-user"></i></>:
                        <LoginForm/>
                    }
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                {
                    profile?
                    <div className='mt-5'>
                        <h2>{profile.firstname} {profile.lastname}</h2>
                        <button 
                        onClick={logoutUser}
                        className='btn btn-sm btn-success mt-3'>Logout</button>
                    </div>:
                    <SignUpForm/>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Home