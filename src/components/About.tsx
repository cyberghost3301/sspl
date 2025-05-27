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
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold shadow-lg animate-[scaleIn_1s_ease-out_forwards_0.6s] opacity-0">
              [Placeholder: Image - Diversified Tech Solutions]
            </div>
          </div>
          <div className="md:order-1 text-center md:text-left animate-[slideInLeft_1s_ease-out_forwards_0.8s] opacity-0">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Your Trusted Technology Partner</h3>
            <p className="text-lg leading-relaxed">
              Based in **Lucknow, Uttar Pradesh**, SSPL operates as a **diversified technology solutions provider**, serving individual consumers and businesses nationwide. Our mission is to deliver cutting-edge technology and unparalleled service right to your doorstep, or digitally, wherever you are.
            </p>
          </div>
        </div>

        {/* Section 2: Core Activities & Specializations (Detailed)
        <div className="mb-16 md:mb-24 animate-[fadeIn_1s_ease-out_forwards_1s] opacity-0">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">Our Expertise & Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Hardware & Software Solutions</h4>
              <p className="text-md text-gray-700">
                Sale, purchase, repair, and trading of computers, laptops, and related hardware/software. From components to complete systems, we cover all your computing needs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Advanced Surveillance Systems</h4>
              <p className="text-md text-gray-700">
                Specializing in comprehensive security solutions: CCTV, biometric access control, attendance systems, X-ray baggage scanners, and metal detectors.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Networking & Cloud Infrastructure</h4>
              <p className="text-md text-gray-700">
                Expert services in networking setups, robust server installations, seamless cloud solutions, and innovative IoT-based integrations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Smart Home & Office Automation</h4>
              <p className="text-md text-gray-700">
                Transforming spaces with smart solutions: motorized curtain tracks, automatic pet feeders, and efficient plant irrigation systems.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Power & Entertainment Systems</h4>
              <p className="text-md text-gray-700">
                Complete solar power system projects, immersive Hi-Fi audio systems, and custom home theatre installations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Custom Studio Builds & Digital Wing</h4>
              <p className="text-md text-gray-700">
                Building custom YouTube/news/video recording studios. Our digital wing handles web, app, and software design across all major platforms.
              </p>
            </div>
          </div>
        </div>*/}

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
            {/* Placeholder for an image or illustration related to custom solutions/teamwork */}
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold shadow-lg">
              [Placeholder: Image - Customization & Teamwork]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
