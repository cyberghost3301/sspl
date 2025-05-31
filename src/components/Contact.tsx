// src/components/Contact.tsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing useful icons

const Contact: React.FC = () => {
  // Your confirmed backend URL (NO trailing slash)
  const backendUrl = 'https://ssplbackend.vercel.app'; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setIsError(false);

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setIsError(false);
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to send message. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setMessage('Could not connect to the server. Please check your internet connection or try again later.');
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          Ready to transform your ideas into scalable solutions? Contact Spirecrest today for expert advice and seamless execution.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Phone Number */}
          <div className="flex items-center space-x-3 animate-[slideInLeft_1s_ease-out_forwards_0.9s] opacity-0">
            <FaPhone className="text-3xl" />
            <a href="tel:+917651882563" className="text-xl md:text-2xl hover:underline whitespace-nowrap">
              +91 7651882563
            </a>
          </div>

          {/* Email Address */}
          <div className="flex items-center space-x-3 animate-[fadeIn_1s_ease-out_forwards_1.2s] opacity-0">
            <FaEnvelope className="text-3xl" />
            <a href="mailto:query@spirecrest.in" className="text-xl md:text-2xl hover:underline">
              query@spirecrest.in
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3 animate-[slideInRight_1s_ease-out_forwards_1.5s] opacity-0">
            <FaMapMarkerAlt className="text-3xl" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lucknow, Uttar Pradesh, India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:underline whitespace-nowrap"
            >
              Lucknow, Uttar Pradesh, India
            </a>
          </div>
        </div>

        {/* Your functional Contact Form - NOW WITH SOLID WHITE BACKGROUND */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md animate-[scaleIn_1s_ease-out_forwards_1.8s] opacity-0 text-left">
          <p className="text-xl font-semibold mb-4 text-gray-800">Have a specific query?</p>
          <p className="text-md mb-6 text-gray-700">
            Please use the form below to send us a message.
          </p>
          
          <form onSubmit={handleSubmit}>
            {message && (
              <div className={`mb-4 p-3 rounded text-center ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message}
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                // UPDATED CLASSNAME FOR BUTTON
                className="bg-blue-600 hover:scale-105 hover:shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;