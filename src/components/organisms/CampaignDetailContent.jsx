import PropTypes from 'prop-types';
import CampaignImage from "../molecules/CampaignImage";
import CampaignTitle from "../atoms/CampaignTitle";
import CampaignProgressInfo from "../molecules/CampaignProgressInfo";
import FundraiserInfo from "../atoms/FundraiserInfo";
import CampaignDescription from "../molecules/CampaignDescription";

const CampaignDetailContent = ({
  campaign,
  showFullDescription,
}) => {
  return (
    <div className="w-full p-4">
      <CampaignImage src={campaign.image} alt={campaign.name} />
      <CampaignTitle title={campaign.name} />
      <CampaignProgressInfo
        collected={campaign.collected}
        goal={campaign.goal}
        progress={campaign.progress}
        startDate={campaign.startDate}
        endDate={campaign.endDate}
      />
      <FundraiserInfo fundraiser={campaign.fundraiser} />
      <CampaignDescription
        description={campaign.description}
        showFullDescription={showFullDescription}
      />
    </div>
  );
};

CampaignDetailContent.propTypes = {
  campaign: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    collected: PropTypes.number.isRequired,
    goal: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    fundraiser: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  showFullDescription: PropTypes.bool.isRequired,
};

export default CampaignDetailContent;