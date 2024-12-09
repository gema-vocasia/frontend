import React from 'react';
import Image from '../atoms/Image';

const ImageCard = ({ image, onClick }) => (
  <div
    className="relative overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 hover:bg-indigo-50"
    onClick={onClick}
  >
    <Image src={image.src} alt={image.owner} className="object-cover w-full h-40 rounded-t-2xl" />
    <div className="absolute bottom-0 left-0 right-0 p-2 text-sm text-white bg-black bg-opacity-50">
      <p>
        <span className="font-medium">Pemilik:</span> {image.owner}
      </p>
    </div>
  </div>
);

export default ImageCard;
