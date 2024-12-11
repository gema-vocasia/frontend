import React from 'react';
import PropTypes from 'prop-types';

const ImageAbout = ({ src, alt, className }) => {
  const handleError = (event) => {
    event.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available'; // Fallback jika gambar gagal dimuat
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError} // Menangani error gambar
    />
  );
};

ImageAbout.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ImageAbout.defaultProps = {
  className: 'object-cover',
};

export default ImageAbout;
