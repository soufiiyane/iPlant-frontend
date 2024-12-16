import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    "id": 1,
    "name": "MYM",
    "images": [
      "images/realisations/symfony/mym/mym-1.png",
      "images/realisations/symfony/mym/mym-2.png",
      "images/realisations/symfony/mym/mym-3.png"
    ],
    "category": "Social Networking",
    "size": "medium",
    "client": "MYM",
    "techno": "Symfony 5.4, PHP 8.1, ApiPlatform 2.6, PostgreSQL, Mercure, Amazon SQS messenger, AWS S3...",
    "objectifs": [
      "Digitaliser la plateforme pour une interaction créateur-fan unique.",
      "Construire une stratégie de contenu engageant et personnalisé.",
      "Optimiser l'expérience utilisateur pour maximiser l'engagement.",
      "Accroître la visibilité des créateurs et de leurs contenus exclusifs.",
      "Faciliter l'acquisition de nouveaux fans et l'augmentation de l'interaction."
    ],
    "reponses": [
      "Développement de la plateforme sociale pour les créateurs et fans.",
      "Mise en place d'une stratégie de contenu adaptée aux utilisateurs.",
      "Intégration de fonctionnalités de monétisation pour les créateurs.",
      "Optimisation des performances pour un accès rapide et fluide.",
      "Amélioration des outils de communication entre créateurs et fans."
    ],
    "resultats": [
      "Augmentation significative de l'engagement des utilisateurs.",
      "Croissance du nombre de créateurs et de fans sur la plateforme.",
      "Amélioration des taux de conversion pour les contenus payants.",
      "Renforcement de la communauté autour des créateurs."
    ]
  },
  {
    id: 1,
    name: 'Touristra Vacances',
    images: [
      'images/realisations/symfony/touristra/touristra-1.png',
      'images/realisations/symfony/touristra/touristra-2.png',
      'images/realisations/symfony/touristra/touristra-3.png'
    ],
    category: 'Travel',
    size: 'medium',
    client: 'Touristra Vacances',
    techno: 'Symfony 4.4, PHP 7.1, Symfony 3.4, FOSRestBundle, MySQL, PostgreSQL, OpenApi, Expo push notifications...',
    objectifs: [
      '[OEA] Création de Back Office multi site',
      '[OEA] Gestion et génération des documents',
      '[AMFE] Création de Back Office et API',
      '[Touristra] Ajout de fonctionnalités manquantes'
    ],
    reponses: [
      'Développement d’un Back Office multi-site permettant la gestion centralisée de plusieurs villages de vacances.',
      'Mise en place d’un système de génération automatique de documents pour simplifier les processus administratifs.',
      'Création d’API pour faciliter l’intégration avec d’autres systèmes de gestion.',
      'Ajout de fonctionnalités manquantes pour améliorer l’expérience utilisateur sur le site web.'
    ],
    resultats: [
      'Réduction de 30% du temps de gestion administrative grâce à l’automatisation des documents.',
      'Amélioration de la satisfaction client de 20% après l’ajout de nouvelles fonctionnalités.',
      'Augmentation de 40% du nombre de réservations en ligne dans les six mois suivant le lancement.',
      'Réduction des coûts opérationnels de 25% grâce à une gestion centralisée et efficace.'
    ]
  },
  {
    id: 1,
    name: 'Largus',
    images: [
      'images/realisations/symfony/largus/largus-1.png',
      'images/realisations/symfony/largus/largus-2.png'
    ],
    category: 'Automotive',
    size: 'medium',
    client: 'Largus',
    techno: 'PHP, Symfony, MySQL, Docker, JavaScript',
    objectifs: [
      'Migration from Symfony 2.5 to Symfony 3.4 to enhance application performance and security.',
      'Maintenance and improvement of the back-office and APIs for the LArgus application.',
      'Integrate advanced features for vehicle valuation and user experience.',
      'Optimize the platform for scalability to handle increasing user traffic.'
    ],
    reponses: [
      'Development of a robust platform for vehicle valuation and automotive news.',
      'Creation of an intuitive and user-friendly interface for buyers and sellers.',
      'Implementation of real-time data feeds for up-to-date vehicle pricing and market trends.',
      'Enhancing SEO strategies to improve visibility and organic traffic.'
    ],
    resultats: [
      '120% increase in user engagement over 6 months.',
      'Significant improvement in API response times by 40%.',
      '150% growth in online vehicle listings within the first year.',
      'Reduction in website loading time by 30%.',
      'Achieved a 5% increase in conversion rates for premium listings.'
    ]
  },
  {
    id: 2,
    name: 'Private Sport Shop',
    images: [
      'images/realisations/symfony/privatesport/privatesport-1.png',
      'images/realisations/symfony/privatesport/privatesport-2.png',
      'images/realisations/symfony/privatesport/privatesport-3.png'
    ],
    category: 'E-commerce',
    size: 'medium',
    client: 'Private Sport Shop',
    techno: 'Symfony 4.4, PHP 7.4, MySQL, Docker, JavaScript, Elasticsearch',
    objectifs: [
      'Enhance the e-commerce platform for better performance and user experience.',
      'Implement advanced search functionalities for improved product discovery.',
      'Integrate real-time inventory management to streamline operations.',
      'Develop a mobile-responsive design to cater to a wider audience.'
    ],
    reponses: [
      'Development of a scalable e-commerce platform tailored for sporting goods.',
      'Implementation of a robust search engine for efficient product filtering and sorting.',
      'Integration of a user-friendly admin panel for inventory and order management.',
      'Creation of a seamless checkout process to enhance customer satisfaction.'
    ],
    resultats: [
      '150% increase in site traffic within 6 months of launch.',
      '30% improvement in conversion rates due to enhanced user experience.',
      'Significant reduction in cart abandonment rates by 20%.',
      'Achieved a 50% growth in online sales over the first year.'
    ]
  }


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

const Symfony = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full mx-auto px-4 max-w-c-1390 mt-20 my-10">

    </section>
  );
};

export default Symfony;
