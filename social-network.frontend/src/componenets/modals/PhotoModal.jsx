import React, { useEffect, useRef, useState, useContext } from 'react'
import MyLikeIcon from '../UI/icons/MyLikeIcon'
import MyComment from '../UI/comment/MyComment'
import Avatar from '../UI/avatar/Avatar'
import ava from '../../images/other/ава.jpg'
import MySendMessageInput from '../UI/input/MySendMessageInput'
import MyCommentsIcon from '../UI/icons/MyCommentsIcon'
import { LanguageContext } from '../../context/language';

export default function PhotoModal({
    showComments,
    setShowComments,
    className,
    onClick,
    selectedItemIndex,
    setSelectedItemIndex,
    photoInfo,
    setPhotoInfo,
    increaseLikeCount,
    decreaseLikeCount,
    pressedLike,
    setPressedLike,
    })
  {
  console.log(photoInfo)
  console.log(selectedItemIndex)

  const [commentsArray, setCommentsArray] = useState([])
  const {strings} = useContext(LanguageContext);

  useEffect(() => {
    if (photoInfo) {
      setCommentsArray(photoInfo[selectedItemIndex].comments)
    }
  }, [photoInfo]) 

  const commentInput = useRef()

  const addComment = () => {
    // fetchPost
    // setCommentsArray(      {
    //   photo: ava,
    //   name: "Skolnik Mark",
    //   date: '5.22.2024',
    //   body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    // },
//)
    console.log("comment")
    
  }

  return (
    <div className={`${className}`} onClick={() => onClick(false, 0)}>
    <svg onClick={() => onClick(false)} className='modal__close' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1665 12.008L20.762 4.43822C21.0793 4.11791 21.0793 3.599 20.762 3.27868C20.4503 2.95264 19.9355 2.94285 19.6118 3.2568L12.0163 10.8266L4.51839 3.2568C4.36467 3.09288 4.15078 3 3.92702 3C3.70327 3 3.48938 3.09288 3.33566 3.2568C3.0543 3.56628 3.0543 4.04123 3.33566 4.35071L10.8335 11.9096L3.238 19.4685C2.92067 19.7888 2.92067 20.3077 3.238 20.628C3.38907 20.784 3.59685 20.871 3.81309 20.8687C4.03351 20.8867 4.25202 20.8159 4.42074 20.6718L12.0163 13.102L19.6118 20.7593C19.7629 20.9153 19.9707 21.0022 20.1869 21C20.4029 21.001 20.6102 20.9142 20.762 20.7593C21.0793 20.439 21.0793 19.9201 20.762 19.5998L13.1665 12.008Z" fill="#6750A4"/>
    </svg>
    <div className={`modal__content photoModal ${showComments == true ? 'photoModal_withComments' : ''}`} onClick={event => event.stopPropagation()}>
      <div className={`photoModal__photo-box ${showComments == true ? 'photoModal__photo-box_active' : ''}`}>
        <img className='photoModal__photo' src={photoInfo[selectedItemIndex].img} alt="" />
        {/* <button onClick={}>Next</button> */}
        <hr className='photoModal__hr'/>
        <MyLikeIcon 
          count={photoInfo[selectedItemIndex].likeCount} 
          increaseLikeCount={increaseLikeCount} 
          decreaseLikeCount={decreaseLikeCount} 
          selectedItemIndex={selectedItemIndex}
          pressedLike={pressedLike} setPressedLike={setPressedLike}
        />
        <MyCommentsIcon active={showComments} count={10} onClick={setShowComments}/>  
      </div>
      <div className={`photoModal__comments-container ${showComments == true ? 'photoModal__comments-container_active' : ''}`}>
        <div className='photoModal__comments-box'>
          <h2>{strings.comments}</h2>
          {commentsArray && commentsArray.map((item, index) => 
            <MyComment photo={item.photo} date={item.date} name={item.name} body={item.body} key={index}/>
          )}   
        </div>
        <div className="photoModal__writeComment">
          <Avatar photo={ava}/>
          <MySendMessageInput addcomment={addComment} ref={commentInput} placeholder={strings.writeComment}/>

        </div>
      </div>
    </div>
  </div>
  )
}
