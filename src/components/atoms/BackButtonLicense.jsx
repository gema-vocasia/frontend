import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid'; 

const BackButtonLicense = ({ onClick, text = "Kembali", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-black hover:text-gray-700 ${className}`} 
    >
      <ChevronLeftIcon className="w-6 h-6 mr-2 text-black" /> 
      {text}
    </button>
  );
};

export default BackButtonLicense;
