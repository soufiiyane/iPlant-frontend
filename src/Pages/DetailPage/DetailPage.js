import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { NavLink } from "react-router-dom";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

// Comment Form Component
const CommentForm = ({ plantId, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (!userData) {
      navigate('/login', { state: { from: `/plant/${plantId}` } });
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://ssmb5oqxxa.execute-api.us-east-1.amazonaws.com/dev/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PlantId: plantId,
          FirstName: userData.firstName,
          LastName: userData.lastName,
          Text: comment,
          UserId: userData.userId,
          UserImageUrl: userData.userImageUrl
        })
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      onCommentAdded();
      setComment('');
    } catch (error) {
      setError('Failed to post comment. Please try again.');
      console.error('Error posting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none h-24"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-titlebgdark text-white py-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi...
              </>
            ) : (
              'Publier le commentaire'
            )}
          </button>
          <hr/>
        </div>
      </form>
    </div>
  );
};

// Accordion Section Component
const AccordionSection = ({ title, items }) => (
  <Disclosure as="div" className="mt-4">
    {({ open }) => (
      <div className="bg-white rounded-lg">
        <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-50">
          <span>{title}</span>
          <svg
            className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500 transition-transform duration-200`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Disclosure.Button>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="px-4 py-3">
            <ul className="space-y-2">
              {(items || []).map((item, index) => (
                <li key={index} className="text-gray-600">• {item?.S || 'N/A'}</li>
              ))}
            </ul>
          </Disclosure.Panel>
        </Transition>
      </div>
    )}
  </Disclosure>
);

// Main DetailPage Component
const DetailPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshComments, setRefreshComments] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    setIsAuthenticated(!!userData);
  }, []);
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
  }, [id, refreshComments]);

  const handleCommentAdded = () => {
    setRefreshComments(prev => prev + 1);
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <h2 className="text-red-600 text-xl font-semibold">Erreur de chargement</h2>
        <p className="text-red-500 mt-2">{error}</p>
      </div>
    </div>
  );

  if (!plant) return null;

  return (
    <div>
    <NavBar/>
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLink 
          to="/" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </NavLink>

        <div className="bg-white rounded-xl  overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-[600px]">
                <img 
                  src={plant?.ImageS3Url || ''} 
                  alt={plant?.Name || 'Plant Image'} 
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{plant?.Name || 'Unknown Plant'}</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">{plant?.Description || 'No description available'}</p>

              <div className="space-y-4">
                <AccordionSection title="Propriétés" items={plant?.Properties} />
                <AccordionSection title="Régions" items={plant?.Region} />
                <AccordionSection title="Utilisations" items={plant?.Uses} />
                <AccordionSection title="Précautions" items={plant?.Precautions} />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Commentaires</h3>
                
                {!isAuthenticated ? (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600">
                      Veuillez vous{' '}
                      <NavLink to="/login" state={{ from: `/plant/${id}` }} className="text-black">
                        connecter
                      </NavLink>
                      {' '}pour laisser un commentaire.
                    </p>
                  </div>
                ) : (
                  <CommentForm plantId={id} onCommentAdded={handleCommentAdded} />
                )}
                
                {(plant?.Comments || []).length === 0 ? (
                  <p className="text-gray-500 italic mt-4">Aucun commentaire</p>
                ) : (
                  <div className="space-y-4 mt-6">
                    {plant?.Comments.map((comment, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-2 transition-all hover:bg-gray-100">
                        <div className="flex items-start">
                          <img 
                            src={comment?.M?.UserImageUrl?.S || '/default-avatar.png'} 
                            alt={`${comment?.M?.FirstName?.S || 'Unknown'} ${comment?.M?.LastName?.S || ''}`} 
                            className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-gray-900">
                                {comment?.M?.FirstName?.S || 'Anonymous'} {comment?.M?.LastName?.S || ''}
                              </p>
                            </div>
                            <p className="text-gray-600 mt-1">{comment?.M?.Text?.S || ''}</p>
                          </div>
                        </div>
                        <hr/>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DetailPage;