import React, { useState } from 'react';
import LocalizedStrings from 'react-localization';
import { createContext } from "react"

export const LanguageContext = createContext();

let strings = new LocalizedStrings({
    en: {
        messenger: "Messenger",
        settings: "Settings",
        friends: "Friends",
        recommendations: "Recommendations",
        communities: "Communities",
        news: "News",
    },
    ru: {
        messenger: "Мессенджер",
        settings: "Настройки",
        friends: "Друзья",
        recommendations: "Рекомендации",
        communities: "Сообщества",
        news: "Новости",
    }
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(strings.getInterfaceLanguage());
    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        strings.setLanguage(newLanguage);
        setLanguage(newLanguage);
    };
    
    return (
        <LanguageContext.Provider value={{ strings, changeLanguage, language }}>
            {children}
        </LanguageContext.Provider>
  );
};
