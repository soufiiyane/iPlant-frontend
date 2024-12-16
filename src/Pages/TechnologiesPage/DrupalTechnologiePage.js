import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Drupal from "../../Components/Technologies/Drupal";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";

function DrupalTechnologiePage() {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => setNavigationOpen(!navigationOpen);

  const faqs = [
    {
      question: "Quels services Drupal proposez-vous ?",
      answer:
        "Nous offrons des services de developpement, de maintenance et de migration de sites Drupal, ainsi que des formations pour les utilisateurs et les developpeurs.",
    },
    {
      question: "Combien de temps faut-il pour finaliser un projet Drupal ?",
      answer:
        "Le delai de realisation d'un projet Drupal varie en fonction de sa complexite. En general, les petits projets peuvent etre termines en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support apres la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance apres la livraison, garantissant ainsi le bon fonctionnement de votre site Drupal.",
    },
    {
      question: "Quelles sont vos expertises en matiere de Drupal ?",
      answer:
        "Notre expertise inclut le developpement de modules personnalises, l'optimisation des performances, la securite des sites, et l'integration de solutions tierces.",
    },
    {
      question: "Est-il possible de migrer un site vers Drupal ?",
      answer:
        "Oui, nous proposons des services de migration vers Drupal depuis d'autres systemes de gestion de contenu, assurant une transition fluide et securisee.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <div className="w-full mx-auto  max-w-c-1390 mt-40 my-10   px-4 flex flex-col md:flex-row">
        <div className="w-full md:flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-sm uppercase mb-4">Un Aperçu de Nos</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            Expertise Drupal
          </span>
          </h1>
          <p className="text-gray-600 mb-4 text-justify">
            Notre équipe Drupal est composée de membres passionnés ayant plus de&nbsp;
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
           7 ans d'expérience dans le domaine.
          </span>
            &nbsp;Cette expertise leur permet de maîtriser les subtilités de la plateforme et d'apporter des solutions
            adaptées aux besoins de nos clients.
            Ils s'engagent à suivre les meilleures pratiques de l'industrie, en assurant une formation continue et une
            veille technologique constante.
            Grâce à leur expérience, notre équipe est toujours à jour avec les dernières avancées de Drupal, ce qui nous
            permet de vous offrir des solutions innovantes et performantes.
          </p>

          <p className="text-gray-600 mb-4 text-justify">
            Choisir notre équipe pour vos projets et missions Drupal est la meilleure décision pour garantir des
            résultats de qualité. Que vous ayez besoin de développer un site web sur mesure, d'optimiser une plateforme
            existante ou d'assurer la maintenance de votre infrastructure, notre expertise vous assure des solutions
            robustes et performantes qui répondent parfaitement à vos besoins spécifiques.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-5 my-10">
        <h2 className="text-sm uppercase mb-4">QUELLES SOLUTIONS</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
    <span
      className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
      CRÉONS-NOUS ?
    </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl mb-5 sm:text-2xl md:text-3xl font-black">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
          Sites Web Dynamiques
        </span>
            </h1>
            <p className="text-gray-600 ">
              Nous concevons des sites web dynamiques avec Drupal, permettant aux entreprises de gérer et de mettre à
              jour leur contenu en toute simplicité. Que ce soit pour un blog, un site institutionnel ou une plateforme
              communautaire, nos solutions Drupal offrent une flexibilité inégalée et une interface utilisateur
              intuitive.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
        <span
          className="inline-block relative mb-5 before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
          Solutions E-Commerce
        </span>
            </h1>
            <p className="text-gray-600">
              Grâce à Drupal, nous développons des solutions e-commerce performantes, intégrant des fonctionnalités
              telles que la gestion des produits, des commandes et des paiements sécurisés. Nos plateformes e-commerce
              sont personnalisées pour répondre aux besoins uniques de chaque entreprise, tout en offrant une expérience
              utilisateur optimale.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl mb-5 font-black">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
              Applications Adaptées
            </span>
            </h1>
            <p className="text-gray-600">
              Nous développons des applications sur mesure avec Drupal, adaptées aux besoins spécifiques de votre
              entreprise. Que ce soit pour des outils internes, des systèmes de gestion de projet ou des plateformes de
              collaboration, nos solutions s'intègrent parfaitement à votre écosystème numérique.
            </p>
          </div>
        </div>
      </div>
      <Drupal/>
      <FAQs faqs={faqs}/>
      <CTA
        linkTo="/contact"
        linkText="Contactez-nous"
        title="Vous avez une idée de projet ? Donnons-lui vie !"
      />
      <Footer/>
    </div>
  );
}

export default DrupalTechnologiePage;
