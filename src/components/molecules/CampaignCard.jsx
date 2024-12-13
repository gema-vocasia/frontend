import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignCard = ({ campaign }) => {
  console.log(campaign);
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-right"
      key={campaign._id}
      className="relative flex flex-col p-6 mb-8 transition-transform transform bg-white border border-gray-300 rounded-lg 
      shadow-xl hover:scale-105 hover:shadow-2xl group"
    >
      <div className="relative flex items-center justify-center w-full h-60 mb-6 overflow-hidden bg-gray-200 rounded">
        <img
          src={campaign.photo}
          alt={campaign.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"></div>
      </div>

      <div className="flex flex-row justify-between items-center mb-4">
        {" "}
        <h3 className="text-xl font-semibold text-left text-black transition-colors duration-300 group-hover:text-[#5E84C5]">
          {campaign.title}
        </h3>
        <p className="text-sm font-semibold text-right text-[#5E84C5]">
          {campaign.categoryId.title}
        </p>
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
        <button
          onClick={() => navigate(`/donasi/${campaign._id}`)}
          className="flex-1 px-6 py-2 text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] transition duration-300 flex items-center justify-center"
        >
          Donasi
        </button>

        <Link
          to={`/campaign/${campaign._id}`}
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
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.object.isRequired,
    totalDonation: PropTypes.number.isRequired,
    targetAmount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CampaignCard;
