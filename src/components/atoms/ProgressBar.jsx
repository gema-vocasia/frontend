import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  const safeProgress = Math.min(progress, 100);

  return (
    <div className="w-full h-3 bg-gray-300 rounded-full">
      <div
        className="bg-[#5E84C5] h-3 rounded-full"
        style={{ width: `${safeProgress}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
