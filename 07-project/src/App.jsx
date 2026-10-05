import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'


const Users=[
  {
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHx3b3JraW5nfGVufDB8fDB8fHww",
    intro:"",
    color:"blue",
    tag:"Satisfied",
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1705091306832-72195b3e2844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHN0YW5kaW5nJTIwaW4lMjBvZmZpY2UlMjBhbmQlMjB3b3JraW5nfGVufDB8fDB8fHww",
    intro:"",
    color:"lightseagreen",
    tag:"Undeserved",
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1674055047771-a7658f3f9c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHN0YW5kaW5nJTIwaW4lMjBvZmZpY2UlMjBhbmQlMjB3b3JraW5nfGVufDB8fDB8fHww",
    intro:"",
    color:"blueviolet",
    tag:"Underbanked",
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1682146148845-482d546b836a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHN0YW5kaW5nJTIwaW4lMjBvZmZpY2UlMjBhbmQlMjB3b3JraW5nfGVufDB8fDB8fHww",
    intro:"",
    color:"maroon",
    tag:"Satisfied",
  }
]
const App = () => {
  return (
    <div>
      <Section1 users={Users} />
      <Section2 />
    </div>
  )
}

export default App
