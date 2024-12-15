import React from 'react';

const Lightbox = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
      data-aos="zoom-in"
    >
      <div
        className="relative p-4 bg-white rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di area sekitar gambar
      >
        <img src={image.src} alt="Selected" className="max-w-3xl rounded-md max-h-3xl" />
        <p className="absolute px-2 py-1 text-sm text-white bg-black rounded bottom-4 left-4 bg-opacity-60">
          Pemilik: {image.owner}
        </p>
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center w-8 h-8 text-lg text-white bg-black rounded-full top-2 right-2 bg-opacity-70"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;