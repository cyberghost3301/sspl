// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {currentYear} SSPL All Rights Reserved</p>
        {/* Hyperlinked PCMECHANIX LLP */}
        <p className="text-sm mt-1">
          Designed by{' '}
          <a
            href="https://pcmechanix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            PCMECHANIX LLP
          </a>
        </p>
        <p className="text-xs text-gray-500 mt-1">Lucknow, Uttar Pradesh, India</p>
      </div>
    </footer>
  );
};