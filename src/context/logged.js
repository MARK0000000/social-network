import React, { useState, useEffect } from 'react';
import { createContext } from "react"

export const LoggedContext = createContext();


export const LoggedProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://localhost:7279/api/Account/register')
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json.data)
//     })
//     .catch((err) => console.warn(err))
//     .finally(() => setIsLoading(false))
// }, [])



  useEffect(() => {
    //localStorage.setItem('logged', 'true')

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
