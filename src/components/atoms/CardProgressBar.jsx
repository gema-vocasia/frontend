import PropTypes from 'prop-types';

const CardProgressBar = ({ collected, target }) => {
  return (
    <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${(collected / target) * 100}%` }}
      ></div>
    </div>
  );
};

CardProgressBar.propTypes = {
  collected: PropTypes.number.isRequired, 
  target: PropTypes.number.isRequired,   
};

export default CardProgressBar;