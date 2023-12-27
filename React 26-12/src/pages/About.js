import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {

  const [listItems,setListItem] = useState(["Apple","banana"]);
  const test = useRef(null);
  const addItem = ()=>{
    setListItem([...listItems,test.current.value]);
  }
  return (
    <div>
        <Header/>
        <input ref={test}/>
        <button onClick={addItem}>Click</button>
        <ul>
          {
            listItems.map((value,index)=><li key={index}>{value}</li>)
          }
        </ul>
        <Footer/>
    </div>
  )
}

export default About