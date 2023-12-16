import React, { useRef, useState } from 'react'
import './clock.css'
import clockbg from './clock.png'
import hdial from './hdial.png'
import mdial from './mdial.png'
import sdial from './sdial.png'

function Clock() {
  const [date,setDate] = useState(new Date());
  const hRef = useRef(null);
  const mRef = useRef(null);
  const sRef = useRef(null);

  const RotateDials = (h,m,s) => {
    console.log(h,m,s);
    hRef.current.style.transform = `rotate(${h*30}deg)`;
    mRef.current.style.transform = `rotate(${m*6}deg)`;
    sRef.current.style.transform = `rotate(${s*6}deg)`;
  }

  setTimeout(()=>{
    setDate(new Date())
    RotateDials(date.getHours(),date.getMinutes(),date.getSeconds());
  },1000);

  return (
    <div className='main'>
      <img src={clockbg}/>
      <img src={hdial} ref={hRef}/>
      <img src={mdial} ref={mRef}/>
      <img src={sdial} ref={sRef}/>
    </div>
  )
}

export default Clock