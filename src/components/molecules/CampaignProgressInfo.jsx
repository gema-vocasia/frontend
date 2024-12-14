import PropTypes from "prop-types";
import ProgressBar from "../atoms/ProgressBar";

const CampaignProgressInfo = ({ campaign }) => {
  const progress = (campaign.totalDonation / campaign.targetAmount) * 100;

  // Mengonversi startDate dan endDate menjadi objek Date
  const startDate = new Date(campaign.startDate);
  const endDate = new Date(campaign.endDate);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between p-2 text-sm bg-gray-200 rounded-md">
        <p className="text-black">
          <strong>Terkumpul:</strong> Rp{" "}
          {campaign.totalDonation.toLocaleString()}
        </p>
        <p className="text-black">
          <strong>Dari:</strong> Rp {campaign.targetAmount.toLocaleString()}
        </p>
        <p className="text-black">
          <strong>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </strong>
        </p>
      </div>
      <div className="mt-2">
        <ProgressBar progress={progress} />
        <p className="mt-1 text-xs text-right text-gray-600">
          {progress.toFixed(2)}% tercapai
        </p>
      </div>
    </div>
  );
};

CampaignProgressInfo.propTypes = {
  campaign: PropTypes.shape({
    totalDonation: PropTypes.number.isRequired,
    targetAmount: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default CampaignProgressInfo;
