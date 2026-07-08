import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { translations, getTranslation } from '../Utils/Languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('jci-language') || 'en';
    setLanguage(savedLanguage);
    setIsInitialized(true);
    document.documentElement.setAttribute('lang', savedLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('jci-language', newLang);
    document.documentElement.setAttribute('lang', newLang);
  }, [language]);

  const setEnglish = useCallback(() => {
    setLanguage('en');
    localStorage.setItem('jci-language', 'en');
    document.documentElement.setAttribute('lang', 'en');
  }, []);

  const setFrench = useCallback(() => {
    setLanguage('fr');
    localStorage.setItem('jci-language', 'fr');
    document.documentElement.setAttribute('lang', 'fr');
  }, []);

  const getText = useCallback((section, key) => {
    try {
      const path = `${section}.${key}`;
      const translation = getTranslation(language, path, key);
      return translation;
    } catch (error) {
      console.warn(`Translation missing for ${section}.${key}`);
      return key;
    }
  }, [language]);

  const getNestedText = useCallback((path, defaultValue = '') => {
    try {
      const translation = getTranslation(language, path, defaultValue);
      return translation;
    } catch (error) {
      return defaultValue;
    }
  }, [language]);

  const value = useMemo(() => ({
    language,
    toggleLanguage,
    setEnglish,
    setFrench,
    translations,
    getText,
    getNestedText,
    isFrench: language === 'fr',
    isEnglish: language === 'en',
    isInitialized
  }), [language, toggleLanguage, setEnglish, setFrench, getText, getNestedText, isInitialized]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};