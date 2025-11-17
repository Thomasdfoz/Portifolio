
import React from 'react';

const skills = {
  'Design': ['UI/UX Design', 'Design Systems', 'Prototipagem', 'Branding'],
  'Desenvolvimento': ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'GraphQL'],
  'Ferramentas': ['Figma', 'Sketch', 'Git', 'Storybook', 'Jira'],
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Sobre Mim
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              Designer e desenvolvedor apaixonado por criar experiências digitais intuitivas e visualmente atraentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1">
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden shadow-lg mx-auto max-w-[250px] md:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?q=80&w=800&auto=format&fit=crop"
                  alt="Foto de perfil profissional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Olá, sou [Seu Nome]</h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Com mais de X anos de experiência na indústria de tecnologia, meu trabalho é focado na interseção entre design e engenharia de software. Eu acredito que os melhores produtos são construídos com uma base sólida de empatia pelo usuário, atenção aos detalhes e código limpo e escalável.
                </p>
                <p>
                  Minha jornada começou com design gráfico, mas rapidamente me apaixonei pelo poder da web para conectar pessoas e resolver problemas complexos. Hoje, atuo de ponta a ponta no ciclo de vida de um produto, desde a concepção e prototipagem em Figma até a implementação com as tecnologias mais modernas do ecossistema JavaScript.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Minhas Competências</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map(skill => (
                      <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;