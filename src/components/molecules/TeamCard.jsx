import React from 'react';
import PropTypes from 'prop-types';
import ImageAbout from '../atoms/ImageAbout';

const TeamCard = ({ name, position, imageSrc }) => (
  <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 transform bg-white shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105 hover:rotate-1">
    <div className="w-[130px] h-[130px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
      <ImageAbout
        src={imageSrc}
        alt={`Foto anggota tim: ${name}`}
        className="object-cover w-full h-full border-4 border-white rounded-full shadow-md"
      />
    </div>
    <h3 className="mt-5 text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">{name}</h3>
    {position && (
      <p className="mt-2 text-sm italic text-gray-500">{position}</p>
    )}
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string, // Posisi opsional
  imageSrc: PropTypes.string.isRequired,
};

export default TeamCard;
