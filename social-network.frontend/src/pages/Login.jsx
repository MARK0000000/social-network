import React, {useState, useContext, useEffect, useRef} from 'react';
import { LanguageContext } from '../context/language';
import MyInput from '../componenets/UI/input/MyInput';
import MyLink from "../componenets/UI/link/MyLink";
import { validatePassword, validateRepeatPassword } from '../utils/validation';
import { fetchPost } from '../APi/fetch';
import { useAuth } from '../hooks/useAuth';
import MyPasswordInput from '../componenets/UI/input/MyPasswordInput';


const Login = ({}) => {
  const urlLogUp = "https://localhost:6001/api/Account/register";//!!!!
  const urlLogIn = "https://localhost:6001/api/Account/login"
  const urlForRecive = "https://localhost:7279/api/Account/login"

  const {strings} = useContext(LanguageContext);

  const [typeOfLog, setTypeOfLog] = useState('in')
  const {login} = useAuth()

  const emailInput = useRef();
  const loginInput = useRef();
  const passwordInput = useRef();
  const repeatPasswordInput = useRef();  
  const codeInput = useRef();

  const [emailVal, setEmailVal] = useState('')
  const [loginVal, setLoginVal] = useState('')
  const [passwordVal, setPasswordVal] = useState([])
  const [repPasswordVal, setRepPasswordVal] = useState("")
  const [loaderForAuth, setloaderForAuth] = useState('')
  
  const handleLogin = event => {
    event.preventDefault()
    login( "mark" )

  }

  // const  handleLogin = async (event) => {
  //   event.preventDefault()


  //   let email, loginFromInput, password, repeatPassword;

  //   if (typeOfLog == 'up') {
  //     email = emailInput.current.value;
  //     loginFromInput = loginInput.current.value;
  //     password = passwordInput.current.value;
  //     repeatPassword = repeatPasswordInput.current.value;
  //   } else {
  //     loginFromInput = loginInput.current.value;
  //     password = passwordInput.current.value;
  //   }


  //   if (email === "") {
  //     setEmailVal(`${strings.valEmail}`)
  //     return;
  //   } 

  //   if (loginFromInput === "") {
  //     setLoginVal(`${strings.valLogin}`)
  //     return;
  //   }

  //   let validationPassword = validatePassword(password)
  //   if (validationPassword !== true) {
  //     setPasswordVal(validationPassword.map(error => `${strings[error]}`));
  //     return;
  //   }

  //   let validationRepeatPassword =  validateRepeatPassword(password, repeatPassword, typeOfLog)
  //   if (validationRepeatPassword !== true) {
  //     setRepPasswordVal(`${strings[validationRepeatPassword]}\n`)
  //     return;

  //   } else {
  //     if(typeOfLog == 'up') {
  //       setloaderForAuth("_sending")
  //       const personeData = {
  //         email: email,
  //         username: loginFromInput,
  //         password: password,
  //       }
  //       const  newUser = await fetchPost(personeData, urlLogUp);
  //       console.log(newUser)
  //       newUser && await login( newUser );
  //     }
  //     if(typeOfLog == 'in') {
  //       setloaderForAuth("_sending")
  //       const personeData = {
  //         username: loginFromInput,
  //         password: password,
  //       }
  //       const getUser = await fetchPost(personeData, urlLogIn);
  //       getUser && await login( getUser );
  //     }
  //   }
  // }

  const restorePassword = event => {
    event.preventDefault()
    let email, code, password, repeatPassword;
    email = emailInput.current.value
    if (email !== "") {
      setEnterEmail(true)

    } 
  }

  const [forgotPasswordPage, setForgotPasswordPage] = useState(false)
  const [enterEmail, setEnterEmail] = useState(false)
  const [correctCode, setCorrectCode] = useState(false)

  if (forgotPasswordPage) {
    return (
      <div className='container container_login'>
        <div className='login'>
          <svg className='login__backArrow' onClick={() => setForgotPasswordPage(false)} width="28" height="28" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.94981 15.5201C8.0931 15.6553 8.28278 15.7304 8.47981 15.7301C8.6761 15.7318 8.86434 15.6521 8.99981 15.5101C9.14276 15.3708 9.22338 15.1797 9.22338 14.9801C9.22338 14.7805 9.14276 14.5894 8.99981 14.4501L3.29975 8.75H16.52C16.9342 8.75 17.27 8.41421 17.27 8C17.27 7.58579 16.9342 7.25 16.52 7.25H3.29756L9.00981 1.52006C9.15276 1.38077 9.23338 1.18965 9.23338 0.990063C9.23338 0.790475 9.15276 0.59935 9.00981 0.460063C8.71699 0.167609 8.24263 0.167609 7.94981 0.460063L0.949809 7.46006C0.657355 7.75288 0.657355 8.22724 0.949809 8.52006L7.94981 15.5201Z" fill="#6750A4"/>
          </svg>
            <p className='login__prompt'>Введите электронную почту</p>
          <form className='login__form' onSubmit={restorePassword}>
            <MyInput type="email" placeholder='email' ref={emailInput} />
            {enterEmail &&
            <MyInput
              type="text"
              placeholder='code'
              ref={codeInput}
            />
            }
            {correctCode && 
              <MyInput
                type="password"
                placeholder={strings.pass}
                ref={passwordInput}
                onFocus={() => setPasswordVal([])}
              />
            }
              {passwordVal.map((item) => 
                <p>
                  {item}
                </p>
              )}
              {correctCode && 
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
              Ввести
            </button>
          </form>
        </div>
      </div>
    )  
  } else {
    return (
      <div className='container container_login'>
        <div className='login'>
          <h1 className='login__title'>
            <span onClick={() => setTypeOfLog('in')} className={`${typeOfLog == "in" ? "active" : ""}`}>{strings.singIn}</span>
            <span className='login__title_slash'>  /  </span>
            <span onClick={() => setTypeOfLog('up')} className={`${typeOfLog == "up" ? "active" : ""}`}>{strings.singUp}</span>
          </h1>
          <form className='login__form' onSubmit={handleLogin}>
            {typeOfLog === 'up' && 
                <MyInput type="email" placeholder='email' ref={emailInput}  onFocus={() => setEmailVal('')}/> 
            }
            <span>
              {emailVal}
            </span>
            <MyInput
              type="text"
              placeholder={strings.login}
              ref={loginInput}
              onFocus={() => setLoginVal('')}
            />
            <span>
              {loginVal}
            </span>
            <MyPasswordInput
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
             <MyLink onClick={setForgotPasswordPage} text={strings.forgotPass}></MyLink>
            }
            {typeOfLog === 'up' &&
             <MyPasswordInput 
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
}


export default Login;
