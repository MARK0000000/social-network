
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
          <span onClick={() => setTypeOfLog('in')} className={`${typeOfLog == "in" ? "active" : ""}`}>Log-in</span>
          <span className='login__title_slash'>  /  </span>
          <span onClick={() => setTypeOfLog('up')} className={`${typeOfLog == "up" ? "active" : ""}`}>Log-up</span>
        </h1>
        <form onSubmit={login}>
          <MyInput type="text" placeholder='name' />
          <MyInput type="password" placeholder='password'/>
          <button className='login__btn'>Log in</button>
        </form>
      </div>
    </div>
  );

} 

export default Login;
