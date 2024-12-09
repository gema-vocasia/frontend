import PropTypes from 'prop-types';
import CampaignTitle from '../atoms/CampaignCardTitle';
import CampaignCardList from '../atoms/CampaignCardList';
const CampaignSectionContent = ({ title, cards }) => {
  return (
    <div>
      <CampaignTitle title={title} />
      <CampaignCardList cards={cards} />
    </div>
  );
};

CampaignSectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      fundraiser: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      collected: PropTypes.number.isRequired,
      target: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CampaignSectionContent;