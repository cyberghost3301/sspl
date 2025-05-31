// src/components/Contact.tsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser form submission

    // --- UPDATED: Use your deployed backend URL here ---
    const backendUrl = 'https://sspl-be.onrender.com';

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert your form data to JSON
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network error or server unreachable:', error);
      alert('Could not connect to the server. Please check your internet connection or try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          Ready to transform your ideas into scalable solutions? Contact SSPL today for expert advice and seamless execution.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-16">
          <div className="flex items-center space-x-3 animate-[slideInLeft_1s_ease-out_forwards_0.9s] opacity-0">
            <FaPhone className="text-3xl" />
            <a href="tel:+917651882563" className="text-xl md:text-2xl hover:underline whitespace-nowrap">
              +91 76518 82563
            </a>
          </div>

          <div className="flex items-center space-x-3 animate-[fadeIn_1s_ease-out_forwards_1.2s] opacity-0">
            <FaEnvelope className="text-3xl" />
            <a href="mailto:info@sspl.pcmechanix.in" className="text-xl md:text-2xl hover:underline">info@sspl.pcmechanix.in</a>
          </div>

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

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-inner animate-[scaleIn_1s_ease-out_forwards_1.8s] opacity-0 text-left">
          <h3 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xl font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Regarding your services..."
                className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us more about your needs."
                className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white resize-y"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-indigo-700 font-bold rounded-md shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;