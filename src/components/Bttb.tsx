// src/components/Bttb.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow icon

const Bttb: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Button appears after scrolling 300px down
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* Position the button at bottom-right */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          // p-3 for mobile, md:p-4 for desktop (for button padding)
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transform hover:scale-110"
          aria-label="Scroll to top" // Good for accessibility
        >
          {/* text-2xl for mobile, md:text-3xl for desktop (for icon size) */}
          <FaArrowUp className="text-2xl md:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Bttb;