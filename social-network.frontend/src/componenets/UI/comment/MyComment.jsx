import React from 'react'
import classes from './MyComments.module.scss'
import Avatar from '../avatar/Avatar'
export default function Person({photo,name, date, body}) {
  return (
    <div className={classes.comment}>
        <Avatar photo={photo}/>
        <div className={classes.comment__text}>
            <p className={classes.comment__firstLine}>
              <span className={classes.comment__name}>{name}</span>
              <span className={classes.comment__date}>{date}</span>
            </p>
            <p className={classes.comment__body}>{body}</p>
        </div>
    </div>
  )
}
