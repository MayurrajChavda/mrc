import React,{memo} from 'react'

function Child({n}) {
    console.log("Child has been loaded");
  return (
    <div>Child : {n}</div>
  )
}

export default memo(Child)