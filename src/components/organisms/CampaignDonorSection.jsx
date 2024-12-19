import PropTypes from "prop-types";
import DonorList from "../molecules/DonorList";

const CampaignDonorSection = ({ donors, showDonors, toggleShowDonors }) => {
  return (
    <div className="w-full p-4">
      <DonorList
        donors={donors}
        showDonors={showDonors}
        toggleShow={toggleShowDonors}
      />
    </div>
  );
};

CampaignDonorSection.propTypes = {
  donors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      message: PropTypes.string,
    })
  ).isRequired,
  showDonors: PropTypes.bool.isRequired,
  toggleShowDonors: PropTypes.func.isRequired,
};

export default CampaignDonorSection;
