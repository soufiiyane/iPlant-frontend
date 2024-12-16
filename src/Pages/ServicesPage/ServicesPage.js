import React, { useEffect, useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from "react-router-dom";

const BlogPage = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperties, setSelectedProperties] = useState([]);

  const plantsPerPage = 9; // Show 9 cards per page
  const propertiesList = [
    'Calmante', 
    'Anti-inflammatoire', 
    'Antispasmodique', 
    'Digestive', 
    'Relaxante'
  ];

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://ssmb5oqxxa.execute-api.us-east-1.amazonaws.com/dev/medicinalPlants');
        const data = await response.json();
        const items = JSON.parse(data.body).items;
        setPlants(items);
        setFilteredPlants(items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  // Filtering and Search Logic
  useEffect(() => {
    let result = plants;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(plant => 
        plant.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by properties
    if (selectedProperties.length > 0) {
      result = result.filter(plant => 
        plant.Properties.some(prop => 
          selectedProperties.includes(prop.S)
        )
      );
    }

    setFilteredPlants(result);
    setCurrentPage(1);
  }, [searchTerm, selectedProperties, plants]);

  // Pagination Logic
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);
  const totalPages = Math.ceil(filteredPlants.length / plantsPerPage);

  const handlePropertyToggle = (property) => {
    setSelectedProperties(prev => 
      prev.includes(property) 
        ? prev.filter(p => p !== property)
        : [...prev, property]
    );
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="spinner"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-500 mt-10">
      Erreur de chargement: {error}
    </div>
  );

  return (
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-xl">
          <div className="mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Rechercher une plante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-full pl-10"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <Filter className="mr-2" size={18} /> Propriétés
            </h3>
            {propertiesList.map(property => (
              <div key={property} className="flex items-center mb-2">
                <input 
                  type="checkbox" 
                  id={property}
                  checked={selectedProperties.includes(property)}
                  onChange={() => handlePropertyToggle(property)}
                  className="mr-2"
                />
                <label htmlFor={property}>{property}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPlants.map((plant) => (
              <div 
                key={plant.PlantId} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <img 
                  src={plant.ImageS3Url} 
                  alt={plant.Name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-3">{plant.Name}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {plant.Properties.map((property, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                      >
                        {property.S}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <NavLink 
                      to={`/plant/${plant.PlantId}`} 
                      className="text-emerald-600 hover:underline"
                    >
                      En savoir plus
                      </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="mx-2 p-2 disabled:opacity-50"
            >
              <ChevronLeft />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`mx-2 px-4 py-2 rounded-full ${
                  currentPage === index + 1 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="mx-2 p-2 disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
