import PropTypes from "prop-types";
import CampaignImage from "../molecules/CampaignImage";
import CampaignTitle from "../atoms/CampaignTitle";
import CampaignProgressInfo from "../molecules/CampaignProgressInfo";
import FundraiserInfo from "../atoms/FundraiserInfo";
import CampaignDescription from "../molecules/CampaignDescription";

const CampaignDetailContent = ({ campaign, showFullDescription }) => {
  const imageUrl = `http://localhost:8080/api/v1/files/${campaign.photo}`;
  return (
    <div className="w-full p-4">
      <CampaignImage src={imageUrl} alt={campaign.title} />
      <CampaignTitle title={campaign.title} />
      <CampaignProgressInfo campaign={campaign} />
      <FundraiserInfo fundraiser={campaign.userId} />
      <CampaignDescription
        description={campaign.description}
        showFullDescription={showFullDescription}
      />
    </div>
  );
};

CampaignDetailContent.propTypes = {
  campaign: PropTypes.shape({
    photo: PropTypes.string,
    title: PropTypes.string.isRequired,
    totalDonation: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    targetAmount: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  showFullDescription: PropTypes.bool.isRequired,
};

export default CampaignDetailContent;