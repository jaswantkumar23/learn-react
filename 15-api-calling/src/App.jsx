import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData= async () => {
  //   const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //   console.log(response);
  // }

  // const getData = async ()=>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(response.data);
  // }

  const [data, setData] = useState([]);
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data);
  }

  return (
    <div>

      <button onClick={getData}>Get Data</button>

      <div>
       {data.map(function(props,idx ){
        return <h3>{idx} = {props.author}</h3>
       })}
      </div>
    </div>

  )
}

export default App
