import pageTranslations from './LanguagePages';
import componentTranslations from './LanguageComponents';

export const translations = {
  en: {
    ...pageTranslations.en,
    ...componentTranslations.en,
  },
  fr: {
    ...pageTranslations.fr,
    ...componentTranslations.fr,
  },
};

export const getPageTranslations = (language = 'en', page = null) => {
  const langTranslations = translations[language] || translations.en;
  
  if (page && langTranslations[page]) {
    return langTranslations[page];
  }
  
  return langTranslations;
};

export const getComponentTranslations = (language = 'en', component = null) => {
  const langTranslations = componentTranslations[language] || componentTranslations.en;
  
  if (component && langTranslations[component]) {
    return langTranslations[component];
  }
  
  return langTranslations;
};

export const getTranslation = (language, path, defaultValue = '') => {
  try {
    const parts = path.split('.');
    let value = translations[language] || translations.en;
    
    for (const part of parts) {
      if (value && value[part] !== undefined) {
        value = value[part];
      } else {
        return defaultValue;
      }
    }
    
    return value;
  } catch (error) {
    return defaultValue;
  }
};

export const getFooterTranslations = (language = 'en') => {
  return componentTranslations[language]?.footer || componentTranslations.en.footer;
};

export const getHeaderTranslations = (language = 'en') => {
  return componentTranslations[language]?.header || componentTranslations.en.header;
};

export const getToggleTranslations = (language = 'en') => {
  return componentTranslations[language]?.toggleButtons || componentTranslations.en.toggleButtons;
};

export const getPrivacyTranslations = (language = 'en') => {
  return componentTranslations[language]?.privacyPolicy || componentTranslations.en.privacyPolicy;
};

export const getTermsTranslations = (language = 'en') => {
  return componentTranslations[language]?.termsOfService || componentTranslations.en.termsOfService;
};

export default translations;