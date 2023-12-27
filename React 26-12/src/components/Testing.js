import React, { useEffect, useState } from 'react'

function Testing() {

    const [products,setProducts] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
    },[]);

    return (
    <div className='container'>
        <div className='row'>        
        {
            products?
            products.map((value,index)=><div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <div class="card" style={{width: "18rem"}}>
                <img src={value.thumbnail} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <a href="/" class="btn btn-primary">Add to cart</a>
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