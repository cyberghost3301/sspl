// src/App.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Bttb from './components/Bttb'; // <--- Import your Bttb component

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
      <div>
        <Hero tagline={ssplTagline} motto={ssplMotto} callToAction={heroCallToAction} />
      </div>

      {/* Other sections */}
      <About />
      <Services />
      <Team />
      <Contact />

      <Footer />

      {/* Back to Top Button */}
      <Bttb /> {/* <--- Render the Bttb component here */}
    </div>
  );
};

export default App;