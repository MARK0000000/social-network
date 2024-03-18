import React, { useState, useEffect } from 'react';
import { createContext } from "react"

export const LoggedContext = createContext();


export const LoggedProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    localStorage.removeItem('logged')
    if(localStorage.getItem('logged')) {
      setIsLoggedIn(true)
    }
    setIsLoading(false)
  }, [])

      
    return (
        <LoggedContext.Provider value={{isLoggedIn, setIsLoggedIn, isLoading}}>
            {children}
        </LoggedContext.Provider>
  );
};
