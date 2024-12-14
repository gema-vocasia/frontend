import React from 'react';
import PropTypes from 'prop-types';
import ImageAbout from '../atoms/ImageAbout';
import HeadingAbout from '../atoms/HeadingAbout';

const AboutSection = ({ title, description, imageSrc }) => (
  <section className="w-full py-16 bg-white">
    <div className="grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:px-16">
      {/* Bagian Gambar */}
      <div className="relative">
        <HeadingAbout level={2} className="mb-6 text-4xl font-bold text-gray-800">{title}</HeadingAbout>
        <ImageAbout 
          src={imageSrc} 
          alt="About Us" 
          className="object-cover w-full h-auto rounded-lg shadow-lg" 
        />
      </div>

      {/* Bagian Teks */}
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold leading-snug text-blue-900">
          Solusi untuk Membantu Orang Membutuhkan dan Melindungi Planet ini
        </h3>
        {description && description.length > 0 && description.map((text, index) => (
          <p key={index} className="mt-4 text-lg leading-relaxed text-gray-800">
            {text}
          </p>
        ))}
      </div>
    </div>
  </section>
);

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default AboutSection;
