import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const IconClear = ({ onClick }) => {
  return (
    <XMarkIcon
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#2088CE] hover:text-[#4B6CA0] transition"
    />
  );
};

IconClear.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IconClear;