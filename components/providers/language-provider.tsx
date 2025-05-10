'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'mn' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'mn',
  setLanguage: () => {},
  t: (key) => key,
});

const translations: Record<Language, Record<string, string>> = {
  mn: {
    'app.title': 'Мэдээллийн Портал',
    'dashboard': 'Нүүр хуудас',
    'news': 'Мэдээ',
    'chat': 'Ухаалаг туслах',
    'performance': 'Гүйцэтгэл',
    'settings': 'Тохиргоо',
    'weather': 'Цаг агаар',
    'currency': 'Валютын ханш',
    'fuel': 'Шатахууны үнэ',
    'food': 'Хүнсний үнэ',
    'featured': 'Онцлох мэдээ',
    'signin': 'Нэвтрэх',
    'signup': 'Бүртгүүлэх',
    'search': 'Хайх...',
    'chat.placeholder': 'Асуултаа энд бичнэ үү...',
    'chat.send': 'Илгээх',
    'languages': 'Хэл',
    'theme': 'Харагдах байдал',
    'dark': 'Харанхуй',
    'light': 'Гэрэлтэй',
    'system': 'Системийн',
  },
  en: {
    'app.title': 'Information Portal',
    'dashboard': 'Home page',
    'news': 'News',
    'chat': 'Smart Assistant',
    'performance': 'Performance',
    'settings': 'Settings',
    'weather': 'Weather',
    'currency': 'Currency Exchange',
    'fuel': 'Fuel Prices',
    'food': 'Food Prices',
    'featured': 'Featured News',
    'signin': 'Sign In',
    'signup': 'Sign Up',
    'search': 'Search...',
    'chat.placeholder': 'Type your question here...',
    'chat.send': 'Send',
    'languages': 'Languages',
    'theme': 'Theme',
    'dark': 'Dark',
    'light': 'Light',
    'system': 'System',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('mn');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'mn' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const translate = (key: string) => {
    return translations[language][key] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);