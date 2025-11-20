import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectGrid';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { data } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight"
        >
          {data.home.title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
        >
          {data.home.description}
        </motion.p>
      </div>
      <ProjectGrid />
    </motion.div>
  );
};

export default HomePage;