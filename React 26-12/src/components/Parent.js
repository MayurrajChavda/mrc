import React, { useState } from 'react'

function Parent() {
  const [date,setDate] = useState(new Date());

  setTimeout(()=>{
    setDate(new Date());
  },1000);

  return (
    <div>{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</div>
  )
}

export default Parent