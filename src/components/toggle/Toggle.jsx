import React, { useContext } from 'react'
import "./toggle.css"
import Sun from "../../images/Sun.png"
import Moon from "../../images/moon.png"
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }
    
  return (
    <div className='t' style={{backgroundColor: theme.state.darkMode && "rgb(1, 1, 92)"}} >
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}>

        </div>
    </div>
  )
}

export default Toggle