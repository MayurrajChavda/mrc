import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Clock from '../clock/Clock'
import Hook_s from './Hook_s'
import Cart from './Cart'
import Sample from './Sample'

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/clock/test' element={<Clock/>}/>
          <Route path='/hooks' element={<Hook_s/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Sample/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter