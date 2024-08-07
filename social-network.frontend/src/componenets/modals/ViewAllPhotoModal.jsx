import React from 'react'
import MyLikeIcon from '../UI/icons/MyLikeIcon'
import MyCommentsIcon from '../UI/icons/MyCommentsIcon'
export default function ViewAllPhotoModal({className, onClick, photoInfo}) {
  console.log(photoInfo)
  return (
    <div className={`${className}`} onClick={() => onClick(false)}>
      <svg onClick={() => onClick(false)} className='modal__close' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1665 12.008L20.762 4.43822C21.0793 4.11791 21.0793 3.599 20.762 3.27868C20.4503 2.95264 19.9355 2.94285 19.6118 3.2568L12.0163 10.8266L4.51839 3.2568C4.36467 3.09288 4.15078 3 3.92702 3C3.70327 3 3.48938 3.09288 3.33566 3.2568C3.0543 3.56628 3.0543 4.04123 3.33566 4.35071L10.8335 11.9096L3.238 19.4685C2.92067 19.7888 2.92067 20.3077 3.238 20.628C3.38907 20.784 3.59685 20.871 3.81309 20.8687C4.03351 20.8867 4.25202 20.8159 4.42074 20.6718L12.0163 13.102L19.6118 20.7593C19.7629 20.9153 19.9707 21.0022 20.1869 21C20.4029 21.001 20.6102 20.9142 20.762 20.7593C21.0793 20.439 21.0793 19.9201 20.762 19.5998L13.1665 12.008Z" fill="#6750A4"/>
      </svg>
      <div className='modal__content photoViewModal' onClick={event => event.stopPropagation()}>
        <div className='photoViewModal__box'>
          {photoInfo && photoInfo.map((item, index)  => 
            <div className='photoViewModal__item'>
              <img className='photoViewModal__img' key={index} src={item.img} alt="#" />
              <MyLikeIcon 
              viewAllPhoto={true}
              count={item.likeCount} 
              // increaseLikeCount={increaseLikeCount} 
              // decreaseLikeCount={decreaseLikeCount} 
              // selectedItemIndex={selectedItemIndex}
              // pressedLike={pressedLike} setPressedLike={setPressedLike}
              />
              <MyCommentsIcon
              viewAllPhoto={true}
              //  active={showComments}
               count={10}
              //  onClick={setShowComments}
               />  
            </div>
          )}
        </div>
      </div>
  </div>
  )
}
