import PropTypes from 'prop-types';

const CampaignDescription = ({ description }) => (
  <div className="w-full p-4 mt-4 bg-white border border-gray-300 rounded-lg shadow-lg">
    <h4 className="text-lg font-semibold text-[#5E84C5]">Apa yang Kami Tuju?</h4>
    <p className={`mt-2 text-gray-700`}>
      {description}
    </p>
    
  </div>
);

CampaignDescription.propTypes = {
  description: PropTypes.string.isRequired,
  showFullDescription: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default CampaignDescription;