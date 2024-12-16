import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {NavLink} from "react-router-dom";

const ServiceItem = ({ text, options, paths }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between text-3xl font-light cursor-pointer transition-colors duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`inline-block transition-colors duration-300 ease-in-out relative ${
            (isHovered || isOpen)
              ? 'before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1'
              : 'text-gray-800'
          }`}
        >
          {(isHovered || isOpen) && <span className="mr-2">&gt;</span>}
          {text}
        </span>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </div>
      {isOpen && (
        <div className="mt-2 ml-8 space-y-2">
          {options.map((option, index) => (
            <div key={index} className="text-xl font-light text-gray-600 hover:text-pink-500 cursor-pointer">
              <NavLink to={paths[index]}>{option}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      name: "Développements spécifiques",
      options: ["Symfony", "PimCore"],
      paths: ["/symfony", "/pimcore"],
    },
    {
      name: "CMS et e-Commerce",
      options: ["Drupal Solutions", "PrestaShop Solutions", "WordPress Solutions"],
      paths: ["/drupal", "/prestashop", "/wordpress"],
    },
    {
      name: "Solutions mobiles",
      options: ["Android", "IOS"],
      paths: ["/android", "/ios"],
    },
    {
      name: "Integration",
      options: ["Mailing", "Web responsive"],
      paths: ["/seo", "/social-media-marketing"],
    },
  ];


  return (
    <div className="bg-gray-100 container mx-auto px-4 py-12 mx-auto max-w-c-1390">
      <h2 className="text-sm uppercase mb-4">NOS</h2>
      <h1 className="text-3xl font-black mb-12"><span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">Services</span>
      </h1>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem key={index} text={service.name} options={service.options} paths={service.paths} />
        ))}
      </div>
      <div className="my-10"></div>
    </div>
  );
};

export default Services;
