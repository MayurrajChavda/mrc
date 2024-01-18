import React, { useContext, useEffect, useState } from 'react'
import '../pages/header.css'
import { MyContext } from '../App';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../myFirebase/firebase';
import { useNavigate } from 'react-router-dom';



function Header() {
  const navigate = useNavigate();
  const item = useContext(MyContext);
  const [isLogin,setIsLogin] = useState(false);
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    });
    console.log(isLogin);
  },[isLogin]);

  const userSignOut = () =>{
    signOut(auth)
    .then(() => {
      setIsLogin(false);
      navigate('/login');
    }).catch((error) => {
      // An error happened.
    });
  }
 return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sample">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
        <Link to='/cart'>Cart : {item[0].length}</Link>
        {
          isLogin?<button onClick={userSignOut} className='btn btn-success'>Logout</button>:
          <Link to='/login' className='btn btn-primary'>Login</Link>
          
        }
        
      </div>
    </div>
  </div>
</nav>
  </>
  )
}

export default Header