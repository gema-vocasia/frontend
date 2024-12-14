import PropTypes from "prop-types";

const FundraiserInfo = ({ fundraiser }) => (
  <div className="w-full mt-4 bg-[#f0f4f8] border border-[#5E84C5] p-4 rounded-lg shadow-lg">
    <h3 className="text-lg font-bold text-[#5E84C5]">Penggalang Dana</h3>
    <p className="text-gray-700">{fundraiser}</p>
  </div>
);

FundraiserInfo.propTypes = {
  fundraiser: PropTypes.string.isRequired,
};
export default FundraiserInfo;
