import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // Get the plant ID from the URL
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await fetch(`https://ssmb5oqxxa.execute-api.us-east-1.amazonaws.com/dev/medicinalPlants`);
        const data = await response.json();
        const plantDetails = JSON.parse(data.body).items.find(item => item.PlantId === id);
        setPlant(plantDetails);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlantDetails();
  }, [id]);

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
    <div className="mx-auto max-w-4xl px-4 md:px-8 xl:px-0">
      <Link to="/" className="text-emerald-600 hover:underline">Retour</Link>
      <div className="mt-8">
        <img 
          src={plant.ImageS3Url} 
          alt={plant.Name} 
          className="w-full h-96 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-6">{plant.Name}</h1>
        <p className="text-lg mt-4">{plant.Description}</p>

        <h3 className="mt-6 font-semibold text-xl">Propriétés</h3>
        <ul className="list-disc pl-5 mt-2">
          {plant.Properties.map((property, index) => (
            <li key={index}>{property.S}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">Régions</h3>
        <ul className="list-disc pl-5 mt-2">
          {plant.Region.map((region, index) => (
            <li key={index}>{region.S}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">Utilisations</h3>
        <ul className="list-disc pl-5 mt-2">
          {plant.Uses.map((use, index) => (
            <li key={index}>{use.S}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">Précautions</h3>
        <ul className="list-disc pl-5 mt-2">
          {plant.Precautions.map((precaution, index) => (
            <li key={index}>{precaution.S}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">Articles</h3>
        <ul className="mt-2">
          {plant.Articles.map((article, index) => (
            <li key={index}>
              <a href={article.S} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                {article.S}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">Commentaires</h3>
        {plant.Comments.length === 0 ? (
          <p className="text-gray-500">Aucun commentaire</p>
        ) : (
          <ul className="mt-2">
            {plant.Comments.map((comment, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center">
                  <img 
                    src={comment.M.UserImageUrl.M.S} 
                    alt={comment.M.FirstName.M.S} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold">{comment.M.FirstName.M.S} {comment.M.LastName.M.S}</p>
                    <p>{comment.M.Text.M.S}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
