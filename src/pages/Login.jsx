import React, {useState, useContext, useEffect, useRef} from 'react';
import { LoggedContext } from '../context/logged';
import { LanguageContext } from '../context/language';
import { useNavigate, useLocation} from 'react-router-dom';
import MyButton from '../componenets/UI/button/MyButton';
import MyInput from '../componenets/UI/input/MyInput';
import MyLink from "../componenets/UI/link/MyLink";
import { validatePassword, validateRepeatPassword } from '../utils/validation';
import { fetchPost } from '../APi/fetchPost';

const Login = ({}) => {

  const {strings} = useContext(LanguageContext);
  const {isLoggedIn, setIsLoggedIn} = useContext(LoggedContext)

  const [typeOfLog, setTypeOfLog] = useState('in')

  const url = "https://localhost:7279/api/Account/register";//!!!!
  
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('news', { replace: true }); 
    }  
  }, [navigate, isLoggedIn]);

  const emailInput = useRef();
  const loginInput = useRef();
  const passwordInput = useRef();
  const repeatPasswordInput = useRef();  

  const [passwordVal, setPasswordVal] = useState([])
  const [repPasswordVal, setRepPasswordVal] = useState("")
  const [loaderForAuth, setloaderForAuth] = useState('')

  const  login = event => {
    event.preventDefault()

    let email, login, password, repeatPassword;

    if (typeOfLog == 'up') {
      email = emailInput.current.value;
      login = loginInput.current.value;
      password = passwordInput.current.value;
      repeatPassword = repeatPasswordInput.current.value;
    } else {
      login = loginInput.current.value;
      password = passwordInput.current.value;
    }

    let validationRepeatPassword =  validateRepeatPassword(password, repeatPassword, typeOfLog)
    if (validationRepeatPassword !== true) {
      setRepPasswordVal(`${strings[validationRepeatPassword]}\n`)
      return;
    }

    let validationPassword = validatePassword(password)
    if (validationPassword !== true) {
        setPasswordVal(validationPassword.map(error => `${strings[error]}`));
    } else {
      if(typeOfLog == 'up') {
        setloaderForAuth("_sending")
        const personeData = {
          email: email,
          username: login,
          password: password,
        }
        let newPersone = fetchPost(personeData, url)
        if (newPersone === true) {
          setIsLoggedIn(true)
          localStorage.setItem('logged', 'true')  
        }
      }
      if(typeOfLog == 'in') {
        setloaderForAuth("_sending")
        const personeData = {
          username: login,
          password: password,
        }
        let getPersone = fetchPost(personeData, url)
        if (getPersone === true) {
          setIsLoggedIn(true)
          localStorage.setItem('logged', 'true')  
        }
      }
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
            onFocus={() => setPasswordVal([])}
          />
          {passwordVal.map((item) => 
            <p>
              {item}
            </p>
          )}
          {typeOfLog === 'in' &&
           <MyLink text={strings.forgotPass}></MyLink>
          }
          {typeOfLog === 'up' &&
           <MyInput 
            type="password" 
            placeholder={strings.repeatPass} 
            ref={repeatPasswordInput}
            onFocus={() => setRepPasswordVal("")}
            />
          }
          <span>
            {repPasswordVal}
          </span>
          <button 
          className={`login__btn login__btn${loaderForAuth}`} 
          >
            {`${typeOfLog === 'in' ? `${strings.doSingIn}` : `${strings.doSingUp}`}`}
          </button>
        </form>
      </div>
    </div>
  );
} 

export default Login;
