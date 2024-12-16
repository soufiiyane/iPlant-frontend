import { initializeAlpine, initializeTestimonialSwiper, initializeScrollReveal } from './Utils/Utils';
import React, {useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import CareersPage from "./Pages/CareersPage/CareersPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import CandidatureSpontaneePage from "./Pages/CandidatureSpontaneePage/CandidatureSpontaneePage";
import DrupalTechnologiePage from "./Pages/TechnologiesPage/DrupalTechnologiePage";
import SymfonyTechnologiePage from "./Pages/TechnologiesPage/SymfonyTechnologiePage";
import PimcoreTechnologiePage from "./Pages/TechnologiesPage/PimcoreTechnologiePage";
import PrestashopTechnologiePage from "./Pages/TechnologiesPage/PrestashopTechnologiePage";
import WordpressRealisationsPage from "./Pages/TechnologiesPage/WordpressTechnologiePage";
import AWSRealisationsPage from "./Pages/TechnologiesPage/AWSTechnologiePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import DetailPage from './Pages/DetailPage/DetailPage';


function App() {

  useEffect(() => {
        initializeAlpine();
        initializeTestimonialSwiper();
        initializeScrollReveal();
  }, []);

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carriere" element={<CareersPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/carriere/candidature-spontanee" element={<CandidatureSpontaneePage/>} />
            <Route path="/drupal" element={<DrupalTechnologiePage/>} />
            <Route path="/symfony" element={<SymfonyTechnologiePage/>} />
            <Route path="/pimcore" element={<PimcoreTechnologiePage/>} />
            <Route path="/prestashop" element={<PrestashopTechnologiePage/>} />
            <Route path="/wordpress" element={<WordpressRealisationsPage/>} />
            <Route path="/aws" element={<AWSRealisationsPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/plant/:id" element={<DetailPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
