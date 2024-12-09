import PropTypes from 'prop-types';

const HeroTitle = ({ title }) => {
  return <h1 className="text-4xl font-bold text-[#2088CE]">{title}</h1>;
};

HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroTitle;