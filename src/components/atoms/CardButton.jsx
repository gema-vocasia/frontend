import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardButton = ({ cardId }) => {
  return (
    <div className="flex gap-2 mt-4">
      <button className="w-40 px-5 py-2 text-sm font-semibold text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] border border-[#5E84C5] transition duration-300">
        Donasi
      </button>
      <Link to={`/campaign-detail/${cardId}`}>
        <button className="w-40 px-5 py-2 text-sm font-semibold text-[#5E84C5] bg-white rounded-full hover:bg-[#E6ECF5] border border-[#5E84C5] transition duration-300">
          Detail
        </button>
      </Link>
    </div>
  );
};

CardButton.propTypes = {
  cardId: PropTypes.string.isRequired, 
};

export default CardButton;