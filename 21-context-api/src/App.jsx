import React, { useContext } from 'react'
import { ThemeDataContext } from './context/ThemeContext'
import Button from './components/Button'

const App = () => {
  const [Theme,setTheme]=useContext(ThemeDataContext)
  return (
    <div>
      <nav className={Theme}>
        <h2>Jaswant Kumar</h2>
        <div>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
            <li>{Theme}</li>
          </ul>
        </div>
      </nav>
      <Button/>
    </div>
  )
}

export default App
