import React, {useEffect, useContext} from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import { LoggedContext } from '../context/logged';

const IsLogged = () => {
   const {isLoggedIn, isLoading} = useContext(LoggedContext)
   const navigate = useNavigate()
   useEffect(()=> {
      if(!isLoggedIn) {
         return navigate('login', { replace: true });
      } 
   }, [isLoggedIn, navigate, isLoading])
   
  return (
    <div>
         <Navigate to='/news'/>
    </div>
  );

} 

export default IsLogged;

