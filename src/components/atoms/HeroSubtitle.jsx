import PropTypes from "prop-types";

const HeroSubtitle = ({ subtitle }) => {
  return (
    <h2
      className="text-5xl lg:text-6xl mt-4 text-white drop-shadow-md"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {subtitle}
    </h2>
  );
};

HeroSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default HeroSubtitle;
