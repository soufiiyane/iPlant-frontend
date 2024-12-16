import React, { useState } from 'react';

const CandidatureSpontanee = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    codePostal: '',
    ville: '',
    pays: '',
    cv: null,
    message: '',
    notRobot: false,
    receiveComm: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full mx-auto p-4  py-40 max-w-c-1390">
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-sm uppercase mb-4">Candidature</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
            <span
              className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
              Spontanée
            </span>
          </h1>
          <p className="text-gray-600 mb-6">Vous souhaitez rejoindre un acteur majeur du Digital ?</p>
        </div>
        <div className="w-full lg:w-[60%]">
          <h2 className="text-2xl font-bold mb-6">CONTACTEZ-NOUS</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="prenom"
              placeholder="Votre prénom *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre Email *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Numéro de téléphone"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="codePostal"
              placeholder="Code postal *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="ville"
              placeholder="Votre ville *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="pays"
              placeholder="Votre pays *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="flex items-center space-x-2">
              <label htmlFor="cv" className="text-sm text-gray-600">Chargez votre CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="Votre message *"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded h-32"
            />

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="receiveComm"
                name="receiveComm"
                onChange={handleChange}
                className="h-4 w-4 mt-1"
              />
              <label htmlFor="receiveComm" className="text-sm text-gray-600">
                En cochant cette case, vous déclarez vouloir recevoir des communications de TechMyTeam.
              </label>
            </div>
            <button type="submit"
                    className="bg-primary hover:bg-primaryho text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">
              SOUMETTRE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidatureSpontanee;
