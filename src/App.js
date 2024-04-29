import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { LanguageProvider } from "./context/language";
import { LoggedProvider } from "./context/logged";
function App() {


  return (
   <div>
    <ThemeProvider>
      <LanguageProvider>
        <LoggedProvider>
          <HashRouter>
            <AppRouter/>
          </HashRouter>
        </LoggedProvider>
      </LanguageProvider>
    </ThemeProvider>
   </div>
  );
}

export default App;

