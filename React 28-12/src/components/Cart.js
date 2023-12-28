import React, { useContext } from 'react'
import Header from './Header'
import { MyContext } from '../App'
function Cart() {
    const item = useContext(MyContext);
    const DeleteItem = (id) =>{
        const filteredCart = item[0].filter((value)=>{
            return value.id!=id
        })
        item[1](filteredCart);
    }
  return (
    <div>
        <Header/>
        <div className='container'>
            <h1>Cart</h1>
            {
                item[0].map((value,index)=><div>
                        <h3>{value.title} 
                        <button
                        onClick={()=>{DeleteItem(value.id)}}
                        >Delete</button></h3>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Cart