import PropTypes from 'prop-types';

const CardInfo = ({ title, fundraiser, type, collected, target }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
        <p className="text-left">{fundraiser}</p>
        <p className="ml-auto text-left">{type}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Terkumpul Rp {collected.toLocaleString()}</span>
        <span className="text-sm font-medium text-gray-700">Target Rp {target.toLocaleString()}</span>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired, 
  fundraiser: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  collected: PropTypes.number.isRequired,     
  target: PropTypes.number.isRequired,  
};

export default CardInfo;