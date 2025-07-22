import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 flex-shrink-0">
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
          currentLang === 'en' 
            ? 'bg-navy-800 text-white hover:bg-navy-700' 
            : 'text-gray-600 hover:text-navy-800 hover:bg-transparent'
        }`}
        onClick={() => switchLanguage('en')}
      >
        🇬🇧 EN
      </Button>
      <Button
        variant={currentLang === 'ua' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
          currentLang === 'ua' 
            ? 'bg-navy-800 text-white hover:bg-navy-700' 
            : 'text-gray-600 hover:text-navy-800 hover:bg-transparent'
        }`}
        onClick={() => switchLanguage('ua')}
      >
        🇺🇦 UA
      </Button>
    </div>
  );
}
