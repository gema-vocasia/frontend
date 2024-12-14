import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ imageSrc, title, subtitle }) => (
  <section className="relative w-screen h-[500px]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>

    {/* Overlay (Gelap Transparan) */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Konten */}
    <div className="relative flex items-center h-full px-8 text-white">
      <div className="max-w-lg text-left">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="text-lg sm:text-2xl">{subtitle}</p>
      </div>
    </div>
  </section>
);

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired, // URL gambar
  title: PropTypes.string.isRequired, // Judul
  subtitle: PropTypes.string.isRequired, // Subjudul
};

export default HeroSection;
