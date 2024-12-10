import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Komponen CampaignCard
const CampaignCard = ({ campaign }) => {
  return (
    <div
      key={campaign._id}
      className="flex flex-col p-6 mb-8 transition transform bg-white border border-gray-300 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden bg-gray-200 rounded">
        <img
          src={campaign.photo}
          alt={campaign.title}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="mb-4 text-xl font-semibold text-left text-black">
        {campaign.title}
      </h3>
      <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">

        <p className="ml-auto text-left">{campaign.category}</p>
      </div>

      {/* Bagian Terkumpul dan Target */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          Terkumpul Rp {campaign.totalDonation?.toLocaleString() || "0"}
        </span>
        <span className="text-sm font-medium text-gray-700">
          Target Rp {campaign.targetAmount?.toLocaleString() || "0"}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-2">
        <div className="relative w-full h-1 bg-gray-300 rounded">
          <div
            className="absolute top-0 left-0 h-full bg-[#5E84C5] rounded"
            style={{
              width: `${Math.min(
                (campaign.totalDonation / campaign.targetAmount) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-between w-full gap-4 mt-6">
        <button className="flex-1 px-6 py-2 text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] transition duration-300 flex items-center justify-center">
          Donasi
        </button>

        <Link
          to={`/campaign-detail/${campaign._id}`}
          className="flex-1 px-6 py-2 text-[#5E84C5] bg-white border border-[#5E84C5] rounded-full hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

// Validasi properti dengan PropTypes
CampaignCard.propTypes = {
  campaign: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    totalDonation: PropTypes.number.isRequired,
    targetAmount: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default CampaignCard;
