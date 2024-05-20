import React, {useContext, useRef} from 'react'
import ava from '../../images/other/ава.jpg'
import MyLink from '../UI/link/MyLink'
import MyInput from '../UI/input/MyInput'
import MyFileInput from '../UI/input/MyFileInput'
import MyButton from '../UI/button/MyButton'
import {LanguageContext} from "../../context/language"
import { fetchPost } from '../../APi/fetch'

export default function InfoAddModal({className, onClick}) {
  const {strings} = useContext(LanguageContext);

  const fileInput = useRef();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const patronymicInput = useRef();
  const placeOfResidenceInput = useRef();
  const familyStatusInput = useRef();
  const tellAboutYourselfTextArea = useRef();

  const addData = (event) => {
    event.preventDefault()
    console.log("submit")

    let avatar, firstName, lastName, patronymic, placeOfResidence, familyStatus, aboutYourself;

    avatar = fileInput.current.value;
    firstName = firstNameInput.current.value;
    lastName = lastNameInput.current.value;
    patronymic = patronymicInput.current.value;
    placeOfResidence = placeOfResidenceInput.current.value;
    familyStatus = familyStatusInput.current.value;
    aboutYourself = tellAboutYourselfTextArea.current.value;

    const data = {
      avatar: avatar,
      firstName: firstName,
      lastName: lastName,
      patronymic: patronymic,
      placeOfResidence: placeOfResidence,
      familyStatus: familyStatus,
      aboutYourself: aboutYourself,
    }

    const result = fetchPost(data, "jf");
    result  && (className = "modal");
  }

  return (
    <div className={`${className}`} onClick={() => onClick(false)}>
      <svg onClick={() => onClick(false)} className='modal__close' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1665 12.008L20.762 4.43822C21.0793 4.11791 21.0793 3.599 20.762 3.27868C20.4503 2.95264 19.9355 2.94285 19.6118 3.2568L12.0163 10.8266L4.51839 3.2568C4.36467 3.09288 4.15078 3 3.92702 3C3.70327 3 3.48938 3.09288 3.33566 3.2568C3.0543 3.56628 3.0543 4.04123 3.33566 4.35071L10.8335 11.9096L3.238 19.4685C2.92067 19.7888 2.92067 20.3077 3.238 20.628C3.38907 20.784 3.59685 20.871 3.81309 20.8687C4.03351 20.8867 4.25202 20.8159 4.42074 20.6718L12.0163 13.102L19.6118 20.7593C19.7629 20.9153 19.9707 21.0022 20.1869 21C20.4029 21.001 20.6102 20.9142 20.762 20.7593C21.0793 20.439 21.0793 19.9201 20.762 19.5998L13.1665 12.008Z" fill="#6750A4"/>
      </svg>
      <div className='modal__content infoAddModal' onClick={event => event.stopPropagation()}>
        <form onSubmit={addData}>
          <div className="infoAddModal__img-box">
            <img className='infoAddModal__img' src={ava} alt="#" />
            <input ref={fileInput} className='infoAddModal__input_file' id="infoAddModalFileInput" type="file"/>
            <label className='infoAddModal__label_file'  for="infoAddModalFileInput">
              <svg  className='infoAddModal__img-icon'  stroke='rgba(103, 80, 164, 0.8)' stroke-width="1.5" width="7vh" height="7vh" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7142 15.9807C17.7142 18.0333 16.0526 19.6949 14 19.6949C11.9474 19.6949 10.2858 18.0333 10.2858 15.9807C10.2858 13.9281 11.9474 12.2665 14 12.2665C16.0526 12.2665 17.7142 13.9281 17.7142 15.9807ZM25.315 6.67229C26.7984 6.67229 28 7.87393 28 9.3573V16.3947V22.3626C28 23.9438 26.7179 25.2259 25.1368 25.2259H2.86324C1.28214 25.2259 0 23.9438 0 22.3626V16.3889V9.3573C0 7.87393 1.20164 6.67229 2.68501 6.67229H8.05503L8.30801 5.60289C8.69322 3.94703 10.1708 2.77414 11.8727 2.77414H16.1331C17.8349 2.77414 19.3125 3.94703 19.6977 5.60289L19.945 6.67229H25.315ZM5.6 10.5474C5.6 9.80576 4.9963 9.20207 4.25462 9.20207C3.50719 9.20207 2.90349 9.80576 2.90349 10.5474C2.90349 11.2891 3.50719 11.8928 4.24887 11.8928C4.9963 11.8986 5.6 11.2949 5.6 10.5474ZM20.6234 15.9807C20.6234 12.324 17.6567 9.3573 14 9.3573C10.3433 9.3573 7.37659 12.324 7.37659 15.9807C7.37659 19.6374 10.3433 22.6041 14 22.6041C17.6567 22.6041 20.6234 19.6374 20.6234 15.9807Z" fill="none"/>
              </svg>
            </label>
          </div>
          <hr className="infoAddModal__hr"/>
          <div className="infoAddModal__item">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.firstName}</label>
            <input ref={firstNameInput} className="infoAddModal__input" id='uresnameInput'/>
          </div>
          <div className="infoAddModal__item">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.lastName}</label>
            <input ref={lastNameInput} className="infoAddModal__input" id='uresnameInput'/>
          </div>
          <div className="infoAddModal__item">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.patronymic}</label>
            <input ref={patronymicInput} className="infoAddModal__input" id='uresnameInput'/>
          </div>
          <div className="infoAddModal__item">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.placeOfResidence}</label>
            <input ref={placeOfResidenceInput} className="infoAddModal__input" id='uresnameInput'/>
          </div>
          <div className="infoAddModal__item">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.familyStatus}</label>
            <input ref={familyStatusInput} className="infoAddModal__input" id='uresnameInput'/>
          </div>
          <div className="infoAddModal__item infoAddModal__item_textarea">
            <label className="infoAddModal__label"  for='uresnameInput'>{strings.tellAboutYourself}</label>
            <textarea ref={tellAboutYourselfTextArea} className="infoAddModal__input infoAddModal__textarea" id=""></textarea>
          </div>
          <MyButton style={{position: 'relative', left: '50%', transform: "translateX(-50%)", marginTop: '15px'}}>
            {strings.save}
          </MyButton>
        </form>
      </div>
  </div>
  )
}
