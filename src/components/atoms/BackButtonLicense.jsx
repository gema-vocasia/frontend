import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid'; // Importing left arrow icon

const BackButtonLicense = ({ onClick, text = "Back", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-black hover:text-gray-700 ${className}`} // Change to black text, hover to gray
    >
      <ChevronLeftIcon className="w-6 h-6 mr-2 text-black" /> {/* Set the icon color to black */}
      {text}
    </button>
  );
};

export default BackButtonLicense;
