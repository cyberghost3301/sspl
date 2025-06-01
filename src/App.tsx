// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/Services';
import Team from './components/Team'; // Ensure Team is imported

function App() {
  const companyName = "Spirecrest"; // Ensure this matches your company name

  return (
    <div className="App">
      <Navbar companyName={companyName} />
      
      <main className="pt-20"> {/* General padding-top for content below fixed Navbar */}
        {/* Home Section - ADDED scroll-mt-24 */}
        <section id="home" className="h-screen bg-blue-500 text-white flex items-center justify-center scroll-mt-24">
          <h1 className="text-5xl font-bold">Welcome to {companyName}</h1>
        </section>

        {/* About Section - ADDED scroll-mt-24 */}
        <section id="about" className="py-16 bg-gray-100 text-center scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800">About Us Placeholder</h2>
            <p className="text-gray-600 mt-4">More content about your company will go here.</p>
        </section>

        <Services /> {/* Your existing Services section, will be updated separately */}

        <Team /> {/* Your existing Team section, will be updated separately */}

        <Contact /> {/* Your existing Contact section, will be updated separately */}
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;