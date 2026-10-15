import React, { useEffect, useState } from 'react'

const App = () => {
  const[num, setNum] =useState(0);
  const[num1,setNum1] =useState(10);

  useEffect(function(){
    console.log("useeffect is running...")
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
      <button onClick={()=>{
        setNum(num+1);
      }}>Num</button>
      <button onClick={()=>{
        setNum1(num1+10);
      }}>Num1</button>
    </div>
  )
}

export default App
