import React from 'react'
import { useReducer } from 'react';

function Hook_s() {
    const [num,setNum] = useReducer(
    (num)=>{
        console.log("Hello",num);
        return num;
    },0);
  return (
    <div>Hook_s 
    <button onClick={()=>{setNum()}}>Click</button>
    </div>
  )
}

export default Hook_s