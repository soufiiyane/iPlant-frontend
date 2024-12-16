import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    "id": 1,
    "name": "DESTINATION COCKTAILS",
    "images": [
      "images/realisations/drupal/cocktails/cocktails-1.png",
      "images/realisations/drupal/cocktails/cocktails-2.png",
      "images/realisations/drupal/cocktails/cocktails-3.png"
    ],
    "category": "Food & Beverage",
    "size": "large",
    "client": "DESTINATION COCKTAILS",
    "techno": "Drupal, Acquia Lift, IOS, Android, Elastic",
    "objectifs": [
      "Digitaliser la marque et construire une stratégie d'acquisition.",
      "Déployer le positionnement accompagnateur de la marque.",
      "Faire naviguer les consommateurs dans la gamme.",
      "Optimiser l'expérience utilisateur sur tous les canaux digitaux.",
      "Augmenter la visibilité en ligne et le trafic vers le site web.",
      "Améliorer la conversion et la fidélisation des clients."
    ],
    "reponses": [
      "Construction de la plateforme digitale.",
      "Développement d'un plan d'acquisition multi-leviers : web native, mobile et social.",
      "Création du plan d'activation CRM.",
      "Innovation Drive to Store.",
      "Mise en place d'une stratégie de contenu engageante.",
      "Optimisation SEO pour améliorer le classement dans les moteurs de recherche.",
      "Intégration de fonctionnalités de commerce électronique.",
      "Développement d'une application mobile complémentaire."
    ],
    "resultats": [
      "Augmentation de 150% du trafic organique en 6 mois.",
      "Amélioration du taux de conversion de 3% à 5.5%.",
      "Croissance de 200% des ventes en ligne sur 12 mois.",
      "Réduction de 25% du taux de rebond.",
      "Augmentation de 40% du panier moyen."
    ]
  },
  {
    id: 1,
    name: 'PRÉVOIR',
    images: [
      'images/realisations/drupal/prevoir/prevoir-1.png',
      'images/realisations/drupal/prevoir/prevoir-2.png',
      'images/realisations/drupal/prevoir/prevoir-3.png'
    ],
    category: 'Insurance',
    size: 'small',
    client: 'PRÉVOIR',
    techno: 'Drupal, Acquia Lift, Elastic',
    objectifs: [
      'Lead a full-scale digital transformation for PRÉVOIR, a prominent insurance group.',
      'Rebuild the digital ecosystem to enhance multichannel commercial conversion.',
      'Improve customer relations and satisfaction through personalized user experiences.',
      'Drive qualified traffic to the website and increase user engagement.'
    ],
    reponses: [
      'Development of a fully integrated digital platform for PRÉVOIR.',
      'Design and deployment of a multichannel acquisition strategy (web, mobile, social).',
      'Creation of an engaging CRM activation plan.',
      'Implementation of an innovative Drive-to-Store strategy.',
      'SEO optimization to boost organic search rankings.',
      'Integration of e-commerce features and development of a complementary mobile app.'
    ],
    resultats: [
      '150% increase in organic traffic within 6 months.',
      'Improved conversion rate from 3% to 5.5%.',
      '200% growth in online sales over 12 months.',
      '25% reduction in bounce rate.',
      '40% increase in average basket size.'
    ]
  },
  {
    id: 1,
    name: 'DEPAZ',
    images: [
      'images/realisations/drupal/depaz/depaz-1.png',
      'images/realisations/drupal/depaz/depaz-2.png',
      'images/realisations/drupal/depaz/depaz-3.png'
    ],
    category: 'Beverages',
    size: 'small',
    client: 'DEPAZ',
    techno: 'PHP,Drupal, JavaScript',
    objectifs: [
      'Lead the digital transformation of Depaz.',
      'Establish and expand the brand’s digital presence on an international scale.',
      'Strengthen the brand’s high-end, expert positioning in the market.',
      'Drive qualified traffic to the website.'
    ],
    reponses: [
      'Development of a comprehensive full-service platform.',
      'Creation of an intuitive, engaging, and immersive digital experience.',
      'Client-focused platform, contextualized to enhance user interaction.',
      'Highlighting the brand’s heritage and story.'
    ],
    resultats: [
      '150% increase in organic traffic within 6 months.',
      'Improved conversion rate from 3% to 5.5%.',
      '200% growth in online sales over 12 months.',
      '25% reduction in bounce rate.',
      '40% increase in average basket size.'
    ]
  },
  {
    id: 1,
    name: 'MAISON MONTFORT',
    images: [
      'images/realisations/drupal/montfort/montfort-1.png',
      'images/realisations/drupal/montfort/montfort-2.png',
      'images/realisations/drupal/montfort/montfort-3.png'
    ],
    category: 'Food & Beverage',
    size: 'medium',
    client: 'MAISON MONTFORT',
    techno: 'Drupal, Lift, IOS, Android, Javascript, Ibeacon',
    objectifs: [
      'Transformation Digitale.',
      'Digitaliser la marque et construire une stratégie d’acquisition.',
      'Déployer le positionnement accompagnateur de la marque.',
      'Faire naviguer les consommateurs dans la gamme.',
      'Augmenter la visibilité en ligne et le trafic vers le site web.',
      'Améliorer la conversion et la fidélisation des clients.'
    ],
    reponses: [
      'Construction de la plateforme digitale.',
      'Développement d\'un plan d’acquisition multi-leviers : web native, mobile et social.',
      'Création du plan d’activation CRM.',
      'Innovation Drive to Store.',
      'Mise en place d\'une stratégie de contenu engageante.',
      'Optimisation SEO pour améliorer le classement dans les moteurs de recherche.',
      'Intégration de fonctionnalités de commerce électronique.',
      'Développement d’une application mobile complémentaire.'
    ],
    resultats: [
      'Augmentation de 150% du trafic organique en 6 mois.',
      'Amélioration du taux de conversion de 3% à 5.5%.',
      'Croissance de 200% des ventes en ligne sur 12 mois.',
      'Réduction de 25% du taux de rebond.',
      'Augmentation de 40% du panier moyen.'
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

const Drupal = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full mx-auto px-4 max-w-c-1390  my-10">
      <h2 className="text-sm uppercase mb-4">Un Aperçu de Notre</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
          Projets Drupal
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={handleProjectClick}/>
        ))}
      </div>

      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup}/>}
    </section>
  );
};

export default Drupal;
