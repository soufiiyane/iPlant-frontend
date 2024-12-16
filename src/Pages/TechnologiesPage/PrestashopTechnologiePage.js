import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import Prestashop from "../../Components/Technologies/Prestashop";
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, imageUrl, linkText }) => (
  <div className="bg-blue-100 p-6 rounded-lg shadow-md">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <a href={linkText} className="text-blue-600 flex items-center">
      View Online  <ArrowRight className="ml-2" size={16} />
    </a>
  </div>
);

const Testimonial = ({ quote, author, role, avatarUrl }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <p className="text-lg mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);

function PrestashopTechnologiePage() {
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
      <Prestashop/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto px-4 max-w-c-1390  my-10">
        <div>
          <Testimonial
            quote="Depuis le lancement de notre nouvelle plateforme, nous avons observé une forte augmentation des ventes et un engagement client accru."
            author="Jane Doe"
            role="Fondatrice & PDG, Flowers for Zoe"
          />
          <ProjectCard
            title="Flowers for Zoe"
            description="Plateforme en ligne pour une maison française spécialisée dans la bijouterie et les accessoires."
            imageUrl="images/realisations/prestashop/ffz/ffz.png"
            linkText="https://www.flowersforzoe.fr/"
          />
        </div>
        <div>
          <ProjectCard
            title="Acadia Solutions Informatiques"
            description="Un distributeur leader de produits IT et technologiques, offrant une large gamme de composants, périphériques, et solutions réseau."
            imageUrl="images/realisations/prestashop/acadia/acadia.png"
            linkText="https://www.acadia-info.com/"
          />
          <Testimonial
            quote="Acadia nous a fourni des produits technologiques fiables et abordables, améliorant considérablement notre infrastructure informatique."
            author="Jane Doe"
            role="Responsable Informatique"
            avatarUrl="/api/placeholder/50/50"
          />
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

export default PrestashopTechnologiePage;
