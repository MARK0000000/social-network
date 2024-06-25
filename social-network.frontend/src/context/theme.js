import React, { useState, useEffect } from 'react';
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", null);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (!theme) {
      const clientTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(clientTheme ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
