// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Who We Are
        </h2>

        {/* Combined Section: Your Trusted Technology Partner, Our Mission, and Scalability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="md:order-2 animate-[scaleIn_1s_ease-out_forwards_0.6s] opacity-0">
            {/* Using the image from the original first section */}
            <img
              src="/about-us-1.png" // Path to your image in the public folder
              alt="Illustration representing SSPL's diverse technology solutions and adaptable team"
              className="h-64 md:h-96 rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:order-1 text-center md:text-left animate-[slideInLeft_1s_ease-out_forwards_0.8s] opacity-0">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Your Trusted Technology Partner & Assorted Solutions Provider</h3>
            <p className="text-lg leading-relaxed mb-4">
              Based in the heart of Lucknow, Uttar Pradesh, SPIRECREST SOLUTIONS PRIVATE LIMITED operates as a diversified technology solutions provider, serving individual consumers and businesses nationwide. Our mission is to deliver cutting-edge technology and unparalleled service right to your doorstep, or digitally, wherever you are.
            </p>
            <p className="text-lg leading-relaxed">
              We pride ourselves on providing highly customized solutions in niche areas such as advanced surveillance, intricate home automation, sophisticated motorized systems, unique custom PC builds, professional studio setups, cinematic home theatres, and premium solar projects. While maintaining a compact core team of 11–12 experts, we ensure nationwide service capability and flexible scaling through our robust network of 450+ trusted freelance and outsourced specialists on retainer. We also occasionally engage in works related to interior design/decor and construction/civil, adapting to diversified needs of our clientele.
            </p>
          </div>
        </div>

        {/* The "Our Expertise & Offerings" section has been completely removed from here,
            as it is now part of your `src/components/Services.tsx` component. */}

      </div>
    </section>
  );
};

export default About;