import React from 'react'

const App = () => {
  
   const user={
    name:"jaswant",
    age:22,
    city:"hyderabad"
   }
   localStorage.setItem('user',JSON.stringify(user))

   const User=JSON.parse(localStorage.getItem('user'))
   delete User.age
   localStorage.setItem('user',JSON.stringify(User))
   localStorage.removeItem('User')

   console.log(User)
  return (
    <div>
      app
    </div>
  )
}

export default App
