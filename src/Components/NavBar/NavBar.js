import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';

function NavBar({ stickyMenu }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on component mount
    const userData = localStorage.getItem('userData');
    setIsLoggedIn(!!userData);

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginRedirect = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    window.location.reload(); // Refresh the current page
  };

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 py-4 z-[99999] transition-all bg-white dark:bg-gray-900 duration-300 ${
        stickyMenu ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto max-w-c-1390 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <NavLink to="/" className="block py-2 hover:text-secondary transition-colors">
                <h1 className="text-3xl sm:text-3xl md:text-xl font-black">
                  <span
                    className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1"
                  >
                    iPlant
                  </span>
                </h1>
              </NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="hover:text-primary transition-colors">Accueil</NavLink>
            <NavLink to="/blog" className="hover:text-primary transition-colors">Blog</NavLink>
            <NavLink to="/about" className="block py-2 hover:text-primary transition-colors">About</NavLink>
            {isLoggedIn ? (
                <button onClick={handleLogout} id="logout-desktop" className="hover:text-primary transition-colors">
                  Logout
                </button>
            ) : (
                <button onClick={handleLoginRedirect} className="hover:text-primary transition-colors">
                  Login
                </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden mt-4 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink to="/" className="block py-2 hover:text-primary transition-colors">Accueil</NavLink>
          <NavLink to="/blog" className="block py-2 hover:text-primary transition-colors">Blog</NavLink>
          <NavLink to="/about" className="block py-2 hover:text-primary transition-colors">About</NavLink>
          {isLoggedIn ? (
              <button onClick={handleLogout} id="logout-mobile"
                      className="block py-2 hover:text-primary transition-colors">
                Logout
              </button>
          ) : (
              <button onClick={handleLoginRedirect} className="block py-2 hover:text-primary transition-colors">
                Login
              </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
