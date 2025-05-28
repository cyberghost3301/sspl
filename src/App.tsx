// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import { Footer } from './components/Footer'; // <--- IMPORT THE FOOTER COMPONENT HERE

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

      {/* Footer Section - Now using the dedicated Footer component */}
      <Footer /> {/* <--- USE THE FOOTER COMPONENT HERE */}
    </div>
  );
};

export default App;