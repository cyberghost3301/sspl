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
    <section id="team" className="py-16 md:py-24 bg-white text-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-[fadeIn_1.5s_ease-out_forwards_0.6s] opacity-0">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* --- MODIFIED: Added image-wrapper and image-overlay --- */}
              <div className="relative image-wrapper">
                <img
                  src={member.imageSrc}
                  alt={`Profile of ${member.name}`}
                  className="w-48 h-48 rounded-full object-cover shadow-md mb-6 unstealable-image" // Keep the unstealable-image class
                />
                <div className="image-overlay"></div> {/* This is the transparent layer */}
              </div>
              {/* --- END MODIFIED --- */}
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