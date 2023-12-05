import React, { useState,createContext } from 'react'
import Node1 from './Node1'

export let UserContext = createContext();

function Parent() {
  const [cart,setCart] = useState(0);
  
  return (
    <UserContext.Provider value={cart}>
      <div>
        Parent<button onClick={()=>{setCart(cart+1)}}>Add product</button>
        <Node1 myCart={cart}/>  
      </div>
    </UserContext.Provider>
  )
}

export default Parent