import PropTypes from "prop-types";

const HeroTitle = ({ title }) => {
  return (
    <h1
      className="text-5xl font-extrabold text-[#2088CE] drop-shadow-lg"
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
