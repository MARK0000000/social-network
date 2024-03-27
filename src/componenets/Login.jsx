
import React, {useState, useContext, useEffect} from 'react';
import { LoggedContext } from '../context/logged';
import { useNavigate, useLocation} from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const Login = ({}) => {


   const {isLoggedIn, setIsLoggedIn, isLoading,} = useContext(LoggedContext)
   
   localStorage.setItem('logged', 'true')
   const login = event => {
      event.preventDefault()
      setIsLoggedIn(true)

   }

   const navigate = useNavigate()
   useEffect(() => {
      if (isLoggedIn) {
        navigate('news', { replace: true }); 
      }
    }, [navigate, isLoggedIn]);
 
    const [typeOfLog, setTypeOfLog] = useState('in')
  return (
    <div className='container container_login'>
      <div className='login'>
        <h1 className='login__title'>
          <span onClick={() => setTypeOfLog('in')} className={`${typeOfLog == "in" ? "active" : ""}`}>Sing-in</span>
          <span className='login__title_slash'>  /  </span>
          <span onClick={() => setTypeOfLog('up')} className={`${typeOfLog == "up" ? "active" : ""}`}>Sing-up</span>
        </h1>
        <form onSubmit={login}>
          {typeOfLog === 'up' && <MyInput type="password" placeholder='email'/>}
          <MyInput type="text" placeholder='login' />
          <MyInput type="password" placeholder='password'/>
          {typeOfLog === 'up' && <MyInput type="password" placeholder='repeat password'/>}
          <button className='login__btn'>{`${typeOfLog === 'in' ? "Sing-in" : "Sing-up"}`}</button>
        </form>
      </div>
    </div>
  );

} 

export default Login;
