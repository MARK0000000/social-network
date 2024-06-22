import React from 'react'
import classes from './Person.module.scss'
import Avatar from '../avatar/Avatar'
export default function Person({photo,name, lastMessage}) {
  return (
    <div className={classes.person}>
        <Avatar photo={photo}/>
        <div className={classes.person__text}>
            <span className={classes.person__name}>{name}</span>
            <span className={classes.person__lastMessage}>{lastMessage}</span>
        </div>
    </div>
  )
}
