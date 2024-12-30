import i18next from "i18next";  

// Импортируем переводы из JSON файлов  
import uzTranslations from "./locales/uz/translation.json";  // Путь к узбекскому  
import ruTranslations from "./locales/ru/translation.json";  // Путь к русскому  
import enTranslations from "./locales/eng/translation.json"; // Путь к английскому  

// Инициализация i18next  
i18next.init({  
  lng: "uz", // Устанавливаем язык по умолчанию  
  fallbackLng: "uz", // Язык по умолчанию, если перевода нет  
  resources: {  
    uz: {  
      translation: uzTranslations,  
    },  
    ru: {  
      translation: ruTranslations,  
    },  
    en: {  
      translation: enTranslations,  
    },  
  },  
  interpolation: {  
    escapeValue: false, // Не экранируем значения  
  },  
});  

export default i18next;