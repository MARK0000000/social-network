import React, { useEffect, useContext  } from "react";
import { ThemeContext } from "./context/theme";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { LanguageProvider } from "./context/language";
import './styles/theme.css';
function App() {

  return (
   <div>
      <LanguageProvider>
          <HashRouter>
            <AppRouter/>
          </HashRouter>
      </LanguageProvider>
   </div>
  );
}

export default App;


