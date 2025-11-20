import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppData } from '../types';
import dataBr from '../resources/data_br.json';
import dataEng from '../resources/data_eng.json';

type Language = 'br' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    data: AppData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLang = localStorage.getItem('language');
        return (savedLang === 'br' || savedLang === 'en') ? savedLang : 'br';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const data: AppData = (language === 'br' ? dataBr : dataEng) as AppData;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, data }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
