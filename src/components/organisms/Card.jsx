import PropTypes from 'prop-types';
import CardImage from '../atoms/CardImage';
import CardContent from '../molecules/CardContent';

const Card = ({ card }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <CardImage src={card.image} alt={card.title} />
      <CardContent card={card} />
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    collected: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,
    fundraiser: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
