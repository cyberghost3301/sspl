// src/components/Navbar.tsx
import React, { useState } from 'react'; // Only useState is needed now

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Removed: isNavbarVisible state, lastScrollY state, handleScroll function, and useEffect for scroll behavior.
  // The navbar will now always be visible when fixed.

  return (
    // Navbar is fixed at the top, but without the dynamic transform/visibility classes.
    <nav className="bg-gray-900 text-white p-4 md:p-6 shadow-lg fixed w-full z-50 top-0 left-0"> 
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