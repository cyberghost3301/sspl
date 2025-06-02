// src/components/Team.tsx
import React from 'react';

// Import your profile images directly from src/assets
import aumProfile from '../assets/aum.jpg';
import desheshProfile from '../assets/deshesh.jpg';

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string; // This will now hold the imported image URL
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aum Chatterjee',
    title: 'Founding Director',
    imageSrc: aumProfile, // Use the imported image variable
  },
  {
    name: 'Deshesh Agnihotri',
    title: 'Managing Director',
    imageSrc: desheshProfile, // Use the imported image variable
  },
];

const Team: React.FC = () => {
  return (
    // Changed section background to bg-gray-50 for a subtle grey tone, added scroll-mt-24
    <section id="team" className="py-16 md:py-24 bg-gray-50 text-gray-800 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-[fadeIn_1.5s_ease-out_forwards_0.6s] opacity-0">
          {teamMembers.map((member, index) => (
            // ADDED CARD STYLING AND HOVER EFFECTS TO THIS DIV
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center
                         transform-gpu transition-all duration-300
                         hover:scale-105 hover:shadow-xl cursor-pointer" // Hover effects added here
            >
              {/* Added image-wrapper for transparent overlay protection */}
              <div className="relative image-wrapper">
                <img
                  src={member.imageSrc}
                  alt={`Profile of ${member.name}`}
                  className="w-48 h-48 rounded-full object-cover shadow-md mb-6 unstealable-image" // unstealable-image class is here
                />
                <div className="image-overlay"></div> {/* The transparent overlay */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;