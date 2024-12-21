import { initializeAlpine, initializeTestimonialSwiper, initializeScrollReveal } from './Utils/Utils';
import React, {useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/BlogPage/BlogPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
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
            <Route path="/blog" element={<ServicesPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/plant/:id" element={<DetailPage/>} />
            <Route path="/login" element={<LoginPage/>} />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
