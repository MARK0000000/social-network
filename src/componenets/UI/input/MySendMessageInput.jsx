import React, {useState} from 'react';
import classes from './MySendMessageInput.module.scss'



const MySendMessageInput = React.forwardRef((props, ref) => {
  console.log(props)

  return (
    <div className={classes.inputBox}>
    <input  ref={ref} {...props} className={classes.myInput}/>
      <svg className={classes.icon} onClick={() => props.addcomment()} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path  fillRule="evenodd" clipRule="evenodd" d="M17 9L1.47223e-05 1L0.425812 0.0951843L17.4258 8.09518L17 9Z" fill="#6750A4"/>
      <line y1="-0.5" x2="18.7883" y2="-0.5" transform="matrix(0.904819 -0.425797 -0.425797 -0.904819 0 16)" stroke="#6750A4"/>
      <path d="M17 8.5L0 8.5" stroke="#6750A4"/>
      <line x1="0.5" y1="1" x2="0.5" y2="16" stroke="#6750A4"/>
      </svg>
    </div>
  );

}) 

export default MySendMessageInput;