import PropTypes from 'prop-types';
import ShowMoreToggle from '../atoms/showMoreToggle';

const CampaignDescription = ({ description, showFullDescription, toggleShow }) => (
  <div className="w-full p-4 mt-4 bg-white border border-gray-300 rounded-lg">
    <h4 className="text-lg font-semibold text-[#5E84C5]">Apa yang Kami Tuju?</h4>
    <p className={`mt-2 text-gray-700 ${showFullDescription ? "" : "line-clamp-3"}`}>
      {description}
    </p>
    <ShowMoreToggle
      showFullDescription={showFullDescription}
      toggleShow={toggleShow}
    />
  </div>
);

CampaignDescription.propTypes = {
  description: PropTypes.string.isRequired,
  showFullDescription: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default CampaignDescription;