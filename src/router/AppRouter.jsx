import React, {useContext, useEffect} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Main from '../componenets/Main';
import { privateRoute } from '.';
import Login from '../pages/Login';
import News from '../pages/News';
import { AuthProvider } from '../hooks/useAuth';
import { ProtectedRoute } from './ProtectedRoute';
function AppRouter() {

   return (
      <AuthProvider>
         <Routes>
            <Route path='/login' element={<Login/>}/>
                  <Route path="/" element={
                     <ProtectedRoute>
                        <Main />
                     </ProtectedRoute>
                  }>
                     {privateRoute.map((route) => (
                        <Route index path={route.path} element={route.element} key={route.path} />
                     ))}
                  </Route>
         </Routes>
      </AuthProvider>
   )
}

export default AppRouter;