import React, { useState } from 'react';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState('tabOne');

  return (
    <section className="pt-18.5 pb-20 lg:pb-22.5 relative">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

        {/* Tab Menus Start */}
        <div
          className="animate_top border border-stroke dark:border-strokedark dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6 bg-white rounded-[10px] flex flex-wrap md:flex-nowrap md:items-center justify-center lg:gap-7.5 xl:gap-12.5 mb-15 xl:mb-21.5"
        >
          <div
            className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabOne' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
            onClick={() => setActiveTab('tabOne')}
          >
            <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
              <p className="text-black dark:text-white font-medium text-metatitle3">01</p>
            </div>
            <div className="lg:w-auto md:w-3/5">
              <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Design Révolutionnaire</h5>
            </div>
          </div>
          <div
            className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabTwo' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
            onClick={() => setActiveTab('tabTwo')}
          >
            <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
              <p className="text-black dark:text-white font-medium text-metatitle3">02</p>
            </div>
            <div className="lg:w-auto md:w-3/5">
              <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Sécurité Cloud de Pointe</h5>
            </div>
          </div>
          <div
            className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-strokedark flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${activeTab === 'tabThree' ? 'active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]' : ''}`}
            onClick={() => setActiveTab('tabThree')}
          >
            <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
              <p className="text-black dark:text-white font-medium text-metatitle3">03</p>
            </div>
            <div className="lg:w-auto md:w-3/5">
              <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">Collaboration Intelligente</h5>
            </div>
          </div>
        </div>
        {/* Tab Menus End */}

        {/* Tab Content Start */}
        <div className="animate_top mx-auto max-w-c-1154">
          {activeTab === 'tabOne' && (
            <div className="flex items-center gap-8 lg:gap-19">
              <div className="md:w-1/2">
                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Design  Révolutionnaire</h2>
                <p className="mb-5">Découvrez une interface utilisateur qui redéfinit la simplicité. Notre design épuré et moderne vous propulse dans une nouvelle ère de productivité.</p>
                <p className="w-11/12">Laissez-vous séduire par une expérience utilisateur fluide qui transforme chaque interaction en un moment de pure efficacité.</p>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img
                  src="./images/features/features-light-01.svg"
                  alt="Design Intuitif"
                  className="dark:hidden"
                />
                <img
                  src="./images/features/features-dark-01.svg"
                  alt="Design Intuitif"
                  className="hidden dark:block"
                />
              </div>
            </div>
          )}

          {activeTab === 'tabTwo' && (
            <div className="flex items-center gap-8 lg:gap-19">
              <div className="md:w-1/2">
                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Sécurité Cloud de Pointe</h2>
                <p className="mb-5">Protégez vos données avec notre technologie cloud ultra-sécurisée. Nous élevons la protection de vos informations au rang d'art.</p>
                <p className="w-11/12">Explorez nos solutions de sauvegarde innovantes qui allient flexibilité et sécurité inégalée pour une tranquillité d'esprit totale.</p>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img
                  src="./images/features/features-light-01.svg"
                  alt="Sécurité Cloud"
                  className="dark:hidden"
                />
                <img
                  src="./images/features/features-dark-01.svg"
                  alt="Sécurité Cloud"
                  className="hidden dark:block"
                />
              </div>
            </div>
          )}

          {activeTab === 'tabThree' && (
            <div className="flex items-center gap-8 lg:gap-19">
              <div className="md:w-1/2">
                <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">Collaboration Intelligente</h2>
                <p className="mb-5">Révolutionnez votre façon de travailler en équipe. Nos outils de collaboration intelligents propulsent votre productivité vers de nouveaux sommets.</p>
                <p className="w-11/12">Découvrez comment notre plateforme transforme chaque projet en une symphonie de créativité et d'efficacité collective.</p>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img
                  src="./images/features/features-light-01.svg"
                  alt="Collaboration Intelligente"
                  className="dark:hidden"
                />
                <img
                  src="./images/features/features-dark-01.svg"
                  alt="Collaboration Intelligente"
                  className="hidden dark:block"
                />
              </div>
            </div>
          )}
        </div>
        {/* Tab Content End */}
      </div>
    </section>
  );
};

export default FeatureTabs;
