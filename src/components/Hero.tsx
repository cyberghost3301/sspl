import React from 'react';

interface HeroProps {
  tagline: string;
  motto: string;
  callToAction: string;
}

const Hero: React.FC<HeroProps> = ({ tagline, motto, callToAction }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden p-4">
      {/* Background overlay for visual effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-[fadeIn_1.5s_ease-out_forwards]">
          {tagline}
        </h1>
        <p className="text-xl md:text-3xl font-light mt-4 animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
          {motto}
        </p>
        <button className="mt-8 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-[fadeIn_1.5s_ease-out_1s_forwards] opacity-0">
          {callToAction}
        </button>
      </div>
    </section>
  );
};

export default Hero;