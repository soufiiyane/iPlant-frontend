import React, { useEffect, useState } from 'react';
import { Leaf, AlertTriangle } from 'lucide-react';

const truncateDescription = (text, wordLimit = 10) => {
  const words = text.split(' ');
  const truncated = words.slice(0, wordLimit).join(' ');
  return words.length > wordLimit ? `${truncated}...` : truncated;
};

const MedicinalPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://ssmb5oqxxa.execute-api.us-east-1.amazonaws.com/dev/medicinalPlants');
        const data = await response.json();
        const items = JSON.parse(data.body).items;
        setPlants(items.slice(0, 4)); // Limit to 4 plants
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="flex items-center space-x-3 text-emerald-600">
        <Leaf className="animate-pulse" />
        <span className="text-lg font-medium">Discovering medicinal wonders...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="text-red-500 w-12 h-12" />
      </div>
      <p className="text-red-700 font-semibold">Unable to load plant information</p>
      <p className="text-red-500 text-sm mt-2">{error}</p>
    </div>
  );

  return (
    <div className="mx-auto max-w-c-1315 px-4 mb-10 md:px-8 xl:px-0">
      <div className=" mb-12">
      <h2 className="text-sm uppercase mb-4">POURQUOI</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Travailler Avec Nous
            </span>
          </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plants.map((plant) => (
          <div 
            key={plant.PlantId}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={plant.ImageS3Url}
                alt={plant.Name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                {plant.Name}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {plant.Tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium tracking-wider"
                  >
                    {tag.S}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {truncateDescription(plant.Description)}
              </p>
              
              <div className="flex items-center text-sm text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer">
                <Leaf className="mr-2 w-4 h-4" />
                <span className="font-semibold">Learn More</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinalPlants;