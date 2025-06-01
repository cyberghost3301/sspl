// src/App.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import { Footer } from './components/Footer'; // Correct named import for Footer
import Bttb from './components/Bttb';
import Fcb from './components/Fcb'; // <--- New: Import Fcb component

const App = () => {
  const ssplCompanyName = "SSPL";
  const ssplTagline = "Smart Ideas. Solid Executions. Scalable Results.";
  const ssplMotto = "Spot. Solve. Serve.";
  const heroCallToAction = "Discover Our Solutions";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <Navbar companyName={ssplCompanyName} />

      {/* Hero Section */}
      <div> {/* This div might be removed if Hero itself is a section */}
        <Hero tagline={ssplTagline} motto={ssplMotto} callToAction={heroCallToAction} />
      </div>

      {/* Other sections */}
      <About />
      <Services />
      <Team />
      <Contact />

      <Footer />

      {/* Floating Call-to-Action Buttons */}
      <Fcb /> {/* <--- New: Render Fcb component here */}

      {/* Back to Top Button */}
      <Bttb />
    </div>
  );
};

export default App;