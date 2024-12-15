import PropTypes from "prop-types";

const CampaignTitle = ({ title }) => {
  return <h2 className="mb-6 text-4xl font-bold text-gray-800">{title}</h2>;
};

CampaignTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CampaignTitle;
