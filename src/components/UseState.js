import React, {useState} from 'react'

const UseState = () => {
  const [counter, setCounter]=useState(0)
  const increment =()=>{
    setCounter(3)
  }
  return (
    <div>
      {counter}<button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseState
