// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
  const ssplCompanyName = "SSPL"; // Define company name here
  const ssplTagline = "Smart Ideas. Solid Executions. Scalable Results.";
  const ssplMotto = "Spot. Solve. Serve.";
  const heroCallToAction = "Discover Our Solutions";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <Navbar companyName={ssplCompanyName} />

      {/* Hero Section - Added pt-20 (or similar) to push content below fixed nav */}
      <div className="pt-20"> {/* Adjust this padding as needed to clear the fixed navbar */}
        <Hero tagline={ssplTagline} motto={ssplMotto} callToAction={heroCallToAction} />
      </div>

      {/* Other sections */}
      <About />
      <Services />
      <Team />
      <Contact />

      {/* Footer Section */}
      <footer className="w-full text-center py-8 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} SSPL. All rights reserved.</p>
        <p>Powered by React and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
