import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
function Testing() {

    const item = useContext(MyContext);
    const [products,setProducts] = useState(null);
    const notify = () => toast("Wow so easy !");

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
    },[]);
    const AddItem = (product) => {
        var InCart = false;
        item[0].map((value)=>{
            if(value.id==product.id){
                InCart = true;
            }
        })
        if(!InCart){
            item[1]([...item[0],product]);
            item[2].push(1);
        }else{
            alert("Product already in cart");
        }
    }
    console.log(item[2]);
    return (
    <div className='container'>
        <ToastContainer/>
        <div className='row'>        
        {
            products?
            products.map((value,index)=><div key={index} className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <div className="card rounded-0" style={{width: "18rem"}}>
                <img src={value.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <button 
                    onClick={()=>AddItem(value)}
                    className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>)
            :<h1 className='text-primary'>Loading</h1>
        }
        </div>
    </div>
  )
}

export default Testing