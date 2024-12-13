import PropTypes from "prop-types";

const CampaignTitle = ({ title }) => (
  <h1 className="mt-4 mb-6 text-2xl font-bold text-center text-black sm:text-3xl">
    {title}
  </h1>
);

CampaignTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CampaignTitle;
