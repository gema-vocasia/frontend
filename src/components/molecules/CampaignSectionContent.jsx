import PropTypes from 'prop-types';
import CampaignTitle from '../atoms/CampaignCardTitle';
import CampaignCard from './CampaignCard';

const CampaignSectionContent = ({ title, cards }) => {
  return (
    <div>
      <CampaignTitle title={title} />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <CampaignCard key={card.id} campaign={card} />
        ))}
      </div>
    </div>
  );
};


CampaignSectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CampaignSectionContent;