import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [

];

const ProjectCard = ({ project, onClick }) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-2 row-span-2',
  };

  return (
    <div
      className={`relative overflow-hidden  border-4 border-indigo-600 group shadow-lg ${sizeClasses[project.size]} cursor-pointer`}
      onClick={() => onClick(project)}
    >
      <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-2">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-[100000] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="relative w-full h-auto flex-shrink-0 min-h-[100px] ">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white  bg-black bg-opacity-50 rounded-full p-2 z-10"
          >
            <X size={24}/>
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft size={24}/>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight size={24}/>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="overflow-y-auto relative flex-grow ">
          <div className="flex flex-col md:flex-row  p-4 rounded-lg ">
            <div className="w-full md:w-1/2 p-4 z-[1000000000]">
                <h2 className="text-sm mb-4">Les</h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
                <span
                  className="inline-block uppercase relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Objectif
                </span>
                </h1>
            <ul className="list-disc pl-5 space-y-2 text-black">
              {project.objectifs.map((objectif, index) => (
                <li key={index}>{objectif}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 z-[1000000000] bg-gray-800 rounded-lg mt-4 md:mt-0">
            <h2 className="text-sm mb-4">Les</h2>
            <h1 className="text-4xl uppercase sm:text-5xl md:text-6xl font-black mb-12">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  Réponse
                </span>
            </h1>
            <ul className="list-disc pl-5 space-y-2  text-black">
                {project.reponses.map((reponse, index) => (
                  <li key={index}>{reponse}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full mt-4 z-[1000000000]  flex flex-col md:flex-row justify-between bg-gray-100 p-4 rounded-lg">
            <div className="md:w-1/2 p-4 z-[1000000000] ">
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  CLIENT
                </span>
              </h1>
              <p className="text-black font-bold mb-5">{project.client}</p>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  CATÉGORIE
                </span>
              </h1>
              <p className="text-black font-bold ">{project.category}</p>
            </div>
            <div className="md:w-1/2 p-4 z-[1000000000]">
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  TECHNO
                </span>
              </h1>
              <p className="text-black font-bold ">{project.techno}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  p-4 rounded-lg ">
          <div className="w-full  p-4 z-[1000000000]">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
                <span
                  className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                                    RÉSULTATS DU PROJET
                </span>
            </h1>
            <ul className="list-disc pl-5 space-y-2 text-black">
              {project.resultats.map((resultat, index) => (
                <li key={index}>{resultat}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Prestashop = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full mx-auto px-4 max-w-c-1390 mt-40 my-10">
      <div className="w-full mx-auto max-w-c-1390 mt-40 my-10 flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-sm uppercase mb-4">Un Aperçu de Notre</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
        Expertise PrestaShop
      </span>
          </h1>
          <p className="text-gray-600 mb-4 text-justify">
            Notre équipe PrestaShop est composée de membres passionnés ayant plus de&nbsp;
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        6 ans d'expérience dans le domaine.
      </span>
            &nbsp;Cette expertise leur permet de maîtriser les subtilités de la plateforme et d'apporter des solutions
            adaptées aux besoins de nos clients. Ils s'engagent à suivre les meilleures pratiques de l'industrie, en
            assurant
            une formation continue et une veille technologique constante. Grâce à leur expérience, notre équipe est
            toujours à
            jour avec les dernières avancées de PrestaShop, ce qui nous permet de vous offrir des solutions innovantes
            et
            performantes.
          </p>
          <p className="text-gray-600 mb-4 text-justify">
            Choisir notre équipe pour vos projets et missions PrestaShop est la meilleure décision pour garantir des
            résultats
            de qualité. Que vous ayez besoin de développer un site web sur mesure, d'optimiser une plateforme existante
            ou
            d'assurer la maintenance de votre infrastructure, notre expertise vous assure des solutions robustes et
            performantes qui répondent parfaitement à vos besoins spécifiques.
          </p>
        </div>

        <div className="w-full md:w-2/5 flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            <div className="w-full">
              <h2 className="text-sm uppercase mb-4">POURQUOI CHOISIR</h2>
              <h1 className="text-3xl font-black mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            PrestaShop
          </span>
              </h1>
              <p className="text-gray-600 text-justify">
                PrestaShop est une solution open source de gestion de boutique en ligne, reconnue pour sa flexibilité,
                sa
                simplicité d’utilisation et son large éventail de fonctionnalités. Voici quelques raisons pour
                lesquelles
                choisir PrestaShop pour votre projet e-commerce
              </p>
              <div className="flex flex-wrap mt-5 gap-4 text-center">
                <div className="bg-gray-100 border border-indigo-600 shadow-md py-10 rounded w-[150px]">
                  <div className="text-3xl font-bold text-blue-600">300K+</div>
                  <div className="text-sm text-gray-500">boutiques en ligne</div>
                </div>
                <div className="bg-gray-100 border border-indigo-600 shadow-md py-10 rounded w-[150px]">
                  <div className="text-3xl font-bold text-blue-600">>75</div>
                  <div className="text-sm text-gray-500">langues supportées</div>
                </div>
                <div className="bg-gray-100 border border-indigo-600 shadow-md py-10 rounded w-[150px]">
                  <div className="text-3xl font-bold text-blue-600">+5000</div>
                  <div className="text-sm text-gray-500">modules et thèmes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={handleProjectClick}/>
        ))}
      </div>

      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup}/>}
    </section>
  );
};

export default Prestashop;
