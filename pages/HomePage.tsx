
import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          Meu Trabalho
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
          Uma seleção de projetos que demonstram minha paixão por design e desenvolvimento.
        </p>
      </div>
      <div className="mt-16">
        <ProjectGrid />
      </div>
    </div>
  );
};

export default HomePage;