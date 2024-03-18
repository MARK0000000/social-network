import React, {useContext, useEffect} from 'react';
import IsLogged from './Islogged'
import { Routes, Route, useNavigate} from 'react-router-dom';
import Main from '../Main';
import { privateRoute } from '.';
import { LoggedContext } from '../../context/logged';
import Login from '../Login';
import News from '../News';
function AppRouter() {
   const navigate = useNavigate()
   const {isLoggedIn, isLoading} = useContext(LoggedContext)

   useEffect(()=> {
      if(!isLoggedIn) {
         return navigate('login', { replace: true });
      } 
   }, [isLoggedIn, navigate, isLoading])


   if (isLoading) {
      return <div>Loading</div>
   }

   return (
      <Routes>
         <Route path='*' element={<IsLogged/>}/>
         <Route path='login' element={<Login/>}/>
            {/* <Route index element={<News/>}/> */}
            isLoggedIn || (
               <Route path="/" element={<Main />}>
                  {privateRoute.map((route) => (
                     <Route index path={route.path} element={route.element} key={route.path} />
                  ))}
               </Route>
            ) 
            
      </Routes>
   )
}

export default AppRouter;