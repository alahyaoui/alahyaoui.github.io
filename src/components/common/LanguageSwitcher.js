import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style/languageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'nl', name: 'Nederlands' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLanguage.name}
      </button>
      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-switcher__option ${language.code === currentLanguage.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 