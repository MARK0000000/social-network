import React, {useState} from 'react';
import classes from './MyLoader.module.css'


const MyLoader = () => {

  return (
    <div className={classes.loader}>
      <div className={classes.loader__item}></div>
    </div>
  );

} 

export default MyLoader;

