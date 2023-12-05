import React from 'react'
import '../pages/header.css'
function Header() {
 return (
    <>
      <ul className='myUl'>
        <li className='myLi'><a href='/'>Home</a></li>
        <li className='myLi'><a href='/about'>About</a></li>
        <li className='myLi'><a href='/contact'>Contact</a></li>
      </ul>
    </>
  )
}

export default Header