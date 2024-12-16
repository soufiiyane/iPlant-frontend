import React from 'react';
import { NavLink } from "react-router-dom";

const CTA = ({ linkTo, linkText, title, description }) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
      <div
        className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-16 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"
      >
        <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
          <div className="animate_left md:w-[60%] lg:w-1/2">
            <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
              {title}
            </h2>
            <p className="mb-4 md:mb-0">
              {description}
            </p>
          </div>
          <div className="animate_right lg:w-[40%] flex justify-end">
            <NavLink
              to={linkTo}
              className="inline-flex items-center gap-2.5 font-medium text-white dark:text-black bg-black dark:bg-white rounded-full py-3 px-6 hover:bg-opacity-90 transition-all duration-300"
            >
              {linkText}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
