// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 md:p-6 shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Company Logo/Name */}
        <a href="#home" className="text-2xl md:text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors duration-300">
          {companyName}
          {/* You can replace the text with an image: */}
          {/* <img src="/path/to/your/logo.png" alt={companyName} className="h-8 md:h-10" /> */}
        </a>

        {/* Navigation Links (Placeholder for now) */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-lg hover:text-blue-300 transition-colors duration-300">About Us</a>
          <a href="#services" className="text-lg hover:text-blue-300 transition-colors duration-300">Services</a>
          <a href="#team" className="text-lg hover:text-blue-300 transition-colors duration-300">Our Team</a>
          <a href="#contact" className="text-lg hover:text-blue-300 transition-colors duration-300">Contact Us</a>
        </div>

        {/* Mobile Menu Button (Optional - for later implementation) */}
        <div className="md:hidden">
          {/* <button className="text-white text-2xl focus:outline-none">
            &#9776; // Hamburger icon
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
