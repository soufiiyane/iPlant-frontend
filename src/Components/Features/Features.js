import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "./images/icon/extraction.png",
      title: "Extraction Naturelle",
      description:
        "Nos techniques d'extraction de pointe préservent l'intégrité des principes actifs des plantes, garantissant des solutions médicinales de la plus haute qualité."
    },
    {
      icon: "./images/icon/search.png",
      title: "Recherche Avancée",
      description:
        "Notre équipe de botanistes et de chercheurs travaille continuellement à l'identification et à l'étude des propriétés thérapeutiques des plantes médicinales."
    },
    {
      icon: "./images/icon/biodiversity.png",
      title: "Biodiversité Durable",
      description:
        "Nous nous engageons dans des pratiques de culture durables, préservant l'écosystème et soutenant les communautés locales qui cultivent nos plantes médicinales."
    }
  ];

    return (
        <section id="features" className="mb-20">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
              <div className="animate_top mx-auto">
              <h2 className="text-sm uppercase mb-4">POURQUOI</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
              <span
                className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                Travailler Avec Nous
              </span>
            </h1>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection"
                  >
                    <div className="flex items-center justify-center rounded-[4px] bg-green-500 w-16 h-16">
                      <img src={feature.icon} alt="Icon" />
                    </div>
                    <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
    );
};

export default Features;