import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Features from "../../Components/Features/Features";
import Facts from "../../Components/Facts/Facts";
import Footer from "../../Components/Footer/Footer";
import IPlantCard from '../../Components/IPlantCard/IPlantCard';

function HomePage() {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <Facts/>
            <Features/>
            <IPlantCard/>
            <Footer/>
        </div>
    );
}

export default HomePage;
