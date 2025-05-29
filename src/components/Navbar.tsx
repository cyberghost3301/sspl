// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle scroll for smart navbar behavior
  const handleScroll = () => {
    // Logic to show/hide navbar based on scroll direction
    if (window.scrollY < 100) { // Always show navbar if near the top (e.g., within 100px of scroll top)
      setIsNavbarVisible(true);
    } else if (window.scrollY > lastScrollY && window.scrollY > 150) { // Scrolling down and past an initial offset
      setIsNavbarVisible(false);
    } else if (window.scrollY < lastScrollY) { // Scrolling up
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency array: re-run effect if lastScrollY changes

  return (
    <nav className={`bg-gray-900 text-white p-4 md:p-6 shadow-lg fixed w-full z-50 top-0 left-0
                    transition-transform duration-300 ease-in-out
                    ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}> {/* Dynamic class for hide/show */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Company Logo/Name */}
        <a href="#home" className="text-2xl md:text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors duration-300" onClick={closeMenu}>
          {companyName}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-lg hover:text-blue-300 transition-colors duration-300">About Us</a>
          <a href="#services" className="text-lg hover:text-blue-300 transition-colors duration-300">Services</a>
          <a href="#team" className="text-lg hover:text-blue-300 transition-colors duration-300">Our Team</a>
          <a href="#contact" className="text-lg hover:text-blue-300 transition-colors duration-300">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none p-2">
            ☰ {/* Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditionally rendered and animated) */}
      <div className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-4">
          <a href="#about" className="w-11/12 py-2 px-4 text-xl rounded-md hover:bg-gray-700 hover:text-blue-200 transition-colors duration-300 text-center" onClick={closeMenu}>About Us</a>
          <a href="#services" className="w-11/12 py-2 px-4 text-xl rounded-md hover:bg-gray-700 hover:text-blue-200 transition-colors duration-300 text-center" onClick={closeMenu}>Services</a>
          <a href="#team" className="w-11/12 py-2 px-4 text-xl rounded-md hover:bg-gray-700 hover:text-blue-200 transition-colors duration-300 text-center" onClick={closeMenu}>Our Team</a>
          <a href="#contact" className="w-11/12 py-2 px-4 text-xl rounded-md hover:bg-gray-700 hover:text-blue-200 transition-colors duration-300 text-center" onClick={closeMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;