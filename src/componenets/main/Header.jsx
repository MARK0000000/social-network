import React, {useContext} from 'react'
import { LanguageContext } from '../../context/language';
import { ThemeContext } from '../../context/theme';
import { useNavigate } from 'react-router-dom';
import ava from '../../images/other/ава.jpg'
import Avatar from '../UI/avatar/Avatar';

export default function Header() {
    const navigate = useNavigate()
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
          <div className='profile_header' onClick={() => navigate('profile', { replace: false })}>
            <Avatar className="profile_header__img" photo={ava}/>
            <p>Mark Shkolnik</p>
          </div>
          <svg onClick={() => navigate('settings', { replace: false })} className='header__settings' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.90001 1.83023 9.09001 2.20023 8.47001L4.05023 5.28001C4.39023 4.66001 5.16023 4.38001 5.84023 4.65001L7.65023 5.38001C7.91023 5.21001 8.17023 5.06001 8.43023 4.92001L8.70023 3.01001C8.79023 2.31001 9.41023 1.76001 10.1402 1.76001H13.8402C14.5802 1.76001 15.2002 2.30001 15.2902 3.03001L15.5602 4.92001C15.8302 5.06001 16.0902 5.21001 16.3502 5.38001L18.1502 4.66001C18.8602 4.40001 19.6302 4.69001 19.9702 5.31001L21.8102 8.49001C22.1702 9.15001 22.0102 9.93001 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08001L18.4402 6.68001L16.0502 7.64001L15.6002 7.29001C15.1802 6.97001 14.7302 6.71001 14.2702 6.52001L13.7502 6.30001L13.3802 3.75001H10.6202L10.2502 6.30001L9.72023 6.51001C9.28023 6.70001 8.84023 6.95001 8.38023 7.30001L7.93023 7.63001L5.55023 6.68001L4.16023 9.07001L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.50001 12.0002 8.50001C13.9332 8.50001 15.5002 10.067 15.5002 12Z" fill="#6750A4"/>
          </svg>
        </div>
      </div>
    </header>
  )
}
