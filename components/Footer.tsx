import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { data } = useLanguage();
  const { profile, footer } = data;
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{profile.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              {profile.headline}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={profile.social.itchio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110"
                aria-label="Itch.io"
              >
                <Gamepad2 className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {profile.name}. {footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
