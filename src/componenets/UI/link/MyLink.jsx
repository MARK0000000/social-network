import React from 'react'
import classes from './MyLink.module.scss'
import { Children } from 'react'
export default function MyLink({onClick, text}) {
  return (
    <span className={classes.MyLink} onClick={onClick}>{text}</span>
  )
}
