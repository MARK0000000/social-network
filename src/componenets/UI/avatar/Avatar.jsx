import React from 'react'
import classes from './Avatar.module.scss'

export default function Avatar({photo}) {
  return (
    <img src={photo} alt="#" className={classes.avatar}/>
  )
}
