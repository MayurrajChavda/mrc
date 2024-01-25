import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter