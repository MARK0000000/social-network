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
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="5" fill="#6750A4"/>
        <path d="M12.7727 13.2727C12.7045 12.697 12.428 12.25 11.9432 11.9318C11.4583 11.6136 10.8636 11.4545 10.1591 11.4545C9.64394 11.4545 9.19318 11.5379 8.80682 11.7045C8.42424 11.8712 8.125 12.1004 7.90909 12.392C7.69697 12.6837 7.59091 13.0152 7.59091 13.3864C7.59091 13.697 7.66477 13.964 7.8125 14.1875C7.96402 14.4072 8.1572 14.5909 8.39205 14.7386C8.62689 14.8826 8.87311 15.0019 9.13068 15.0966C9.38826 15.1875 9.625 15.2614 9.84091 15.3182L11.0227 15.6364C11.3258 15.7159 11.6629 15.8258 12.0341 15.9659C12.4091 16.1061 12.767 16.2973 13.108 16.5398C13.4527 16.7784 13.7367 17.0852 13.9602 17.4602C14.1837 17.8352 14.2955 18.2955 14.2955 18.8409C14.2955 19.4697 14.1307 20.0379 13.8011 20.5455C13.4754 21.053 12.9981 21.4564 12.3693 21.7557C11.7443 22.0549 10.9848 22.2045 10.0909 22.2045C9.25758 22.2045 8.53598 22.0701 7.92614 21.8011C7.32008 21.5322 6.8428 21.1572 6.49432 20.6761C6.14962 20.1951 5.95455 19.6364 5.90909 19H7.36364C7.40152 19.4394 7.54924 19.803 7.80682 20.0909C8.06818 20.375 8.39773 20.5871 8.79545 20.7273C9.19697 20.8636 9.62879 20.9318 10.0909 20.9318C10.6288 20.9318 11.1117 20.8447 11.5398 20.6705C11.9678 20.4924 12.3068 20.2462 12.5568 19.9318C12.8068 19.6136 12.9318 19.2424 12.9318 18.8182C12.9318 18.4318 12.8239 18.1174 12.608 17.875C12.392 17.6326 12.108 17.4356 11.7557 17.2841C11.4034 17.1326 11.0227 17 10.6136 16.8864L9.18182 16.4773C8.27273 16.2159 7.55303 15.8428 7.02273 15.358C6.49242 14.8731 6.22727 14.2386 6.22727 13.4545C6.22727 12.803 6.40341 12.2348 6.75568 11.75C7.11174 11.2614 7.58902 10.8826 8.1875 10.6136C8.78977 10.3409 9.46212 10.2045 10.2045 10.2045C10.9545 10.2045 11.6212 10.339 12.2045 10.608C12.7879 10.8731 13.25 11.2367 13.5909 11.6989C13.9356 12.161 14.1174 12.6856 14.1364 13.2727H12.7727ZM25.8395 10.3636V22H24.4759L18.1349 12.8636H18.0213V22H16.6122V10.3636H17.9759L24.3395 19.5227H24.4531V10.3636H25.8395Z" fill="white"/>
        </svg>
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