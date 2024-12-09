import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CardContent = ({ card }) => {
  const { title, fundraiser, collected, target, type } = card;
  const progress = Math.min((collected / target) * 100, 100).toFixed(2);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{fundraiser}</p>
      <p className="text-sm text-gray-600">{type}</p>
      <div className="mt-4">
        <div className="h-2 mb-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Terkumpul: Rp {collected.toLocaleString()} / Rp {target.toLocaleString()}
        </p>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          className="w-40 px-6 py-2 rounded-lg bg-[#5E84C5] text-white hover:bg-[#476BA6] transform hover:scale-105 transition duration-300"
          onClick={() => navigate(`/all-kampanye/${card.id}`)}
        >
          Donasi
        </button>
        <button
          className="w-40 px-6 py-2 rounded-lg bg-[#5E84C5] text-white hover:bg-[#476BA6] transform hover:scale-105 transition duration-300"
          onClick={() => navigate(`/campaign-detail/${card.id}`)}
        >
          Detail
        </button>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fundraiser: PropTypes.string.isRequired,
    collected: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardContent;
