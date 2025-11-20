import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from 'lucide-react';
import { projects } from '../constants';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Projeto não encontrado</h2>
          <Link to="/trabalhos" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
            Voltar para trabalhos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Voltar
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border border-gray-100 dark:border-gray-800">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {project.galleryImages.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
              {project.year}
            </div>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Tag className="w-4 h-4 mr-2 text-indigo-500" />
              {project.tags.join(', ')}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert mb-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.longDescription}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.projectUrl && (
            <div className="flex gap-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Projeto
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
