import React, {useContext} from 'react'
import { LanguageContext } from '../../context/language';
import { ThemeContext } from '../../context/theme';

export default function Header() {

    const { strings, changeLanguage, language} = useContext(LanguageContext);
    const {theme, changeTheme, setTheme} = useContext(ThemeContext)
  

  return (
    <header className="header">
      <div className='header__container'>
        <div className='logo'>
          Social Network
        </div>
        <div className='header__content'> 
          <div className='color-theme'>
            <span className='color-theme__text'>Theme:</span>
            <button className={`color-theme__btn ${theme === 'dark' ? '' : 'color-theme__btn_right'}`} onClick={changeTheme}>
              <div className="color-theme__item"></div>
            </button>
          </div>
          <div className='changeLanguage'>
            <span className='changeLanguage__button' onClick={changeLanguage}>
              {`${language == 'ru-RU' && 'ru' || language} `}
            </span>
          </div>
          <div className='profile_header'>
            <img src="" alt="#" className='profile_header__img'/>
            <p>Mark Shkolnik</p>
          </div>
        </div>
      </div>
    </header>
  )
}
