import React from 'react'

const App = () => {

  const handleClicked=()=>{
    console.log('Button clicked!');
  }
  const handleMouseEnter=(el)=>{
    console.log(el.target.value);
  }
  return (
    <div>
      <input onChange={handleMouseEnter} type="text" name="" id="btn" placeholder='Enter Your Name: ' />
      <button onClick={handleClicked}>Click Me</button>
    </div>
  )
}

export default App
