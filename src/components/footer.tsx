// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} SPIRECREST SOLUTIONS PRIVATE LIMITED. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Lucknow, Uttar Pradesh, India</p>
      </div>
    </footer>
  );
};