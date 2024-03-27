import React from 'react'
import MyButton from '../UI/button/MyButton'
import im1 from '../../images/other/Без названия.jpg'
import im2 from '../../images/other/Без названия (1).jpg'
import im3 from '../../images/other/Без названия (2).jpg'
export default function ProfilePhotoes() {
  return (
    <div className='profile__photos'>
      <span className='profile__photos-text'>Photos 0</span>
      <div className='profile__photos-box'>
        <img src={im1} alt="" />
        <img src={im2} alt="" />
        <img src={im3} alt="" />      
      </div>
      <div className="profile__photos-buttons">
        <MyButton className="profile__photos-button" style={{minWidth: "40%"}}>Добавить фото</MyButton>
        <MyButton className="profile__photos-button" style={{minWidth: "40%"}}>Посмотреть все фото</MyButton>
      </div>
    </div>
  )
}
