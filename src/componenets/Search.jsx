import React from 'react'
import MyInput from './UI/input/MyInput'

export default function Search({className}) {
  return (
    <div className={className}>
        <MyInput placeholder='Глобальный поиск' />
        <MyInput placeholder='Поиск среди добавленных' />
    </div>
  )
}
