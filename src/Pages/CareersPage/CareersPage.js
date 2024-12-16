import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Careers from "../../Components/Careers/Careers";
import CTA from "../../Components/CTA/CTA";

function CareersPage() {
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

  return (
    <div >
      <NavBar
        stickyMenu={stickyMenu}
        navigationOpen={navigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <div className="w-full mx-auto px-4 max-w-c-1390 mt-35 ">
        <div className="mt-16">
          <h2 className="text-sm uppercase mb-4">POURQUOI</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Travailler Avec Nous
            </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Rejoignez <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
              TECH MY TEAM
            </span> pour profiter d'un environnement de travail flexible et dynamique.
            Nous offrons des salaires compétitifs et un équilibre parfait entre vie professionnelle
            et vie personnelle grâce à notre programme "Travaillez d'où vous voulez", vous permettant
            de façonner votre espace de travail selon vos besoins. Venez développer vos compétences
            au sein d'une équipe innovante et bienveillante.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="rounded-lg overflow-hidden h-48 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Man on phone" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8 sm:mt-12">
              <div className="rounded-lg overflow-hidden h-48 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Woman at desk" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8 sm:mt-24">
              <div className="rounded-lg overflow-hidden h-48 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Woman with laptop" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Careers/>
      <CTA
        linkTo="/carriere/candidature-spontanee"
        linkText="Candidature spontanée"
        title="Vous n'avez pas trouvé d'opportunité correspondante ?"
        description="Ne vous inquiétez pas ! Si aucune de nos offres ne correspond à votre profil, nous vous invitons à nous envoyer une Candidature spontanée."
      />
      <Footer/>
    </div>
  );
}

export default CareersPage;
