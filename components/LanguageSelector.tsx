import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setLanguage('br')}
                className={`p-1.5 rounded-lg transition-all duration-200 ${language === 'br'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 ring-2 ring-indigo-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 grayscale hover:grayscale-0'
                    }`}
                aria-label="Mudar para Português"
                title="Português (Brasil)"
            >
                <img
                    src="https://flagcdn.com/w40/br.png"
                    srcSet="https://flagcdn.com/w80/br.png 2x"
                    alt="Brasil"
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                />
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`p-1.5 rounded-lg transition-all duration-200 ${language === 'en'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 ring-2 ring-indigo-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 grayscale hover:grayscale-0'
                    }`}
                aria-label="Switch to English"
                title="English (US)"
            >
                <img
                    src="https://flagcdn.com/w40/us.png"
                    srcSet="https://flagcdn.com/w80/us.png 2x"
                    alt="USA"
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                />
            </button>
        </div>
    );
};

export default LanguageSelector;
