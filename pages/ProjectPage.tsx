
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Projeto não encontrado</h2>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Voltar para o início
        </Link>
      </div>
    );
  }

  const otherProjects = PROJECTS.filter(p => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <article className="bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Voltar para a página anterior"
          >
            <ArrowLeftIcon />
            Voltar
          </button>
          
          <div className="space-y-2 mb-8">
              <p className="text-base text-gray-500 dark:text-gray-400">{project.tags.join(' / ')}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">{project.title}</h1>
              <span className="text-gray-400 dark:text-gray-500 text-lg">{project.year}</span>
          </div>

          <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-12 shadow-lg">
            <img 
              src={project.imageUrl} 
              alt={`Imagem principal do projeto ${project.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="lead">{project.longDescription}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.galleryImages.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Galeria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow">
                    <img 
                      src={image} 
                      alt={`Imagem ${index + 1} da galeria do projeto ${project.title}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.videoUrl && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Vídeo do Projeto</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <video controls src={project.videoUrl} className="w-full h-full bg-black">
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-black/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Outros Projetos</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectPage;