import React from 'react';

const Contact = () => {
  return (
    <section className="px-4 md:px-8 2xl:px-0">
      <div id="support" className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
        <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
        <div className="absolute -z-1 bottom-5 left-0 w-full h-1/3">
          <img src="./images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden" />
          <img src="./images/shape/shape-dotted-dark.svg" alt="Dotted" className="hidden dark:block" />
        </div>

        <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
          <div className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15">
            <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">Contactez-nous</h2>

            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
                <input
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
              </div>

              <div className="flex mb-11.5">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                ></textarea>
              </div>
              <div className="flex flex-wrap xl:justify-between gap-10 xl:gap-15">
                <button type="submit" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                  Envoyer le message
                  <svg className="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="animate_top w-full md:w-2/4 lg:w-[40%] md:p-7.5 xl:pt-15">
            <h2
              className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">Trouvez-nous</h2>

            <div className="mb-7.5">
              <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">Notre adresse</h4>
              <p>Tech My Team, Boulevard Abdelkrim Al Khattabi, MARRAKECH</p>
            </div>

            <div className="mb-7.5">
              <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">Adresse e-mail</h4>
              <p><a href="mailto:contact@techmyteam.com">contact@techmyteam.com</a></p>
            </div>

            <div>
              <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">Numéro de téléphone</h4>
              <p><a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
