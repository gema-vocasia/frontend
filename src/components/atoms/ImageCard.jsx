import PropTypes from "prop-types";

const ImageCard = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-64 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
    />
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageCard;
