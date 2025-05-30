// src/components/Hero.tsx
import React from 'react';

interface HeroProps {
  tagline: string;
  motto: string;
  callToAction: string;
}

const Hero: React.FC<HeroProps> = ({ tagline, motto, callToAction }) => {
  const displayTagline = "Smart Ideas.<br/>Solid Executions.<br/>Scalable Results.";
  const newMotto = "Innovating for a Connected Tomorrow.";

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden p-4 pt-16 md:pt-20">
      {/* Background overlay for visual effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Increased space-y- to space-y-8 for more vertical separation */}
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto px-4">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight animate-[fadeIn_1.5s_ease-out_forwards]"
          dangerouslySetInnerHTML={{ __html: displayTagline }}
        ></h1>
        {/* Removed mt-4 from here, relying on space-y-8 from parent */}
        <p className="text-xl md:text-3xl font-light text-gray-200 animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
          {newMotto}
        </p>
        {/* Removed mt-8 from here, relying on space-y-8 from parent */}
        <a
          href="#services"
          className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-[fadeIn_1.5s_ease-out_1s_forwards] opacity-0"
        >
          {callToAction}
        </a>
      </div>
    </section>
  );
};

export default Hero;