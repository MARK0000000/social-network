import React, { useState, useEffect } from 'react';
import { createContext } from "react"

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("")
    
    const changeTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark', () => {
  
      })
    }
    useEffect(() => {
        const clientTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (clientTheme) {
        setTheme('dark')
        } else {
        setTheme("light")
        }  
        
    }, [])
    
    useEffect(() => {
  
      const background = `var(--background-${theme})`
      const backgroundContent = `var(--background-content-${theme})`
      const textColor = `var(--text-color-${theme})`
      const borderColor = `var(--border-color-${theme})`
      const boxShadow = `var(--box-shadow-${theme})`
      
      document.body.style.setProperty('--background', background)
      document.body.style.setProperty('--background-content', backgroundContent)
      document.body.style.setProperty('--text-color', textColor)
      document.body.style.setProperty('--border-color', borderColor)
      document.body.style.setProperty('--box-shadow', boxShadow)
    }, [theme])
      
    return (
        <ThemeContext.Provider value={{ theme, changeTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
  );
};
