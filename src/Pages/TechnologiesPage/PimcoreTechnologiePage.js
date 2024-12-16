import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import Pimcore from "../../Components/Technologies/Pimcore";

function PimcoreTechnologiePage() {
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
      question: "Quels services Pimcore proposez-vous ?",
      answer:
        "Nous offrons des services de développement, de maintenance, et de migration d'applications Pimcore, ainsi que des formations pour les utilisateurs et les développeurs.",
    },
    {
      question: "Votre équipe est-elle certifiée en Pimcore ?",
      answer:
        "Notre équipe possède une expertise solide dans la gestion et le développement de projets Pimcore, bien que nous ne détenions pas de certifications officielles.",
    },
    {
      question: "Combien de temps faut-il pour finaliser un projet Pimcore ?",
      answer:
        "Le délai de réalisation d'un projet Pimcore dépend de sa complexité. Les petits projets peuvent être terminés en 4 à 8 semaines, tandis que les projets plus complexes peuvent prendre plusieurs mois.",
    },
    {
      question: "Proposez-vous un support après la livraison du projet ?",
      answer:
        "Oui, nous offrons un support technique continu et des services de maintenance après la livraison, garantissant ainsi le bon fonctionnement de votre application Pimcore.",
    },
    {
      question: "Quelles sont vos expertises en matière de Pimcore ?",
      answer:
        "Notre expertise inclut la gestion de données, le développement de fonctionnalités personnalisées, l'optimisation des performances, la sécurité des applications, et l'intégration de solutions tierces.",
    },
    {
      question: "Est-il possible de migrer une application vers Pimcore ?",
      answer:
        "Oui, nous proposons des services de migration vers Pimcore depuis d'autres systèmes ou frameworks, en assurant une transition fluide et sécurisée.",
    },
    {
      question: "Pouvez-vous développer des solutions personnalisées avec Pimcore ?",
      answer:
        "Absolument. Nous concevons des solutions sur mesure adaptées à vos besoins spécifiques en utilisant les fonctionnalités avancées de Pimcore.",
    },
  ];

  return (
    <div>
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <Pimcore/>
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-5 my-10">
        <h2 className="text-sm uppercase mb-4">QUELLES APPLICATIONS</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            CRÉONS-NOUS ?
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Solutions CMS et
      </span>
            </h1>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        e-Commerce
      </span>
            </h1>
            <p className="text-gray-600">
              Nous créons des systèmes de gestion de contenu (CMS) et des plateformes e-commerce performantes,
              permettant aux entreprises de gérer leur contenu web, leurs ventes en ligne, paiements sécurisés, et
              gestion des stocks. Développées avec Symfony, nos solutions sont flexibles, évolutives et parfaitement
              intégrées à vos outils métiers.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Outils de gestion des
      </span>
            </h1>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        données clients
      </span>
            </h1>
            <p className="text-gray-600">
              Un logiciel permettant la gestion efficace des données clients, facilitant le suivi des interactions,
              l'analyse des performances et l'optimisation des relations clients, développé pour répondre aux
              exigences des entreprises modernes.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black mb-5">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        Solutions personnalisées
      </span>
            </h1>
            <p className="text-gray-600">
              Avec Pimcore, nous développons des solutions personnalisées adaptées aux besoins spécifiques de votre
              entreprise, qu'il s'agisse d'applications internes, de gestion de projet, ou de plateformes de
              collaboration. Nos solutions sont conçues pour s'intégrer parfaitement à votre environnement
              existant tout en offrant une flexibilité maximale.
            </p>
          </div>
        </div>
      </div>
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

export default PimcoreTechnologiePage;
