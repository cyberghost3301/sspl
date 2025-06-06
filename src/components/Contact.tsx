// src/components/Contact.tsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing useful icons

const Contact: React.FC = () => {
  // Your confirmed backend URL (NO trailing slash)
  const backendUrl = 'https://ssplbackend.vercel.app'; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // This will now hold the selected option
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { // Added HTMLSelectElement to type
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
        // Clear form after successful submission and reset subject to default
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry', // Reset to a default value for the dropdown
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-[fadeIn_1s_ease-out_forwards_0.3s] opacity-0">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 text-center max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          Ready to transform your ideas into scalable solutions? Contact SSPL today for expert advice and seamless execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div className="flex flex-col space-y-8 md:space-y-12 items-center md:items-start text-center md:text-left">
            <div className="space-y-6 animate-[slideInLeft_1s_ease-out_forwards_0.9s] opacity-0">
                <div className="flex items-center space-x-4">
                    <FaPhone className="text-4xl text-blue-300" />
                    <a href="tel:+917651882563" className="text-2xl hover:underline whitespace-nowrap font-semibold">
                        +91 7651882563
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-4xl text-blue-300" />
                    <a href="mailto:query@spirecrest.in" className="text-2xl hover:underline font-semibold">
                        query@spirecrest.in
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-4xl text-blue-300" />
                    <a
                        href="https://maps.google.com/?cid=10650092316558592999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:underline whitespace-nowrap font-semibold"
                    >
                        Lucknow, Uttar Pradesh, India
                    </a>
                </div>
            </div>

            <div className="w-full h-80 md:h-full md:min-h-[400px] rounded-lg overflow-hidden shadow-xl animate-[scaleIn_1s_ease-out_forwards_1.2s] opacity-0">
              <iframe
                src="https://maps.google.com/?cid=10650092316558592999" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSPL Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl animate-[scaleIn_1s_ease-out_forwards_1.5s] opacity-0 text-left">
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
              {/* Subject Dropdown - REPLACED input with select */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a Subject</option> {/* Default disabled option */}
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Service Request">Service Request</option>
                  <option value="Job Opportunities">Job Opportunity</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                  <option value="Other">Other</option>
                </select>
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
                  className="bg-blue-600 hover:scale-105 hover:shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 transform-gpu"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;