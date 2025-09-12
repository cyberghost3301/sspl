// src/components/Team.tsx
import React from 'react';

// Import your profile images directly from src/assets
import aumProfile from '../assets/placeholder.jpg';
import desheshProfile from '../assets/ppdeshesh.jpg';
import saurabhProfile from '../assets/placeholder.jpg';
import laraibProfile from '../assets/pplaraib.jpg';
import anshumanProfile from '../assets/ppanshuman.jpg'
import rahulProfile from '../assets/pprahul.jpg'
import aakashProfile from '../assets/ppaakash.jpg';
import shashankProfile from '../assets/ppshashank.jpg';
import ishaProfile from '../assets/placeholder.jpg'
import shristiProfile from '../assets/placeholder.jpg';
import asthaProfile from '../assets/ppastha.jpg'
import sanchitaProfile from '../assets/ppsanchita.jpg'
import nabeelaProfile from '../assets/ppnabeela.jpg'
import prachiProfile from '../assets/placeholder.jpg'
import janviProfile from '../assets/ppjanvi.jpg';
import rushnaProfile from '../assets/pprushna.jpg'
import srishtiProfile from '../assets/ppsrishti.jpg'
import anushkaProfile from '../assets/ppanushka.jpg'
import ektaProfile from '../assets/ppekta.jpg'



interface TeamMember {
  name: string;
  title: string;
  imageSrc: string; // This will now hold the imported image URL
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aum',
    title: 'Founder',
    imageSrc: aumProfile, // Use the imported image variable
  },
  {
    name: 'Deshesh',
    title: 'Director ',
    imageSrc: desheshProfile, // Use the imported image variable
  },
  {
    name: 'Er. Saurabh',
    title: 'Strategic Advisor',
    imageSrc: saurabhProfile, // Use the imported image variable
  },
  {
    name: 'Ar. Laraib',
    title: 'Consulting Architect',
    imageSrc: laraibProfile, // Use the imported image variable
  },
  {
    name: 'Er. Anshuman',
    title: 'Innovation Catalyst',
    imageSrc: anshumanProfile, // Use the imported image variable
  },
  {
    name: 'Prof. Rahul',
    title: 'Business Adviser',
    imageSrc: rahulProfile, // Use the imported image variable
  },
  {
    name: 'Er. Aakash',
    title: 'External Consultant',
    imageSrc: aakashProfile, // Use the imported image variable
  },
  {
    name: 'Er. Shashank',
    title: 'Project Collaborator',
    imageSrc: shashankProfile, // Use the imported image variable
  },
  {
    name: 'Prachi',
    title: 'HRM',
    imageSrc: prachiProfile, // Use the imported image variable
  },
  {
    name: 'Shristi',
    title: 'Growth Facilitator',
    imageSrc: shristiProfile, // Use the imported image variable
  },
  {
    name: 'Astha',
    title: 'Business Dev. Rep.',
    imageSrc: asthaProfile, // Use the imported image variable
  },
  {
    name: 'Sanchita',
    title: 'Development Coordinator',
    imageSrc: sanchitaProfile, // Use the imported image variable
  },
  {
    name: 'Janvi',
    title: 'Business Operations',
    imageSrc: janviProfile, // Use the imported image variable
  },
  {
    name: 'Rushna',
    title: 'CRC',
    imageSrc: rushnaProfile, // Use the imported image variable
  },
  {
    name: 'Isha',
    title: 'Market Advisor',
    imageSrc: ishaProfile, // Use the imported image variable
  },
  {
    name: 'Er. Nabeela',
    title: 'CPRO',
    imageSrc: nabeelaProfile, // Use the imported image variable
  },
  {
    name: 'Srishti',
    title: 'CRGO',
    imageSrc: srishtiProfile, // Use the imported image variable
  },
  {
    name: 'Anushka',
    title: 'Project Co-ord.',
    imageSrc: anushkaProfile, // Use the imported image variable
  },
  {
    name: 'Ekta',
    title: 'Customer Support',
    imageSrc: ektaProfile, // Use the imported image variable
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

        {/* MODIFIED GRID LAYOUT FOR MORE COLUMNS ON LARGER SCREENS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-[fadeIn_1.5s_ease-out_forwards_0.6s] opacity-0">
          {teamMembers.map((member, index) => (
            // ADDED CARD STYLING AND HOVER EFFECTS TO THIS DIV
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center
                         transform-gpu transition-all duration-300
                         hover:scale-105 hover:shadow-xl cursor-pointer" // Hover effects added here
            >
              {/* Added image-wrapper for transparent overlay protection */}
              <div className="relative image-wrapper">
                <img
                  src={member.imageSrc}
                  alt={`Profile of ${member.name}`}
                  className="w-40 h-40 rounded-full object-cover shadow-md mb-6 unstealable-image" // Image size reduced here
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