import React, { useState } from 'react'

const App = () => {
  const[count, setCount]=useState(0)
  function increaseCount(){
    setCount(count+1)
  }

  function decreaseCount(){
    setCount(count-1)
  }
  return (
    <div className='container'>
      <h1>{count}</h1>
    <div className='Counter'>  
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button></div>
    </div>
  )
}

export default App
