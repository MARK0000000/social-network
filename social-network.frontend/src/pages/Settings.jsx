import React, {useContext} from 'react'
import { LanguageContext } from '../context/language';
import { ThemeContext } from '../context/theme';
import { useAuth } from '../hooks/useAuth';

export default function Settings() {
  const {strings, language, changeLanguage} = useContext(LanguageContext);
  const {logout} = useAuth()
  const {theme, changeTheme, setTheme} = useContext(ThemeContext)


  return (
    <section className='settings'>
      <div className='settings__item'>
        <h3 className="settings__text">{strings.logOut}</h3>
        <svg className='settings__logOut' onClick={() => logout()} width="32" height="32" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.9711 20.082C40.5655 19.7336 40.3322 19.2255 40.3322 18.6908V10.2508C40.3322 7.48942 38.0936 5.25084 35.3322 5.25084H8.66783C5.90641 5.25084 3.66783 7.48942 3.66783 10.2508V52.7492C3.66783 55.5106 5.90641 57.7492 8.66783 57.7492H35.3322C38.0936 57.7492 40.3322 55.5106 40.3322 52.7492V44.2992C40.3322 43.7645 40.5655 43.2565 40.9711 42.9081V42.9081C42.1604 41.8866 44 42.7315 44 44.2992V58C44 60.7614 41.7614 63 39 63H5C2.23858 63 0 60.7614 0 58V5C0 2.23858 2.23858 0 5 0H39C41.7614 0 44 2.23858 44 5V18.6908C44 20.2585 42.1604 21.1034 40.9711 20.082V20.082Z" fill="#6750A4"/>
        <path d="M69.908 32.2355C70.5598 31.8479 70.5598 30.9041 69.908 30.5165L47.6729 17.2936C47.0063 16.8972 46.1617 17.3776 46.1617 18.1531V27.751C46.1617 28.3033 45.714 28.751 45.1617 28.751H13C12.4477 28.751 12 29.1987 12 29.751V33C12 33.5523 12.4477 34 13 34H45.1617C45.714 34 46.1617 34.4477 46.1617 35V44.5979C46.1617 45.3735 47.0062 45.8538 47.6728 45.4574L69.908 32.2355Z" fill="#6750A4"/>
        </svg>
      </div>
      <div className='settings__item'>
        <h3 className="settings__text">{strings.setLanguagee}</h3>
        <div className='changeLanguage changeLanguage_settings'>
            <span className='changeLanguage__button' onClick={changeLanguage}>
              {`${language == 'ru-RU' && 'ru' || language} `}
            </span>
        </div>
      </div>
      <div className='settings__item'>
        <h3 className="settings__text">{strings.setColorTheme}</h3>
        <div className='color-theme color-theme_settings'>
            <span className={`color-theme__text color-theme__text_settings ${theme == 'dark' && 'color-theme__text_active'}`}>{strings.dark}</span>
            <button className={`color-theme__btn color-theme__btn_settings ${theme === 'dark' ? '' : 'color-theme__btn_right'}`} onClick={changeTheme}>
              <div className="color-theme__item"></div>
            </button>
            <span className={`color-theme__text color-theme__text_settings ${theme == 'light' && 'color-theme__text_active'}`}>{strings.light}</span>
        </div>
      </div>
    </section>
  )
}
