import PropTypes from "prop-types";

const HeroTitle = ({ title }) => {
  return (
    <h1
      className="text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {title}
    </h1>
  );
};

HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroTitle;