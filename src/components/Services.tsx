// src/components/Services.tsx
import React from 'react';
import { FaLaptopCode, FaCloud, FaShieldAlt, FaHome, FaSolarPanel, FaVideo, FaWifi, FaMobileAlt, FaTools } from 'react-icons/fa'; // Import specific icons

interface ServiceItem {
  icon: React.ElementType; // Type for React Icon component
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: FaLaptopCode,
    title: "Computer & Laptop Solutions",
    description: "Sale, purchase, repair, and trading of all types of computers, laptops, and related hardware/software components.",
  },
  {
    icon: FaShieldAlt,
    title: "Advanced Surveillance Systems",
    description: "Specializing in CCTV, biometric access control, attendance systems, X-ray baggage scanners, and metal detectors.",
  },
  {
    icon: FaCloud,
    title: "Networking & Cloud Solutions",
    description: "Comprehensive services including networking setup, robust server installations, seamless cloud solutions, and IoT integrations.",
  },
  {
    icon: FaHome,
    title: "Smart Home & Office Automation",
    description: "Cutting-edge solutions like motorized curtain tracks, automatic pet feeders, and plant irrigation systems.",
  },
  {
    icon: FaSolarPanel,
    title: "Solar Power Systems",
    description: "Complete project undertakings for efficient and sustainable solar power systems for homes and businesses.",
  },
  {
    icon: FaVideo,
    title: "Audio Visual & Studio Setups",
    description: "Hi-Fi audio systems, immersive home theatre installations, and custom YouTube/news/video recording studios.",
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
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100 text-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Our Specializations & Services
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          At SSPL, we offer a diverse range of technology solutions, meticulously crafted to meet the evolving needs of both individual consumers and businesses nationwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_1.5s_ease-out_forwards_0.9s] opacity-0">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <service.icon className="text-5xl text-indigo-600 mb-6" />
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
