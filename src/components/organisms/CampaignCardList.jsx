import PropTypes from 'prop-types';
import Card from '../organisms/Card';

const CampaignCardList = ({ cards }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

CampaignCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      fundraiser: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      collected: PropTypes.number.isRequired,
      target: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CampaignCardList;
