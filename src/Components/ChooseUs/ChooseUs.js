import React from 'react';
import Services from "../Services/Services";

const ChooseUs = () => {
  return (
    <div className="container mx-auto px-4 mt-2 max-w-c-1390 mb-10">
      <h2 className="text-sm uppercase mb-4">POURQUOI</h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">NOUS CHOISIR</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <p className="text-gray-600 mb-4 text-justify">
            Nous sommes fiers de notre équipe de professionnels hautement qualifiés. Plus de 99% de notre personnel est composé d'ingénieurs diplômés des meilleures écoles d'ingénieurs. De plus, 70% de nos développeurs détiennent des certifications professionnelles dans leurs domaines respectifs, notamment Symfony, Drupal, les technologies cloud, et Kubernetes.
          </p>
          <p className="text-gray-600 text-justify">
            Nos solides partenariats avec des leaders de l'industrie tels que Dekuple et SensioLabs nous permettent de rester à la pointe de l'innovation et d'offrir des solutions de premier ordre à nos clients.
          </p>
          <Services />
        </div>
        <div className="lg:w-1/2 grid grid-cols-4 grid-rows-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Two people chatting on a couch"
            className="col-span-4 row-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People at the beach"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People at the beach"
            className="col-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People at the beach"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
