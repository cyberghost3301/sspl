// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Who We Are
        </h2>

        {/* Section 1: Business Core */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="md:order-2"> {/* Image/Placeholder on right for desktop */}
            {/* Replaced placeholder div with img tag */}
            <img
              src="public/about-us-1.png" // Path to your image in the public folder
              alt="Diverse technology solutions from SSPL" // Descriptive alt text
              className="h-64 md:h-96 rounded-lg shadow-lg object-cover w-full animate-[scaleIn_1s_ease-out_forwards_0.6s] opacity-0"
            />
          </div>
          <div className="md:order-1 text-center md:text-left animate-[slideInLeft_1s_ease-out_forwards_0.8s] opacity-0">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Your Trusted Technology Partner</h3>
            <p className="text-lg leading-relaxed">
              Based in **Lucknow, Uttar Pradesh**, SSPL operates as a **diversified technology solutions provider**, serving individual consumers and businesses nationwide. Our mission is to deliver cutting-edge technology and unparalleled service right to your doorstep, or digitally, wherever you are.
            </p>
          </div>
        </div>

        {/* Section 2: Core Activities & Specializations (Detailed) - This section is commented out in your provided code */}
        {/* If you want to uncomment and update this section, remember to follow similar image integration steps */}

        {/* Section 3: Unique Differentiators & Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left animate-[slideInRight_1s_ease-out_forwards_1.2s] opacity-0">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Customized Solutions & Scalability</h3>
            <p className="text-lg leading-relaxed mb-4">
              We pride ourselves on providing **highly customized solutions** in niche areas such as advanced surveillance, intricate home automation, sophisticated motorized systems, unique custom PC builds, professional studio setups, cinematic home theatres, and premium solar projects.
            </p>
            <p className="text-lg leading-relaxed">
              While maintaining a compact core team of 11–12 experts, we ensure **nationwide service capability** and flexible scaling through our robust network of trusted freelance and outsourced specialists. We also occasionally engage in interior and construction work, adapting to diverse client needs.
            </p>
          </div>
          <div className="md:order-2 animate-[scaleIn_1s_ease-out_forwards_1.4s] opacity-0">
            {/* Replaced placeholder div with img tag */}
            <img
              src="/about-us-1.png" // Using the same image for learning purposes
              alt="Customized solutions and a scalable team at SSPL" // Descriptive alt text
              className="h-64 md:h-96 rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
