import PropTypes from 'prop-types';
import CardInfo from '../atoms/CardInfo';
import CardProgressBar from '../atoms/CardProgressBar';
import CardButton from '../atoms/CardButton';

const CardContent = ({ card }) => {
  return (
    <>
      <CardInfo
        title={card.title}
        fundraiser={card.fundraiser}
        type={card.type}
        collected={card.collected}
        target={card.target}
      />
      <CardProgressBar collected={card.collected} target={card.target} />
      <CardButton cardId={card.id} />
    </>
  );
};

CardContent.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    fundraiser: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,   
    collected: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,  
    id: PropTypes.string.isRequired,  
  }).isRequired,
};

export default CardContent;