import React, {useEffect, useState} from 'react'
import MyButton from '../UI/button/MyButton'
import im1 from '../../images/other/Без названия.jpg'
import im2 from '../../images/other/Без названия (1).jpg'
import im3 from '../../images/other/Без названия (2).jpg'
import fourK from '../../images/other/4k.jpg'
import verticalImage from '../../images/other/verticalImage.jpg'
import vertical4k from '../../images/other/vertical 4k.jpg'
import ava from '../../images/other/ава.jpg'
import PhotoModal from '../modals/PhotoModal'
import { fetchGet } from '../../APi/fetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AddPhotoModal from '../modals/AddPhotoModal';
import ViewAllPhotoModal from '../modals/ViewAllPhotoModal'

export default function ProfilePhotoes() {
  const [photoModal, setPhotoModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [addPhotoModalShow, setAddPhotoModalShow] = useState(false)
  const [viewAllPhotoModalShow, setViewAllModalShow] = useState(false)

  const [photo, setPhoto] = useState([
    {
      img: fourK,
      likeCount: 10,
      comments: [
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssdsfsdfgfdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssdsfsdsssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },
      {
        photo: ava,
        name: "Skolnik Mark",
        date: '5.22.2024',
        body: "dsfssssssss",
      },


      // ... Other comments
      ]
  },
  {
      img: vertical4k,
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
      img: verticalImage,
      likeCount: 10,
      comments: [
      {
        photo: null,
        name: "",
        date: '',
        body: "",
      },
      ]
  },
  {
    img: im3,
    likeCount: 10,
    comments: [
    {
      photo: null,
      name: "",
      date: '',
      body: "",
    },
    ]
},
{
  img: im3,
  likeCount: 10,
  comments: [
  {
    photo: null,
    name: "",
    date: '',
    body: "",
  },
  ]
},
{
  img: verticalImage,
  likeCount: 10,
  comments: [
  {
    photo: null,
    name: "",
    date: '',
    body: "",
  },
  ]
},

]);

  //const lastThreePhoto = photo.slice(0);


  const showViewAllPhotoModal = (state) => {
    setViewAllModalShow(state)
  }
  const showAddPhotoModal = (state) => {
    setAddPhotoModalShow(state)
  }

  const showPhotoModal = (state, index) => {
      setSelectedItemIndex(index);
      setPressedLike(false)
      setShowComments(false)
      setPhotoModal(state);
  }
  const [pressedLike, setPressedLike] = useState(false)

  const increaseLikeCount = (index) => {
      setPhoto((prevPhoto) => prevPhoto.map((item, i) => (
          i === index? { ...item, likeCount: item.likeCount + 1} : item
      )));
      console.log(photo)
  };
  const decreaseLikeCount = (index) => {
      setPhoto((prevPhoto) => prevPhoto.map((item, i) => (
          i === index
              ? { ...item, likeCount: item.likeCount - 1 }
              : item
      )));
  };

  // const nextPhoto = () => {
  //   setSelectedItemIndex((prevIndex) => (prevIndex + 1) % photo.length);
  // };

  // const prevPhoto = () => {
  //   setSelectedItemIndex((prevIndex) => (prevIndex - 1 + photo.length) % photo.length);
  // };

  return (
      <div className='profile__photo'>
          <PhotoModal
              className={`${photoModal ? 'modal modal_active' : 'modal'}`}
              showComments={showComments}
              setShowComments={setShowComments}
              selectedItemIndex={selectedItemIndex}
              setSelectedItemIndex={setSelectedItemIndex}
              photoInfo={photo}
              setPhotoInfo={setPhoto}
              increaseLikeCount={increaseLikeCount} decreaseLikeCount={decreaseLikeCount}
              onClick={showPhotoModal}
              pressedLike={pressedLike} setPressedLike={setPressedLike}
              // nextPhoto={nextPhoto} prevPhoto={prevPhoto}
          />
          <span className='profile__photo-text'>Photos {photo.length}</span>
          <div className='profile__photo-box'>
              {photo.map((item, index) =>
                  <img onClick={() => showPhotoModal(true, index)} key={index} src={item.img} alt="" />
              )}
          </div>
          <div className="profile__photo-buttons">
              <AddPhotoModal
                className={`${addPhotoModalShow ? 'modal modal_active' : 'modal'}`}
                onClick={showAddPhotoModal}
              />
              <MyButton
               className="profile__photos-button" style={{ minWidth: "40%" }}
               onClick={() => showAddPhotoModal(true)}
               >Добавить фото</MyButton>
               <ViewAllPhotoModal
                  className={`${viewAllPhotoModalShow ? 'modal modal_active' : 'modal'}`}
                  onClick={showViewAllPhotoModal}        
                  photoInfo={photo}        
               />
              <MyButton
               className="profile__photos-button" style={{ minWidth: "40%" }}
               onClick={() => showViewAllPhotoModal(true)}
               >Посмотреть все фото</MyButton>
          </div>
      </div>
  )
}
