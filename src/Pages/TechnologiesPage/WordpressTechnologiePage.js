import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Drupal from "../../Components/Technologies/Drupal";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import Wordpress from "../../Components/Technologies/Wordpress";

function DrupalRealisationsPage() {
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
      question: "Quels types de sites pouvez-vous créer avec WordPress ?",
      answer:
        "Avec WordPress, nous pouvons créer une grande variété de sites, notamment des blogs, des sites vitrines, des sites d'e-commerce, des portfolios, et des plateformes d'apprentissage en ligne.",
    },
    {
      question: "Qu'est-ce que WooCommerce et comment peut-il aider mon entreprise ?",
      answer:
        "WooCommerce est une extension de WordPress qui permet de transformer votre site en une boutique en ligne complète. Il prend en charge la gestion des produits, les paiements, les expéditions, et bien plus encore.",
    },
    {
      question: "Comment assurez-vous la sécurité de mon site WordPress ?",
      answer:
        "Nous utilisons des pratiques de sécurité avancées, comme l'installation de plugins de sécurité, des sauvegardes régulières, la protection contre les attaques DDoS, et la mise à jour fréquente de WordPress et de ses extensions.",
    },
    {
      question: "Est-ce que WordPress est adapté pour le SEO ?",
      answer:
        "Oui, WordPress est excellent pour le SEO grâce à ses plugins comme Yoast SEO et Rank Math. Nous optimisons également les balises, les URLs, et la structure du site pour une meilleure visibilité dans les moteurs de recherche.",
    },
    {
      question: "Puis-je gérer moi-même mon site WordPress après sa mise en ligne ?",
      answer:
        "Absolument, WordPress est conçu pour être simple à utiliser, même pour les débutants. Nous fournissons une formation pour vous aider à gérer votre site en toute autonomie.",
    },
    {
      question: "Offrez-vous un support pour WooCommerce après la mise en ligne ?",
      answer:
        "Oui, nous offrons un support continu pour WooCommerce, incluant les mises à jour, la maintenance, la gestion des bugs et l’ajout de nouvelles fonctionnalités pour votre boutique en ligne.",
    },
    {
      question: "Est-il possible de migrer un site existant vers WordPress ou WooCommerce ?",
      answer:
        "Oui, nous proposons des services de migration de sites depuis d'autres plateformes CMS vers WordPress ou WooCommerce, tout en assurant une transition fluide et sécurisée pour votre contenu et vos données.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <div className="w-full mx-auto  max-w-c-1390 mt-20 my-10   px-4 flex flex-col md:flex-row">
        <div className="w-full md:flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-sm uppercase mb-4">Un Aperçu de Nos</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            Expertise Wordpress
          </span>
          </h1>
          <p className="text-gray-600 mb-4 text-justify">
            Notre équipe Wordpress est composée de membres passionnés ayant plus de&nbsp;
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
           11 ans d'expérience dans le domaine.
          </span>
            &nbsp;Notre équipe spécialisée dans WordPress possède une expertise approfondie dans la création de sites web dynamiques et évolutifs. Nous tirons pleinement parti des fonctionnalités robustes de WordPress pour créer des solutions qui non seulement répondent à vos besoins, mais les surpassent.
            Nous suivons de près les tendances et évolutions technologiques afin de vous proposer des solutions à la pointe, tout en assurant que votre site reste sécurisé, performant et facile à gérer.
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
        Blogs Dynamiques
      </span>
            </h1>
            <p className="text-gray-600">
              Nous créons des blogs WordPress dynamiques, permettant aux créateurs de contenu de partager facilement
              leurs idées et articles. Nos solutions WordPress sont optimisées pour le référencement, avec une interface
              utilisateur intuitive qui vous permet de publier rapidement et efficacement.
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
              Avec WordPress, nous développons des solutions e-commerce puissantes en utilisant WooCommerce, intégrant
              la gestion des produits, les systèmes de paiement sécurisés et des fonctionnalités avancées. Nos boutiques
              en ligne sont conçues pour offrir une expérience client fluide, tout en s'adaptant aux besoins spécifiques
              de votre entreprise.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl mb-5 font-black">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Sites d'Abonnement
      </span>
            </h1>
            <p className="text-gray-600">
              Nous créons des sites d'abonnement personnalisés avec WordPress, permettant aux entreprises de monétiser
              leur contenu à travers des modèles d'adhésion. Que vous offriez des cours en ligne, des articles premium
              ou des communautés privées, nos solutions sont flexibles et sécurisées pour gérer efficacement vos membres et contenus.
            </p>
          </div>
        </div>
      </div>
      <Wordpress/>
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

export default DrupalRealisationsPage;
