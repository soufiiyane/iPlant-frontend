import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";


const Card = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-xl p-6 text-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-red-50 rounded-lg">
                <Icon className="w-6 h-6 text-red-500" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

function SymfonyTechnologiePage() {
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
            question: "Lorem ipsum dolor sit amet?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
            question: "Consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        },
        {
            question: "Neque eos, dignissimos provident reiciendis debitis?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
        }
    ];

  return (
      <div>
          <NavBar
              stickyMenu={stickyMenu}
              navigationOpen={navigationOpen}
              toggleNavigation={toggleNavigation}
          />
          <div className="w-full mx-auto max-w-c-1390 mt-40 my-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full lg:pr-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12">
      <span
          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg before:-z-1">
        Symfony
        <div className="inline-block rounded-[10px] p-4.5">
          <img src="./images/brand/symfony-icon.png" alt="Brand"/>
        </div>
      </span>
                  </h1>
                  <p className="text-gray-600 mb-4 text-justify">
                      Si vous souhaitez développer une application web ou mobile, ou encore une plateforme e-commerce,
                      tout en garantissant une qualité de développement supérieure, vous êtes au bon endroit. Profitez
                      de l'expertise exceptionnelle de notre
                      <span
                          className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
        équipe certifiée
      </span>
                      , forte de plusieurs années d'expérience et
                      comprenant des contributeurs faisant partie de l'équipe principale de Symfony. Notre engagement à
                      fournir des solutions de premier ordre vous aidera à concrétiser votre projet avec précision et
                      fiabilité.
                  </p>
              </div>

              <div id="support" className="w-full relative px-4 lg:px-8 overflow-hidden">
                  <div className="lg:pb-3 xl:pb-3 lg:pt-3 xl:pt-3"></div>
                  <div
                      className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
                  <div className="absolute -z-1 bottom-5 left-0 w-full h-1/3">
                      <img src="./images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden"/>
                  </div>
                  <div className="flex flex-col space-y-6 bg-white shadow-md p-4 md:p-6 w-full">
                      <form action="https://formbold.com/s/unique_form_id" method="POST" className="w-full">
                          <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                              <input
                                  type="text"
                                  placeholder="Nom complet"
                                  className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                              />
                              <input
                                  type="email"
                                  placeholder="Adresse e-mail"
                                  className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                              />
                          </div>

                          <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                              <input
                                  type="text"
                                  placeholder="Entreprise"
                                  className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                              />
                              <input
                                  type="text"
                                  placeholder="Numéro de téléphone"
                                  className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                              />
                          </div>

                          <div className="flex mb-11.5">
          <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
          ></textarea>
                          </div>

                          <div className="flex flex-wrap justify-center lg:justify-start gap-10 xl:gap-15">
                              <button type="submit" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                                  Envoyer le message
                                  <svg className="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill=""/>
                                  </svg>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <section
              className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
              <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                  <div className="grid grid-cols-3  gap-7.5 lg:gap-12.5 xl:gap-29 justify-items-center">
                      <a href="#" className="animate_top flex items-center justify-center w-full">
                          <img
                              className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden max-w-full h-auto"
                              src="images/certifications/symfony/bronze.svg"
                              alt="Symfony Bronze"
                          />
                      </a>
                      <a href="#" className="animate_top flex items-center justify-center w-full">
                          <img
                              className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden max-w-full h-auto"
                              src="images/certifications/symfony/symfony-6.png"
                              alt="Symfony 6"
                          />
                      </a>
                      <a href="#" className="animate_top flex items-center justify-center w-full">
                          <img
                              className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden max-w-full h-auto"
                              src="images/certifications/symfony/symfony-7.png"
                              alt="Symfony 7"
                          />
                      </a>
                  </div>
              </div>
          </section>

          <div className="max-w-c-1390 mx-auto px-4 py-12 mb-20">
              {/* Header Section */}
              <div className="mb-16">
                  <h1 className="text-4xl font-semibold text-[#5B5F97] mb-6">
                      Symfony, un framework PHP pour les projets web et micro-applications
                  </h1>
                  <p className="text-gray-500 leading-relaxed text-justify">
                      Conçu par la société française SensioLabs et par l'ensemble des contributeurs de ce projet
                      open-source, Symfony est un Framework MVC (Modèle-vue-contrôleur) libre de droits, puissant,
                      reconnu dans le monde et présent dans le TOP 3 mondial des frameworks PHP open source. Il est
                      utilisé en France par une très large majorité des développeurs et développeuses PHP.
                  </p>
              </div>

              {/* Main Content Section */}
              <div className="relative flex flex-col lg:flex-row gap-8">
                  {/* Image Section */}
                  <div className="w-full lg:w-2/5 h-[400px] z-1">
                      <img
                          src="https://www.ylly.fr/upload/media/diagonal/0001/01/thumb_366_diagonal_big.jpeg"
                          alt="Developer working on laptop"
                          className="w-full h-full object-cover"
                      />
                  </div>

                  <div style={{display: "flex", alignItems: "center"}}
                       className="w-full  lg:w-[80%] lg:absolute lg:right-0 lg:top-15 min-h-[400px] bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] shadow-md">
                      <div className="h-full w-full lg:w-3/4 lg:ml-auto p-8 flex flex-col justify-center gap-4">
                          <h2 className="text-3xl text-black font-semibold">
                              Des fonctionnalités modulables et adaptables
                          </h2>
                          <p className="leading-relaxed text-black">
                              Grâce à ses fonctionnalités modulables et adaptables, il permet de faciliter et
                              d'accélérer le développement d'un site web. Avec Symfony et les puissants outils qu'il
                              propose, toujours plus nombreux, il y la possibilité de répondre à une large diversité de
                              problématiques business et techniques.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <section className="w-full text-black ">
              <div className="w-full lg:w-[80%] px-10 py-16 bg-alabaster">
                  <div className="grid  md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6 px-4">
                          <h2 className="text-4xl font-bold mb-6 text-black">
                              Pourquoi choisir TechMyTeam pour votre projet Symfony ?
                          </h2>

                          <p className="text-gray-300 mb-4">
                              Notre équipe experte et certifiée symfony sera capable de répondre à tous vos besoins, à
                              commencer:
                          </p>

                          <ul className="text-black px-4" style={{listStyleType: "disc"}}>
                              <li>
                                  Développement de sites web et applications web sur mesure
                              </li>
                              <li>
                                  Intégration d'un CMS dans une plateforme pour Symfony
                              </li>
                              <li>
                                  Application sur mesure des versions plus récentes
                              </li>
                              <li>
                                  Maintenance et support Symfony
                              </li>
                          </ul>

                          <p className="text-gray-300 mt-4 font-bold">Avec nous vous proposons:</p>

                          <ul className="text-black px-4" style={{listStyleType: "disc"}}>
                              <li>
                                  <span>Des solutions sur mesure adaptées à vos besoins</span>
                              </li>
                              <li>
                                  <span>Une équipe dévoués au développement Symfony</span>
                              </li>
                              <li>
                                  <span>Des projets livrés dans les délais impartis</span>
                              </li>
                              <li>
                                  <span>Une approche de satisfaction</span>
                              </li>
                          </ul>
                      </div>
                      <div className="relative">
                          <div className="relative w-full max-w-md mx-auto">
                              <img
                                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                                  alt="Person working"
                                  className="w-full rounded-lg"
                              />
                              {/* Testimonial Quote */}
                              <div
                                  className="absolute bg-primary bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                                  <div className="flex items-start gap-2">
                                      <span className="text-2xl">👋</span>
                                      <p className="text-sm">
                                          "You made it so simple. My new site is so much faster and easier to work with
                                          than
                                          my old site."
                                      </p>
                                  </div>
                              </div>
                              {/* Decorative Dots */}
                              <div className="absolute -bottom-8 -right-8 w-16 h-16 grid grid-cols-4 gap-1">
                                  {[...Array(16)].map((_, i) => (
                                      <div key={i} className="w-1 h-1 bg-gray-200 rounded-full"/>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="container mx-auto py-12">
              <h2 className="text-3xl font-bold text-center mb-8">Expériences que nous avons conçues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 ">
                      <div className="overflow-hidde py-20 relative rounded-lg"
                           style={{overflow: "hidden", background: "#36BA98"}}>
                          <img
                              src="images/laptop2.png"
                              alt="TK Care"
                              className="w-full h-full object-cover rounded-lg"
                              style={{marginLeft: "-20%"}}
                          />
                      </div>
                      <h3 className="text-gray text-2xl mt-5  text-center font-bold">Private Sport Shop</h3>
                      <p className="text-gray text-center mt-2">
                          Vente  d'équipements et vêtements de sport
                      </p>
                  </div>

                  <div className="p-6 ">
                      <div className="overflow-hidde py-20 relative rounded-lg"
                           style={{overflow: "hidden", background: "#10375C"}}>
                          <img
                              src="images/laptop3.png"
                              alt="TK Care"
                              className="w-full h-full object-cover rounded-lg"
                          />
                      </div>
                      <h3 className="text-gray text-2xl mt-5 text-center font-bold">Largus</h3>
                      <p className="text-gray text-center mt-2">
                          Magazine automobile couvrant l'actualité, les essais, et les conseils sur les véhicules
                      </p>
                  </div>

                  <div className="p-6 ">
                      <div className="overflow-hidde py-20 relative rounded-lg"
                           style={{overflow: "hidden", background: "#4c9cc1"}}>
                          <img
                              src="images/laptop.png"
                              alt="TK Care"
                              className="w-full h-full object-cover rounded-lg"
                              style={{marginLeft: "20%"}}
                          />
                      </div>
                      <h3 className="text-gray text-center mt-5 text-2xl font-bold">Touristra Vacances</h3>
                      <p className="text-gray text-center mt-2">
                          Société française proposant des séjours tout compris, vacances familiales et circuits culturels, avec activités de loisirs en France et à l'international
                      </p>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
  );
}

export default SymfonyTechnologiePage;
