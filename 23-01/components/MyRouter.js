import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Index from '../Auth/Index'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import DataBaseCheck from './DataBaseCheck'

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/user' element={<Index/>}/>
          <Route path='/todo' element={<DataBaseCheck/>}/>
          <Route path='/user/login' element={<Login/>}/>
          <Route path='/user/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter