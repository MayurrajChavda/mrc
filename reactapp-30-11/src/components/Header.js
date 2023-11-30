import React from 'react'

function Header(props) {
  return (
    <>
      <ul style={{background:props.color}}>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </>
  )
}

export default Header