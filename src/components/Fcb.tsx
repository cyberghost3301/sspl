// src/components/Fcb.tsx
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Fcb: React.FC = () => { // Renamed component to Fcb
  const phoneNumber = '+917651882563'; // Your actual phone number
  const whatsappNumber = '917651882563'; // Your WhatsApp number (without the +)

  return (
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col space-y-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-3xl" />
      </a>
    </div>
  );
};

export default Fcb; // Export Fcb