import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    "id": 1,
    "name": "GRAND-MERCREDI",
    "images": [
      "images/realisations/wordpress/grandmercredi/grandmercredi-1.png",
      "images/realisations/wordpress/grandmercredi/grandmercredi-2.png",
      "images/realisations/wordpress/grandmercredi/grandmercredi-3.png"
    ],
    "category": "Media & Content",
    "size": "large",
    "client": "GRAND-MERCREDI",
    "techno": "WordPress, Google Analytics, SEO Tools, Facebook Ads",
    "objectifs": [
      "Renforcer la présence numérique et créer une plateforme dédiée aux Grands-Parents.",
      "Déployer un blog dynamique avec des articles engageants sur les thématiques familiales et intergénérationnelles.",
      "Améliorer la visibilité de Grand-Mercredi via des stratégies SEO et une présence accrue dans l'actualité digitale.",
      "Développer une section 'Actualités' riche en contenu pour captiver les lecteurs réguliers.",
      "Optimiser l'expérience utilisateur pour encourager la fidélisation des visiteurs et augmenter les abonnés aux newsletters."
    ],
    "reponses": [
      "Conception et développement d'une plateforme conviviale pour la gestion de blogs et actualités.",
      "Mise en place d'un back-office permettant à l'équipe de publier facilement des articles et du contenu multimédia.",
      "Optimisation SEO pour accroître la visibilité des articles sur les moteurs de recherche.",
      "Mise en place d'une stratégie de contenu engageante pour booster l'engagement des lecteurs.",
      "Création d'une fonctionnalité de newsletter pour convertir les lecteurs en abonnés réguliers."
    ],
    "resultats": [
      "Augmentation de 150% du trafic organique vers le blog en 6 mois.",
      "Taux d'engagement des articles en hausse de 40% grâce à des partages sur les réseaux sociaux.",
      "Création d'une communauté fidèle avec une augmentation de 25% des abonnés à la newsletter.",
      "Réduction du taux de rebond de 18% sur les pages d'actualités.",
      "Augmentation de 60% du temps passé sur le site par utilisateur en raison d'un contenu plus interactif et engageant."
    ]
  },
  {
    id: 1,
    name: 'Aimant Aidant',
    images: [
      'images/realisations/wordpress/aimantaidant/aimantaidant-2.png',
      'images/realisations/wordpress/aimantaidant/aimantaidant-3.png',
      'images/realisations/wordpress/aimantaidant/aimantaidant-1.png'
    ],
    category: 'Santé',
    size: 'medium',
    client: 'Aimant Aidant',
    techno: 'WordPress, Google Analytics, Outils SEO, Facebook Ads, PHP, JavaScript',
    objectifs: [
      'Créer une plateforme numérique de soutien pour les aidants familiaux.',
      'Améliorer l\'engagement des utilisateurs grâce à une navigation intuitive et à des ressources accessibles.',
      'Favoriser un sentiment de communauté entre les aidants et leurs proches.',
      'Fournir des outils et des ressources qui encouragent la stimulation mentale et le bien-être des personnes âgées.'
    ],
    reponses: [
      'Développement d’un site web convivial adapté aux aidants et aux seniors.',
      'Intégration d\'outils interactifs et de ressources pour améliorer l\'expérience utilisateur.',
      'Création de contenu informatif abordant les défis courants des aidants.',
      'Mise en œuvre d’une fonctionnalité de newsletter pour tenir les utilisateurs informés et engagés.',
      'Optimisation SEO pour améliorer la visibilité et atteindre les publics cibles.'
    ],
    resultats: [
      'Augmentation significative des inscriptions d’utilisateurs et des abonnements à la newsletter.',
      'Amélioration des indicateurs d\'engagement des utilisateurs, y compris le temps passé sur le site et le nombre de pages vues.',
      'Retours positifs des aidants concernant l\'accessibilité des ressources et le soutien fourni.',
      'Amélioration du trafic et de la visibilité du site grâce à des efforts SEO ciblés.'
    ]
  },
  {
    id: 1,
    name: 'PartAge',
    images: [
      'images/realisations/wordpress/partage/partage-1.png',
      'images/realisations/wordpress/partage/partage-2.png',
      'images/realisations/wordpress/partage/partage-3.png'
    ],
    category: 'Santé',
    size: 'medium',
    client: 'PartAge',
    techno: 'PHP, WordPress, JavaScript',
    objectifs: [
      'Diriger la transformation numérique de PartAge.',
      'Établir et développer la présence numérique de la marque à l’échelle internationale.',
      'Renforcer le positionnement haut de gamme et expert de la marque sur le marché.',
      'Générer du trafic qualifié vers le site web.'
    ],
    reponses: [
      'Développement d’une plateforme complète et multifonctionnelle.',
      'Création d’une expérience numérique intuitive, engageante et immersive.',
      'Plateforme centrée sur le client, contextualisée pour améliorer l’interaction utilisateur.',
      'Mise en valeur de l’héritage et de l’histoire de la marque.'
    ],
    resultats: [
      'Augmentation de 150 % du trafic organique en 6 mois.',
      'Amélioration du taux de conversion de 3 % à 5,5 %. ',
      'Croissance de 200 % des ventes en ligne sur 12 mois.',
      'Réduction de 25 % du taux de rebond.',
      'Augmentation de 40 % de la taille moyenne du panier.'
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

const Wordpress = () => {
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
          Projets Wordpress
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

export default Wordpress;
