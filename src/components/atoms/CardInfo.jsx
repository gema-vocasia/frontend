import PropTypes from 'prop-types';

const CardInfo = ({ title, fundraiser, category, totalDonation, targetAmount }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
        <p className="text-left">{fundraiser}</p>
        <p className="ml-auto text-left">{category}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Terkumpul Rp {totalDonation.toLocaleString()}</span>
        <span className="text-sm font-medium text-gray-700">Target Rp {targetAmount.toLocaleString()}</span>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired, 
  fundraiser: PropTypes.string.isRequired, 
  category: PropTypes.string.isRequired, 
  totalDonation: PropTypes.number.isRequired,     
  targetAmount: PropTypes.number.isRequired,  
};

export default CardInfo;