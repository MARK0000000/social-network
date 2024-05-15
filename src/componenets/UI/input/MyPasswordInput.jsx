import React, {useState} from 'react';
import classes from './MyPasswordInput.module.scss'



const MyPasswordInput = React.forwardRef((props, ref) => {
    const [type, setType] = useState('password')

  return (
    <div className={classes.inputBox}>
        <input type={type}  ref={ref} {...props} className={classes.myInput}/>
        {type == "password" ? 
        <svg className={classes.eye} onClick={() => setType("text")} width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.406 1.125l-3.229 3.229C14.47 5.834 16 7.969 16 7.969s-3.582 5-8 5c-1.244 0-2.422-.397-3.472-.966l-3.372 3.372-.707-.707 3.2-3.2C1.451 9.997 0 7.969 0 7.969s3.582-5 8-5c1.17 0 2.28.351 3.282.867L14.7.418l.707.707zM8 4.969c.61 0 1.179.182 1.653.496L8.546 6.57a1.5 1.5 0 00-1.943 1.943L5.495 9.622A3 3 0 018 4.968zm-.742 4.304l-1.08 1.08a3 3 0 004.205-4.205l-1.079 1.08a1.5 1.5 0 01-2.046 2.046z" fill="#6750A4"></path>
        </svg>
        :
        <svg className={classes.eye} onClick={() => setType("password")} width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 13.078c4.418 0 8-5 8-5s-3.582-5-8-5-8 5-8 5 3.582 5 8 5zm0-2a3 3 0 100-6 3 3 0 000 6zm0-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#6750A4"></path>
        </svg>
        }

    </div>
  );

}) 

export default MyPasswordInput;

