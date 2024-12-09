import PropTypes from 'prop-types';

const HeroImage = ({ image }) => {
  return <img src={image} alt="hero" className="object-cover w-screen h-full" />;
};

HeroImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeroImage;