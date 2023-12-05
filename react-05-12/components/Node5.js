import React,{useContext} from 'react'
import { UserContext } from './Parent'

function Node5() {
    let cart = useContext(UserContext);
  return (
    <div>Cart : {cart}</div>
  )
}

export default Node5