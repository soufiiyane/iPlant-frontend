import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Features from "../../Components/Features/Features";

function AboutUsPage() {
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
      <div className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold  mb-8">About Us</h1>
          <div className="space-y-6">
            <p className="text-lg">
              Welcome to our medicinal plants platform. We are dedicated to sharing knowledge 
              about the healing power of nature through traditional and modern botanical medicine.
            </p>
            <p className="text-lg">
              Our mission is to preserve and promote the understanding of medicinal plants,
              their properties, and their sustainable use in modern healthcare practices.
            </p>
            <p className="text-lg">
              With years of research and collaboration with experts in the field,
              we provide reliable information about various medicinal plants,
              their benefits, and proper usage guidelines.
            </p>
          </div>
        </div>
      </div>
      <Features/>
      <Footer />
    </div>
  );
}

export default AboutUsPage;