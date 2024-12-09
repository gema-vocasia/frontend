import PropTypes from 'prop-types';

const HeroSubtitle = ({ subtitle }) => {
  return <h1 className="text-2xl">{subtitle}</h1>;
};

HeroSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default HeroSubtitle;