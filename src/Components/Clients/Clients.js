import React from "react";

const clientsData = [
    {
        lightImg: "./images/brand/sensiolabs-black.png",
        darkImg: "./images/brand/sensiolabs-white.png",
        altText: "Client 1",
    },
    {
        lightImg: "./images/brand/grand-mercredi-black.png",
        darkImg: "./images/brand/grand-mercredi-white.png",
        altText: "Client 2",
    },
    {
        lightImg: "./images/brand/dekuple-black.png",
        darkImg: "./images/brand/dekuple-white.png",
        altText: "Client 3",
    },
    {
        lightImg: "./images/brand/lagentx-black.png",
        darkImg: "./images/brand/lagentx-white.png",
        altText: "Client 4",
    },
    {
        lightImg: "./images/brand/cfc-black.png",
        darkImg: "./images/brand/cfc-white.png",
        altText: "Client 5",
    },
    {
        lightImg: "./images/brand/Amazon-Logo-Black.png",
        darkImg: "./images/brand/Amazon-Logo-White.png",
        altText: "Client 6",
    },
];

const Clients = () => {
    return (
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
        <h1 className="text-2xl font-black mb-12 text-center">NOS PARTENAIRES</h1>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-7.5 lg:gap-12.5 xl:gap-29 justify-center items-center">
            {clientsData.map((client, index) => (
              <a href="#" className="animate_top block" key={index}>
                <img
                  className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
                  src={client.lightImg}
                  alt={client.altText}
                />
                <img
                  className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
                  src={client.darkImg}
                  alt={client.altText}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Clients;
