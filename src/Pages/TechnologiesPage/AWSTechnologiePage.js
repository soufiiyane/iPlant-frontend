import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import FAQs from "../../Components/FAQs/FAQs";
import CTA from "../../Components/CTA/CTA";
import AWS from "../../Components/Technologies/AWS";

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
      question: "Quels sont les principaux avantages d'Amazon Web Services (AWS) ?",
      answer:
        "AWS offre des avantages clés tels que la scalabilité, la fiabilité, et la flexibilité. Vous pouvez ajuster les ressources en fonction des besoins de votre entreprise, avec une disponibilité de service garantie de 99,9%.",
    },
    {
      question: "Comment AWS peut-il aider mon entreprise à réduire ses coûts ?",
      answer:
        "AWS propose un modèle de tarification à la demande, où vous ne payez que pour ce que vous utilisez. Cela permet d'éviter les dépenses liées à une infrastructure surdimensionnée tout en optimisant l'utilisation des ressources.",
    },
    {
      question: "Comment AWS assure-t-il la sécurité de mes données ?",
      answer:
        "AWS met en place des mesures de sécurité avancées comme des pare-feux assistés par IA, le chiffrement des données, la gestion des identités (IAM), et la surveillance en temps réel avec AWS CloudWatch et AWS SecurityHub.",
    },
    {
      question: "Est-ce qu'AWS est adapté pour héberger des applications d'intelligence artificielle (IA) ?",
      answer:
        "Oui, AWS propose une large gamme de services pour l'IA, comme Amazon SageMaker pour l'entraînement des modèles, ainsi que des outils pour le Machine Learning, le Deep Learning, et l'analyse de données.",
    },
    {
      question: "Puis-je gérer mes infrastructures AWS de manière autonome après leur mise en place ?",
      answer:
        "Absolument, AWS permet une gestion autonome de vos infrastructures via une console intuitive, une interface en ligne de commande (CLI), ou des outils comme AWS CloudFormation pour automatiser les déploiements.",
    },
    {
      question: "Offrez-vous un support pour les environnements AWS après la mise en service ?",
      answer:
        "Oui, nous fournissons un support continu pour les environnements AWS, incluant les mises à jour, la maintenance, la gestion des incidents, et l'ajout de nouvelles fonctionnalités ou services selon vos besoins.",
    },
    {
      question: "Est-il possible de migrer mon infrastructure actuelle vers AWS ?",
      answer:
        "Oui, nous proposons des services de migration sécurisée de votre infrastructure actuelle vers AWS, avec une planification détaillée pour assurer une transition sans interruption pour vos systèmes et vos données.",
    },
  ];

  return (
    <div className="w-full mx-auto  max-w-c-1390 mt-20 my-10">
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <AWS/>
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
