// src/components/Fcb.tsx
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Fcb: React.FC = () => {
  const phoneNumber = '+919250974145'; // Your actual phone number
  const whatsappNumber = '919250974145'; // Your WhatsApp number (without the +)

  return (
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col space-y-4 z-50">
      {/* WhatsApp Button: Hidden on mobile, displayed on desktop */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        // 'hidden' by default (mobile), 'flex' on medium screens and up (desktop)
        className="hidden md:flex bg-green-500 text-white p-4 text-3xl rounded-full shadow-lg hover:scale-110 transition-transform duration-300 items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp />
      </a>

      {/* Call Button: Displayed on mobile, hidden on desktop */}
      <a
        href={`tel:${phoneNumber}`}
        // 'flex' by default (mobile), 'hidden' on medium screens and up (desktop)
        // Smaller size on mobile (p-3, text-2xl)
        className="flex md:hidden bg-blue-600 text-white p-3 text-2xl rounded-full shadow-lg hover:scale-110 transition-transform duration-300 items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default Fcb;