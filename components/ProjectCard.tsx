
import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block"
      aria-label={`Ver detalhes do projeto ${project.title}`}
    >
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
        <img
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {project.tags.join(', ')} &mdash; {project.year}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;