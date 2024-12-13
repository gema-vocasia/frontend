import PropTypes from "prop-types";
import CampaignImage from "../molecules/CampaignImage";
import CampaignTitle from "../atoms/CampaignTitle";
import CampaignProgressInfo from "../molecules/CampaignProgressInfo";
import FundraiserInfo from "../atoms/FundraiserInfo";
import CampaignDescription from "../molecules/CampaignDescription";

const CampaignDetailContent = ({ campaign, showFullDescription }) => {
  console.log("Campaign user:", campaign.userId);
  return (
    <div className="w-full p-4">
      <CampaignImage src={campaign.photo} alt={campaign.title} />
      <CampaignTitle title={campaign.title} />
      <CampaignProgressInfo campaign={campaign} />
      <FundraiserInfo
        fundraiser={
          typeof campaign.userId === "object"
            ? campaign.userId.name || "Tidak Diketahui"
            : "Tidak Diketahui"
        }
      />
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
    userId: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    targetAmount: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  showFullDescription: PropTypes.bool.isRequired,
};

export default CampaignDetailContent;
