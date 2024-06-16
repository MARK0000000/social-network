import React, { useState } from 'react'
import classes from './MyIcon.module.scss'


export default function MyCommentsIcon({active, onClick, count}) {

    const addActive = () => {
        if(active === false){
            onClick(true);
        }
        if(active === true) {
            onClick(false);
        }

    }

  return (
    <div className={classes.icon__container}>
        <div className={classes.icon}>
        <svg className={classes.icon__content} onClick={() => addActive()} stroke='#6750A4' strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`${classes.icon__iconPath} ${active && classes.icon__iconPath_active}`} fillRule="evenodd" clipRule="evenodd" d="M7.1 2.00107H17.15C19.8694 1.97809 22.1085 4.13279 22.19 6.85107V14.1311C22.1084 16.8533 19.8633 19.0095 17.14 18.9811H15.58C15.1914 18.9823 14.824 19.1586 14.58 19.4611L13.1 21.3411C12.853 21.6384 12.4865 21.8104 12.1 21.8104C11.7135 21.8104 11.347 21.6384 11.1 21.3411L9.61 19.4611C9.36598 19.1586 8.99862 18.9823 8.61 18.9811H7.1C4.35739 19.0371 2.08172 16.873 2 14.1311V6.85107C2.08172 4.1091 4.35739 1.94498 7.1 2.00107ZM8.35 12.4811C8.76421 12.4811 9.1 12.1453 9.1 11.7311V9.33107C9.1 8.91685 8.76421 8.58107 8.35 8.58107C7.93579 8.58107 7.6 8.91685 7.6 9.33107V11.7311C7.6 12.1453 7.93579 12.4811 8.35 12.4811ZM12.85 11.7311C12.85 12.1453 12.5142 12.4811 12.1 12.4811C11.6858 12.4811 11.35 12.1453 11.35 11.7311V9.33107C11.35 8.91685 11.6858 8.58107 12.1 8.58107C12.5142 8.58107 12.85 8.91685 12.85 9.33107V11.7311ZM15.85 12.4811C16.2642 12.4811 16.6 12.1453 16.6 11.7311V9.33107C16.6 8.91685 16.2642 8.58107 15.85 8.58107C15.4358 8.58107 15.1 8.91685 15.1 9.33107V11.7311C15.1 12.1453 15.4358 12.4811 15.85 12.4811Z" fill="none"/>
        </svg>
        <span className={classes.icon__text}>{count}</span>
        </div>
    </div>
 )
}
