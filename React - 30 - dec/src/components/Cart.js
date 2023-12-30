import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { MyContext } from '../App'
function Cart() {
    const item = useContext(MyContext);
    let total = 0;
    item[0].map((value,index)=>{
        total+=(value.price*item[2][index]);
    })
    const DeleteItem = (id) =>{
        const filteredCart = item[0].filter((value)=>{
            return value.id!=id
        })
        item[1](filteredCart);
    }
    const changeQTY = (x,index) =>{
        let newQtyArray = [...item[2]];
        switch(x){
            case '-':{
                newQtyArray[index]--;
                if(newQtyArray[index]<1){
                    newQtyArray[index] = 1;
                }
                break;
            }
            case '+':newQtyArray[index]++;break;
        }
        item[3](newQtyArray);
    }
  return (
    <div>
        <Header/>
        <div className='container'>
            <h1>Cart</h1>
            <table className='table'>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            {
                item[0].length>0?
                item[0].map((value,index)=><tr key={index}>
                        <td>{value.title}</td>
                        <td>{value.price}</td>
                        <td>
                            <button className='btn btn-success me-3'
                            onClick={()=>{changeQTY("-",index)}}
                            >-</button>
                            {item[2][index]}
                            <button className='btn btn-success mx-3'
                            onClick={()=>{changeQTY("+",index)}}
                            >+</button>
                            <button className='btn btn-danger'
                            onClick={()=>{DeleteItem(value.id)}}
                            ><i className="fa-solid fa-trash"></i></button>
                        </td>
                        <td>{value.price*item[2][index]}</td>                        
                    </tr>):<h3>No items in cart</h3>
            }
            </table>
            <hr/>
            <h3 className='text-end'>Total : {total}</h3>
        </div>
    </div>
  )
}

export default Cart