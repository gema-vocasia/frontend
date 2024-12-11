import PropTypes from 'prop-types';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const BackButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center p-2 text-black bg-gray-400 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-300 focus:outline-none"
      onClick={onClick}
    >
      <ArrowLeftIcon className="w-6 h-6" />
    </button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;