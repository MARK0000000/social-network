
import React, {useState, useContext, useEffect, useRef} from 'react';
import { LoggedContext } from '../context/logged';
import { LanguageContext } from '../context/language';
import { useNavigate, useLocation} from 'react-router-dom';
import MyButton from '../componenets/UI/button/MyButton';
import MyInput from '../componenets/UI/input/MyInput';
import MyLink from "../componenets/UI/link/MyLink";


const Login = ({}) => {

  const { strings, changeLanguage, language} = useContext(LanguageContext);
  const {isLoggedIn, setIsLoggedIn, isLoading,} = useContext(LoggedContext)

  const [typeOfLog, setTypeOfLog] = useState('in')

  const emailInput = useRef();
  const loginInput = useRef();
  const passwordInput = useRef();
  const repeatPasswordInput = useRef();  

  const url = "https://localhost:7279/api/Account/register";

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('news', { replace: true }); 
    }  
  }, [navigate, isLoggedIn]);
  
  async function newPersone (data) {

    try {
      const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      console.log("Успех:", JSON.stringify(json));
      localStorage.setItem('logged', 'true')
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async function getPersone (data) {
  
    try {
      const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      console.log("Успех:", JSON.stringify(json));
      setIsLoggedIn(true)
      localStorage.setItem('logged', 'true')

    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  const  login = event => {
  event.preventDefault()

  let email, login, password, repeatPassword;

  if (typeOfLog == 'up') {
    const email = emailInput.current.value;
    const login = loginInput.current.value;
    const password = passwordInput.current.value;
    const repeatPassword = repeatPasswordInput.current.value;
  } else {
    const login = loginInput.current.value;
    const password = passwordInput.current.value;
  }

  if (typeOfLog === 'up' && password !== repeatPassword) {
    alert('Пароли не совпадают');
    return;
  }
  function validatePassword(password) {
    if (password.length < 8) {
      return;
    }
    if ( !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return;
    }
    if (!/[^a-zA-Z0-9]*([!@#$%^&*][^!@#$%^&*]*[!@#$%^&*][^a-zA-Z0-9]*)|([^a-zA-Z0-9]*[^!@#$%^&*]*[^a-zA-Z0-9]*)/.test(password)) {
      return;
    }
  }
  validatePassword(password)

  if(typeOfLog == 'up') {
    const personeData = {
      email: email,
      username: login,
      password: password,
    }
    newPersone(personeData)
  }
  if(typeOfLog == 'in') {
    const personeData = {
      username: login,
      password: password,
    }
    getPersone(personeData)
  }
  }

  return (
    <div className='container container_login'>
      <div className='login'>
        <h1 className='login__title'>
          <span onClick={() => setTypeOfLog('in')} className={`${typeOfLog == "in" ? "active" : ""}`}>{strings.singIn}</span>
          <span className='login__title_slash'>  /  </span>
          <span onClick={() => setTypeOfLog('up')} className={`${typeOfLog == "up" ? "active" : ""}`}>{strings.singUp}</span>
        </h1>
        <form className='login__form' onSubmit={login}>
          {typeOfLog === 'up' && 
              <MyInput type="email" placeholder='email' ref={emailInput} />
          }
          <MyInput
            type="text"
            placeholder={strings.login}
            ref={loginInput}
          />
          <MyInput
            type="password"
            placeholder={strings.pass}
            ref={passwordInput}
          />
          {typeOfLog === 'in' &&
           <MyLink text={strings.forgotPass}></MyLink>
          }
          {typeOfLog === 'up' &&
           <MyInput 
            type="password" 
            placeholder={strings.repeatPass} 
            ref={repeatPasswordInput}
            />
          }
          <button className='login__btn'>
            {`${typeOfLog === 'in' ? `${strings.doSingIn}` : `${strings.doSingUp}`}`}
          </button>
        </form>
      </div>
    </div>
  );
} 

export default Login;
