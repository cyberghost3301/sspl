// src/components/Services.tsx
import React from 'react';
// Correctly imported icons as per your provided code
import { FaLaptopCode, FaCloud, FaShieldAlt, FaHome, FaSolarPanel, FaVideo, FaMobileAlt, FaTools, FaHandsHelping } from 'react-icons/fa';

interface ServiceItem {
  icon: React.ElementType; // Type for React Icon component
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  // REORDERED CARDS AS REQUESTED:
  {
    icon: FaShieldAlt,
    title: "Advanced Surveillance Systems",
    description: "Specializing in CCTV, biometric access control, attendance systems, X-ray baggage scanners, walkie talkies, and go-through or handheld metal detectors.",
  },
  {
    icon: FaHome,
    title: "Smart Home & Office Automation",
    description: "Retro or Touch based smart switches, cutting-edge solutions like motorized curtain tracks, automatic pet feeders, and plant drip irrigation systems.",
  },
  {
    icon: FaLaptopCode,
    title: "Computer & Laptop Solutions",
    description: "Sale,Purchase, Repair, and Trading of all types of desktop, laptops, and related Hardware/Software components both Commercial or Residential.",
  },
  {
    icon: FaCloud,
    title: "Networking & Cloud Solutions",
    description: "Comprehensive services including networking setup, robust data/computing server installations, seamless Cloud/Ml/AI solutions, and IoT integrations.",
  },
  // REST OF THE CARDS REMAIN IN THEIR ORIGINAL ORDER:
  {
    icon: FaSolarPanel,
    title: "Solar Power Systems",
    description: "Complete project undertakings for efficient and sustainable Grid Tied/Off Grid/Hybrid solar power systems for homes and businesses.",
  },
  {
    icon: FaVideo,
    title: "Audio Visual & Studio Setups",
    description: "Hi-Fi audio systems, immersive home theatre installations, and custom YouTube/News/Video/Podcast recording  studios.",
  },
  {
    icon: FaMobileAlt,
    title: "Web, App & Software Design",
    description: "Our digital wing handles custom web, mobile app, and software design across all major platforms.",
  },
  {
    icon: FaTools,
    title: "Customized & Niche Solutions",
    description: "Highly tailored services in surveillance, home automation, motorized systems, custom PC builds, and premium solar projects.",
  },
  {
    icon: FaHandsHelping, // Using FaHandsHelping for consulting/support
    title: "IT Consulting & Business Solutions",
    description: "Strategic IT consulting, system integration, and tailored business solutions to optimize operations and drive technological growth.",
  },
];

const Services: React.FC = () => {
  return (
    // Changed to a strong blue gradient for the section background
    <section id="services" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Our Specializations & Services
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          At SSPL we offer a vastly diversified range of technology solutions, meticulously crafted to meet the evolving needs of both individual consumers and businesses nationwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_1.5s_ease-out_forwards_0.9s] opacity-0">
          {servicesData.map((service, index) => (
            <div
              key={index}
              // Cards remain white to stand out against the dark section background
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
            >
              {/* Prominent icon styling with a colored background circle */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-5 rounded-full text-5xl flex items-center justify-center shadow-md">
                  <service.icon />
                </div>
              </div>
              {/* Text color for card titles and descriptions remain dark as cards are white */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-md text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;