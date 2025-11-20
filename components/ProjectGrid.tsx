import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProjectGrid: React.FC = () => {
  const { data } = useLanguage();
  const { projects } = data;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
