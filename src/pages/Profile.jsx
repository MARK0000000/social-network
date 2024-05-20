import React, { useState } from 'react'
import ava from '../images/other/ава.jpg'
import Avatar from '../componenets/UI/avatar/Avatar'
import ProfilePhotoes from '../componenets/profile/ProfilePhotoes'
import MyLink from '../componenets/UI/link/MyLink'
import InfoModal from '../componenets/modals/InfoModal'
import InfoAddModal from '../componenets/modals/InfoAddModal'

export default function Profile() {
  const [infoOpen, setInfoOpen] = useState(false)
  const showInfo = (state) => {
    setInfoOpen(state)
  }
  const [infoAddOpen, setInfoAddOpen] = useState(false)
  const showInfoAdd = (state) => {
    setInfoAddOpen(state)
  }



  return (
    <section className='profile'>
      <InfoModal onClick={showInfo} className={`${infoOpen == true ? 'modal modal_active' : 'modal'}`}/>
      <InfoAddModal onClick={showInfoAdd} className={`${infoAddOpen == true ? 'modal modal_active' : 'modal'}`}/>
      <div className='profile__info'>
        <div className='profile__info-content'>
          <img className='profile__ava' src={ava} alt="#" />
          <div className='profile__info-text'>
            <h1 className='profile__name'>Shkolnik Mark</h1>
            <MyLink onClick={showInfo} text="Посмотреть личную информацию"/>
            <MyLink onClick={showInfoAdd} text="Изменить личную информацию"/>
          </div>
          <svg className='profile__settings'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.90001 1.83023 9.09001 2.20023 8.47001L4.05023 5.28001C4.39023 4.66001 5.16023 4.38001 5.84023 4.65001L7.65023 5.38001C7.91023 5.21001 8.17023 5.06001 8.43023 4.92001L8.70023 3.01001C8.79023 2.31001 9.41023 1.76001 10.1402 1.76001H13.8402C14.5802 1.76001 15.2002 2.30001 15.2902 3.03001L15.5602 4.92001C15.8302 5.06001 16.0902 5.21001 16.3502 5.38001L18.1502 4.66001C18.8602 4.40001 19.6302 4.69001 19.9702 5.31001L21.8102 8.49001C22.1702 9.15001 22.0102 9.93001 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08001L18.4402 6.68001L16.0502 7.64001L15.6002 7.29001C15.1802 6.97001 14.7302 6.71001 14.2702 6.52001L13.7502 6.30001L13.3802 3.75001H10.6202L10.2502 6.30001L9.72023 6.51001C9.28023 6.70001 8.84023 6.95001 8.38023 7.30001L7.93023 7.63001L5.55023 6.68001L4.16023 9.07001L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.50001 12.0002 8.50001C13.9332 8.50001 15.5002 10.067 15.5002 12Z" fill="#6750A4"/>
          </svg>
        </div>
      </div>
      <div className='profile__friends'>
        <span>Друзей 0</span>
        <div className='profile__friends-box'>
          <Avatar/>
          <Avatar/>
          <Avatar/>
        </div>
      </div>
      <ProfilePhotoes/>
      <div className='profile__posts'>
        <div className="add-post">
        <svg className="add-post__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.75 11H12.5V3.75C12.5 3.33579 12.1642 3 11.75 3C11.3358 3 11 3.33579 11 3.75V11H3.75C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H11V19.75C11 20.1642 11.3358 20.5 11.75 20.5C12.1642 20.5 12.5 20.1642 12.5 19.75V12.5H19.75C20.1642 12.5 20.5 12.1642 20.5 11.75C20.5 11.3358 20.1642 11 19.75 11Z" fill="#6750A4"/>
        </svg>
        <span>Добавить пост</span>
        </div>
      </div>
    </section>
  )
}
