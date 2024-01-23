import React, { useRef } from 'react'
import { getDatabase , ref, set  } from "firebase/database";
const db = getDatabase();

function DataBaseCheck() {

    const todo = useRef(null);
    const dt = new Date();
    const addTodo = () => {
        let uniqueId = `${dt.getHours()}${dt.getMinutes()}${dt.getSeconds()}`;


        set(ref(db,'todo/'+uniqueId),{todo:todo.current.value})
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className='container'>
        <h1>Todo list</h1>
        <textarea ref={todo} className='form-control'></textarea>
        <br/><br/>
        <button
        onClick={addTodo}
        className='btn btn-primary'>Add</button>
    </div>
  )
}

export default DataBaseCheck