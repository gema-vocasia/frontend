import PropTypes from 'prop-types';
import ProgressBar from '../atoms/ProgressBar';

const CampaignProgressInfo = ({ collected, goal, progress, startDate, endDate }) => (
  <div className="mt-4">
    <div className="flex items-center justify-between p-2 text-sm bg-gray-200 rounded-md">
      <p className="text-black">
        <strong>Terkumpul:</strong> Rp {collected.toLocaleString()}
      </p>
      <p className="text-black">
        <strong>Dari:</strong> Rp {goal.toLocaleString()}
      </p>
      <p className="text-black">
        <strong>{startDate} - {endDate}</strong>
      </p>
    </div>
    <div className="mt-2">
      <ProgressBar progress={progress} />
      <p className="mt-1 text-xs text-right text-gray-600">
        {progress}% tercapai
      </p>
    </div>
  </div>
);

CampaignProgressInfo.propTypes = {
  collected: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default CampaignProgressInfo;