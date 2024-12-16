import React from 'react';

const AWS = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <section className="mb-12">
        <div className="w-full mx-auto max-w-c-1390 my-10 flex flex-col md:flex-row">
          <div className="w-full md:flex-1 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-sm uppercase mb-4">Un aperçu de nos</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
          AWS Expertise
        </span>
            </h1>
            <p className="text-gray-600 mb-4">
              Notre équipe se compose <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
              d'experts certifiés AWS
            </span>,  y compris  <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
             Architectes Solutions Certifiés Associés, Développeurs
            </span>, and <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
            et Praticiens Certifiés du Cloud AWS
            </span>
            </p>
            <p className="text-gray-600 mb-4">
              Nous accompagnons nos clients dans la mise en œuvre de solutions d'entreprise robustes et innovantes en exploitant toute la puissance d'Amazon Web Services.
            </p>
            <p className="text-gray-600">
              Choisir notre équipe pour vos projets AWS, c'est bénéficier d'une expertise certifiée, soutenue par notre connaissance approfondie des services AWS, afin de fournir des résultats de haute qualité adaptés à vos besoins spécifiques.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <p className="text-sm">Nos</p>
              <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
          <span
            className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
            Certifications
          </span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <img
                src="images/certifications/aws/AWS-Certified-Solutions-Architect-Associate.png"
                className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
                alt="Symfony 6 Certification"
              />
              <img
                src="images/certifications/aws/AWS-Certified-Developer-Associate.png"
                className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
                alt="Symfony 7 Certification"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <img
                src="images/certifications/aws/AWS-Certified-Cloud-Practitioner.png"
                className="w-full sm:w-auto max-w-[300px] max-h-[200px] object-contain"
                alt="Symfony 7 Certification"
              />
            </div>
          </div>
        </div>
      </section>
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
          Applications Serverless
        </span>
            </h1>
            <p className="text-gray-600">
              Nous concevons des applications serverless évolutives et rentables en utilisant les services AWS comme AWS
              Lambda et API Gateway. Ces solutions réduisent les coûts d'infrastructure tout en offrant une grande
              flexibilité.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-black">
        <span
          className="inline-block relative mb-5 before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
          Solutions Data Lake
        </span>
            </h1>
            <p className="text-gray-600">
              Grâce à AWS, nous mettons en place des architectures Data Lake robustes pour centraliser vos données. Cela
              permet une gestion optimisée et une analyse approfondie, en utilisant des services comme Amazon S3 et AWS
              Glue pour traiter et stocker vos données.
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl mb-5 font-black">
        <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
          Intelligence Artificielle
        </span>
            </h1>
            <p className="text-gray-600">
              Nous intégrons des solutions d'intelligence artificielle avec des services AWS comme Amazon Bedrock et
              Amazon SageMaker pour créer des applications intelligentes. Que ce soit pour des agents conversationnels
              ou des analyses prédictives, nos solutions sont adaptées à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWS;
