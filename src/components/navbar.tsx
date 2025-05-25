// src/components/Navbar.tsx
import React from 'react';
import logo from '../assets/sspl-logo.png'; // Make sure to add your logo in the assets folder

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="SSPL Logo" className="h-10 w-auto" />
          <span className="ml-3 font-bold text-xl text-gray-800">SPIRECREST SOLUTIONS</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
          <button className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};