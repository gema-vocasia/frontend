import PropTypes from 'prop-types';

const TextCard = ({ title, description, bgColor, textColor }) => {
  return (
    <div className={`flex flex-col justify-center p-6 ${bgColor}`}>
      <h3 className={`text-xl font-semibold text-center ${textColor}`}>{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};


TextCard.propTypes = {
  title: PropTypes.string.isRequired,     
  description: PropTypes.string.isRequired, 
  bgColor: PropTypes.string,  
  textColor: PropTypes.string,
};

export default TextCard;