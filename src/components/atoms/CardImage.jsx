import PropTypes from 'prop-types';

const CardImage = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden bg-gray-200 rounded">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired,
};

export default CardImage;