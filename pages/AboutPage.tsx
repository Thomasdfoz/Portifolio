import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { data } = useLanguage();
  const { profile, skills } = data;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 p-1 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-gray-900 object-cover"
            />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-medium mb-6">
            {profile.role}
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {profile.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-12 prose prose-lg dark:prose-invert max-w-none">
            {profile.about.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-indigo-500" />
            {data.labels.skills}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  {category === 'Design' ? <PenTool className="w-5 h-5 mr-2 text-pink-500" /> :
                    category === 'Frontend' ? <Code className="w-5 h-5 mr-2 text-blue-500" /> :
                      <Terminal className="w-5 h-5 mr-2 text-green-500" />}
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/trabalhos"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {data.labels.viewProjects}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
