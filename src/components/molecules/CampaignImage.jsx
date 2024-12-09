import PropTypes from 'prop-types';

const CampaignImage = ({ src, alt }) => (
  <div className="flex justify-center w-full mt-4">
    <img
      src={src}
      alt={alt}
      className="object-cover w-3/4 h-48 sm:w-2/3 sm:h-40 md:w-1/2 md:h-44 lg:w-1/3 lg:h-48"
    />
  </div>
);

CampaignImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CampaignImage;