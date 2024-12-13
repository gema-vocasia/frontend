import PropTypes from "prop-types";

const CampaignImage = ({ src, alt }) => (
  <div className="flex justify-center items-center w-full h-full">
    <img
      src={src}
      alt={alt}
      className="object-contain w-full h-auto sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
    />
  </div>
);

CampaignImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CampaignImage;
