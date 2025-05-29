// src/components/Contact.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing useful icons

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          Ready to transform your ideas into scalable solutions? Contact SSPL today for expert advice and seamless execution.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Phone Number */}
          <div className="flex items-center space-x-3 animate-[slideInLeft_1s_ease-out_forwards_0.9s] opacity-0">
            <FaPhone className="text-3xl" />
            <a href="tel:+917651882563" className="text-xl md:text-2xl hover:underline whitespace-nowrap">
              +91 76518 82563
            </a>
          </div>

          {/* Email Address */}
          <div className="flex items-center space-x-3 animate-[fadeIn_1s_ease-out_forwards_1.2s] opacity-0">
            <FaEnvelope className="text-3xl" />
            <a href="mailto:info@sspl.pcmechanix.in" className="text-xl md:text-2xl hover:underline">info@sspl.pcmechanix.in</a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3 animate-[slideInRight_1s_ease-out_forwards_1.5s] opacity-0">
            <FaMapMarkerAlt className="text-3xl" />
            <a
              href="https://www.google.com/maps/search/Lucknow,+Uttar+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:underline whitespace-nowrap"
            >
              Lucknow, Uttar Pradesh, India
            </a>
          </div>
        </div>

        {/* Optional: Placeholder for a Contact Form or Google Map */}
        <div className="mt-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-inner animate-[scaleIn_1s_ease-out_forwards_1.8s] opacity-0">
          <p className="text-xl font-semibold mb-4">Have a specific query?</p>
          <p className="text-md mb-6">
            While we're setting up a full contact form, feel free to reach out directly via phone or email, or visit us.
          </p>
          {/* You can embed a Google Map here later, or a simple form */}
          {/* <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
            [Placeholder for Google Map or Contact Form]
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;