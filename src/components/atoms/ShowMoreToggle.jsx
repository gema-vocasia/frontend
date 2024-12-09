import PropTypes from 'prop-types';

const ShowMoreToggle = ({ showFullDescription, toggleShow }) => (
  <span
    onClick={toggleShow}
    className="mt-2 block text-[#5E84C5] font-bold cursor-pointer hover:underline"
  >
    {showFullDescription ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
  </span>
);

ShowMoreToggle.propTypes = {
  showFullDescription: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default ShowMoreToggle;