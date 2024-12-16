import React, { useState, useMemo } from 'react';
import { Search, MapPin, FileText, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const initialJobListings = [
  { title: "Consultant Technique PHP/Symfony", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Développement Backend" },
  { title: "Développeur/Architecte Senior Pimcore", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Développement Backend" },
  { title: "Spécialiste en Développement Frontend", location: "Marrakech", country: "Maroc", type: "CDD", expertise: "Développement Frontend" },
  { title: "Développeur Solutions Cloud Azure", location: "Marrakech", country: "Maroc", type: "Freelance", expertise: "Cloud Engineering" },
  { title: "Ingénieur Test Fonctionnel", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Assurance Qualité" },
  { title: "Développeur Solutions AWS", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Cloud Engineering" },
  { title: "Ingénieur DevOps OCI", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "DevOps" },
  { title: "Développeur Vue.js", location: "Marrakech", country: "Maroc", type: "CDD", expertise: "Développement Frontend" },
  { title: "Architecte Cloud Multi-Plateforme", location: "Marrakech", country: "Maroc", type: "Freelance", expertise: "Cloud Engineering" },
  { title: "Consultant en Automatisation des Tests", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Assurance Qualité" },
  { title: "Architecte Logiciel Java/Spring", location: "Marrakech", country: "Maroc", type: "Freelance", expertise: "Développement Backend" },
  { title: "Spécialiste en Microservices Kubernetes", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Cloud Engineering" },
  { title: "Ingénieur Machine Learning", location: "Marrakech", country: "Maroc", type: "CDD", expertise: "Intelligence Artificielle" },
  { title: "Développeur Back-End Node.js", location: "Marrakech", country: "Maroc", type: "Freelance", expertise: "Développement Backend" },
  { title: "Ingénieur Systèmes et Réseaux", location: "Marrakech", country: "Maroc", type: "CDI", expertise: "Infrastructure" },
];




const ITEMS_PER_PAGE = 10;

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    country: '',
    location: '',
    expertise: '',
    type: ''
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = useMemo(() => {
    return initialJobListings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = !filters.country || job.country === filters.country;
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesExpertise = !filters.expertise || job.expertise === filters.expertise;
      const matchesType = !filters.type || job.type === filters.type;

      return matchesSearch && matchesCountry && matchesLocation && matchesExpertise && matchesType;
    });
  }, [searchTerm, filters]);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const uniqueOptions = useMemo(() => ({
    countries: [...new Set(initialJobListings.map(job => job.country))],
    locations: [...new Set(initialJobListings.map(job => job.location))],
    expertises: [...new Set(initialJobListings.map(job => job.expertise))],
    types: [...new Set(initialJobListings.map(job => job.type))]
  }), []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4  max-w-c-1390">
      <h2 className="text-sm uppercase mb-4">DÉCOUVREZ</h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
      <span
        className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
        Nos Opportunités Disponibles
      </span>
      </h1>
      <div className="dark:bg-black bg-white rounded-lg overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Recherchez un titre de poste, un lieu, un travail à distance..."
                className="w-full pl-10 pr-4 py-2  bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when search term changes
                }}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20}/>
            </div>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('country', e.target.value)}
              value={filters.country}
            >
              <option value="">Tous les pays</option>
              {uniqueOptions.countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('location', e.target.value)}
              value={filters.location}
            >
              <option value="">Toutes les agences</option>
              {uniqueOptions.locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('expertise', e.target.value)}
              value={filters.expertise}
            >
              <option value="">Toutes les expertises</option>
              {uniqueOptions.expertises.map(expertise => (
                <option key={expertise} value={expertise}>{expertise}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('type', e.target.value)}
              value={filters.type}
            >
              <option value="">Tous les types de contrat</option>
              {uniqueOptions.types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 ">
            {paginatedJobs.map((job, index) => (
              <div key={index} className="flex hover:bg-gray-50 justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin size={16} className="mr-1"/>
                    {job.location}, {job.country}
                    <FileText size={16} className="ml-4 mr-1"/>
                    {job.type}
                  </div>
                </div>
                <a href="#"><ArrowRight className="text-pink-500"/></a>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                Aucun poste ne correspond à votre recherche.
              </div>
            )}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft size={20}/>
              </button>
              <span>{currentPage} / {pageCount}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight size={20}/>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
