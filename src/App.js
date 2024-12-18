import { initializeAlpine, initializeTestimonialSwiper, initializeScrollReveal } from './Utils/Utils';
import React, {useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import DetailPage from './Pages/DetailPage/DetailPage';
import LoginPage from './Pages/LoginPage/LoginPage';


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
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/plant/:id" element={<DetailPage/>} />
            <Route path="/login" element={<LoginPage/>} />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
