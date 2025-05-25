// src/App.tsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact'; // Import the Contact component

const App = () => {
  const ssplTagline = "Smart Ideas. Solid Executions. Scalable Results.";
  const ssplMotto = "Spot. Solve. Serve.";
  const heroCallToAction = "Discover Our Solutions";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <Hero tagline={ssplTagline} motto={ssplMotto} callToAction={heroCallToAction} />

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Team Section */}
      <Team />

      {/* Contact Us Section */}
      <Contact /> {/* Add the Contact component here */}

      {/* Footer Section */}
      <footer className="w-full text-center py-8 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} SSPL. All rights reserved.</p>
        <p>Powered by React and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;