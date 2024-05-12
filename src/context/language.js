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

        singIn: "Sing-in",
        singUp: "Sing-up",
        forgotPass: "Forgot your password?",
        pass: "password",
        repeatPass: "repeat password",
        login: "login",
        doSingIn: "Sing-in",
        doSingUp: "Sing-up",
        valPassLength: "Password length is less than eight characters",
        valPassLetters: "The password must include upper and lowercase letters of the Latin alphabet",
        valPassSymbols: "The password must include any two characters",
        valRepPass: "Password mismatch",

    },
    ru: {
        messenger: "Мессенджер",
        settings: "Настройки",
        friends: "Друзья",
        recommendations: "Рекомендации",
        communities: "Сообщества",
        news: "Новости",

        singIn: "Авторизация",
        singUp: "Регистрация",
        forgotPass: "Забыли пароль",
        pass: "пароль",
        repeatPass: "повторите пароль",
        login: "логин",
        doSingIn: "Войти",
        doSingUp: "Зарегестрироваться",
        valPassLength: "Длина пароля меньше восьми символов",
        valPassLetters: "Пароль должен включать заглавную и строчную буквы латинского алфавита",
        valPassSymbols: "Пароль должен включать два любых знака",
        valRepPass: "Пароли не совпадают",



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
