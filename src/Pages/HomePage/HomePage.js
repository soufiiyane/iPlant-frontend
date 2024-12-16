import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Features from "../../Components/Features/Features";
import Facts from "../../Components/Facts/Facts";
import Footer from "../../Components/Footer/Footer";
import ChatBot from "../../Components/ChatBot/ChatBot";
import IPlantCard from '../../Components/IPlantCard/IPlantCard';

function HomePage() {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.pageYOffset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavigation = () => setNavigationOpen(!navigationOpen);

    return (
        <div>
            <NavBar
                stickyMenu={stickyMenu}
                navigationOpen={navigationOpen}
                toggleNavigation={toggleNavigation}
            />
            <HeroSection/>
            <Facts/>
            <ChatBot/>
            <Features/>
            <IPlantCard/>
            <Footer/>
        </div>
    );
}

export default HomePage;
