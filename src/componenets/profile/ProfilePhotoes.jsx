import React, {useEffect, useState} from 'react'
import MyButton from '../UI/button/MyButton'
import im1 from '../../images/other/Без названия.jpg'
import im2 from '../../images/other/Без названия (1).jpg'
import im3 from '../../images/other/Без названия (2).jpg'
import ava from '../../images/other/ава.jpg'
import PhotoModal from '../modals/PhotoModal'
import { fetchGet } from '../../APi/fetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function ProfilePhotoes() {
  const [photoModal, setPhotoModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0); 
  const [showComments, setShowComments] = useState(false)
  

  const [photo, setPhoto] = useState([
    {
    img: im1,
    likeCount: 10,
    comments: [
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },

      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "So sweet",
      },
    ]
    },
    {
      img: im2,
      likeCount: 10,
      comments: [
        {
          photo: null,
          name: "",
          date: '',
          body: "",
        },
      ],
    },
    { 
      img: im3,
      likeCount: 10,
},
  ]);
  let lastThreePhoto = photo.slice(2)
  console.log(lastThreePhoto)
  useEffect(() => {
    //const result = fetchGet("hjdf");
    //setPhoto(result);
  }, [])

  const showPhotoModal = (state, index) => {
    if (state == false) {
      setShowComments(false)
    }
    setPhotoModal(state);
    //console.log(img, likeCount, comments)
    setSelectedItemIndex(index); 
  }

  return (
    <div className='profile__photos'>
      <PhotoModal showComments={showComments} setShowComments={setShowComments} selectedItemIndex={selectedItemIndex} setSelectedItemIndex={setSelectedItemIndex} photoInfo={photo} onClick={showPhotoModal} className={`${photoModal == true ? 'modal modal_active' : 'modal'}`}/>
      <span className='profile__photos-text'>Photos 0</span>
      <div className='profile__photos-box'>
        {lastThreePhoto.map((item, index) => 
          <img onClick={() => showPhotoModal(true, index)} src={item.img} alt="" />
        )}
      </div>
      <div className="profile__photos-buttons">
        <MyButton className="profile__photos-button" style={{minWidth: "40%"}}>Добавить фото</MyButton>
        <MyButton className="profile__photos-button" style={{minWidth: "40%"}}>Посмотреть все фото</MyButton>
      </div>
    </div>
  )
}