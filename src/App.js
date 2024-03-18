import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter} from 'react-router-dom';
import AppRouter from "./componenets/router/AppRouter";
import { LanguageProvider } from "./context/language";
import { LoggedProvider } from "./context/logged";
function App() {


  return (
   <div>
    <ThemeProvider>
      <LanguageProvider>
        <LoggedProvider>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
      </LoggedProvider>
      </LanguageProvider>
    </ThemeProvider>
   </div>
  );
}

export default App;

