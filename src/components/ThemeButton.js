import React from 'react'
import { useTheme } from '../context/ThemeContext'

function ThemeButton() {
    const {theme,setTheme} = useTheme();
    return (
        <div className="button">
           <label className="switch">
            <input type="checkbox" onClick={() =>setTheme(theme==="light" ? "dark" : "light")}/>
            <span className="slider"></span>
            </label>
        </div>
    )
}

export default ThemeButton
