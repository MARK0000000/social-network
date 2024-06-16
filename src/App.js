import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { LanguageProvider } from "./context/language";
function App() {


  return (
   <div>
    <ThemeProvider>
      <LanguageProvider>
          <HashRouter>
            <AppRouter/>
          </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
   </div>
  );
}

export default App;


