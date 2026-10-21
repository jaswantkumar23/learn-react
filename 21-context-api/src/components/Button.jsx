import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [Theme, setTheme]=useContext(ThemeDataContext)
    const changeTheme=()=>{
        setTheme('Dark')
    }
  return (
    <div>
        <button className='btn' onClick={changeTheme}>Change Theme {Theme}</button>
    </div>
  )
}

export default Button