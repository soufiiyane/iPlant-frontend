import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import {
  FaWordpress,
  FaSymfony,
  FaApple,
  FaAndroid,
  FaAws,
  FaDrupal
} from 'react-icons/fa';
import { SiPrestashop, SiPimcore } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';

const iconSize = 30;

const iconColors = {
  'Drupal Solutions': '#0678BE',
  'PrestaShop Solutions': '#DF0067',
  'WordPress Solutions': '#21759B',
  'Symfony': '#000000',
  'PimCore': '#6428B4',
  'React': '#61DAFB',
  'Angular': '#DD0031',
  'Mailing': '#EA4335',
  'Web Integration': '#4285F4',
  'iOS': '#000000',
  'Android': '#3DDC84',
  'React Native': '#61DAFB',
  'AWS': '#FF9900',
  'Azure': '#0089D6',
  'Machine Learning': '#4285F4',
  'Deep Learning': '#0F9D58',
  'Natural Language Processing': '#DB4437',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'Apache Kafka': '#231F20',
  'Jenkins': '#D24939',
  'GitLab CI': '#FCA121',
  'GitHub Actions': '#2088FF',
};

const technologies = {
  'CMS et e-Commerce': [
    { name: 'Drupal Solutions', icon: <FaDrupal size={iconSize} color={iconColors['Drupal Solutions']} />, path: '/drupal' },
    { name: 'PrestaShop Solutions', icon: <SiPrestashop size={iconSize} color={iconColors['PrestaShop Solutions']} />, path: '/prestashop' },
    { name: 'WordPress Solutions', icon: <FaWordpress size={iconSize} color={iconColors['WordPress Solutions']} />, path: '/wordpress' },
  ],
  'Développements spécifiques': [
    { name: 'Symfony', icon: <FaSymfony size={iconSize} color={iconColors['Symfony']} />, path: '/symfony' },
    { name: 'PimCore', icon: <SiPimcore size={iconSize} color={iconColors['PimCore']} />, path: '/pimcore' }
  ],
  'Cloud': [
    { name: 'AWS', icon: <FaAws size={iconSize} color={iconColors['AWS']} />, path: '/aws' }
  ],
  'Integration': [
    { name: 'Web&Mailing', icon: <BsFillEnvelopeFill size={iconSize} color={iconColors['Mailing']} />, path: '/integration' },
  ],
  'Mobile': [
    { name: 'iOS', icon: <FaApple size={iconSize} color={iconColors['iOS']} />, path: '/ios' },
    { name: 'Android', icon: <FaAndroid size={iconSize} color={iconColors['Android']} />, path: '/android' },
    { name: 'React Native', icon: <TbBrandReactNative size={iconSize} color={iconColors['React Native']} />, path: '/react-native' },
  ],
  'Artificial Intelligence': [
    { name: 'Machine Learning', icon: <AiOutlineCloudServer size={iconSize} color={iconColors['Machine Learning']} />, path: '/machine-learning' },
    { name: 'Deep Learning', icon: <AiOutlineCloudServer size={iconSize} color={iconColors['Deep Learning']} />, path: '/deep-learning' },
    { name: 'Natural Language Processing', icon: <AiOutlineCloudServer size={iconSize} color={iconColors['Natural Language Processing']} />, path: '/nlp' },
  ]
};

function NavBar({ stickyMenu }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('CMS et e-Commerce');
  const [expandedCategories, setExpandedCategories] = useState({
    'CMS et e-Commerce': true
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMegaMenuOpen(false);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
    if (!megaMenuOpen) {
      setSelectedCategory('CMS et e-Commerce');
      setExpandedCategories({ 'CMS et e-Commerce': true });
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed left-0 top-0 w-full z-50 py-4 z-[99999] transition-all bg-white dark:bg-gray-900 duration-300 ${
      stickyMenu ? "shadow-md" : ""
    }`}>
      <div className="container mx-auto max-w-c-1390 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <NavLink to="/" className="block py-2 hover:text-secondary transition-colors"><h1
                className="text-3xl sm:text-3xl md:text-xl font-black">
               <span
                 className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  iPlant
                </span>
              </h1>
              </NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="hover:text-primary transition-colors">Accueil</NavLink>
            <NavLink to="/services" className="hover:text-primary transition-colors">Services</NavLink>
            <NavLink to="/carriere" className="hover:text-primary transition-colors">Carrière</NavLink>
            <button
              onClick={toggleMegaMenu}
              className="hover:text-primary focus:outline-none transition-colors flex items-center"
            >
              Technologies {megaMenuOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
            </button>
            <NavLink to="/contact" className="block py-2 hover:text-primary transition-colors">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden mt-4 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink to="/" className="block py-2 hover:text-primary transition-colors">Accueil</NavLink>
          <NavLink to="/services" className="block py-2 hover:text-primary transition-colors">Services</NavLink>
          <NavLink to="/carriere" className="block py-2 hover:text-primary transition-colors">Carrière</NavLink>
          <button
            onClick={toggleMegaMenu}
            className="w-full text-left py-2 hover:text-primary focus:outline-none transition-colors flex items-center justify-between"
            aria-expanded={megaMenuOpen}
          >
            Technologies {megaMenuOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {megaMenuOpen && (
            <div className="pl-4 mt-2">
              {Object.keys(technologies).map((category) => (
                <div key={category} className="mb-2">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full text-left py-1 flex items-center justify-between"
                    aria-expanded={expandedCategories[category]}
                  >
                    {category} {expandedCategories[category] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {expandedCategories[category] && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {technologies[category].map((tech) => (
                        <li key={tech.name} className="flex items-center py-1">
                          <NavLink to={tech.path} className="flex items-center hover:text-primary transition-colors">
                            <span className="mr-2">{tech.icon}</span>
                            {tech.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <NavLink to="/contact" className="block py-2 hover:text-primary transition-colors">Contact</NavLink>
        </nav>
      </div>

      {/* Desktop Mega Menu */}
      {megaMenuOpen && !mobileMenuOpen && (
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg mt-4" style={{ width: '80%', maxWidth: '1390px' }}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex">
              <div className="w-2/3 pr-4">
                <div className="flex">
                  <div className="w-1/3 border-r pr-4">
                    <ul className="space-y-2">
                      {Object.keys(technologies).map((category) => (
                        <li
                          key={category}
                          className={`cursor-pointer ${selectedCategory === category ? 'text-primary font-semibold' : ''}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-2/3 pl-4">
                    <h3 className="text-lg font-semibold mb-4">{selectedCategory}</h3>
                    <ul className="space-y-2">
                      {technologies[selectedCategory] && technologies[selectedCategory].map((tech) => (
                        <li key={tech.name} className="flex items-center">
                          <NavLink to={tech.path} className="flex items-center hover:text-primary transition-colors">
                            <span className="mr-2">{tech.icon}</span>
                            {tech.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <img
                  src="images/technologies.png"
                  alt="Tech My Team Banner"
                  className="w-full max-h-80 object-cover rounded-lg border-2 border-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
