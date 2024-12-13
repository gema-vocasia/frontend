import PropTypes from "prop-types";

const HeroSubtitle = ({ subtitle }) => {
  return (
    <h2
      className="text-2xl mt-4 text-gray-300 drop-shadow-md"
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
