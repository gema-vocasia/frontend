import {Link, useNavigate} from "react-router-dom"; 
import PropTypes from "prop-types";

const CampaignCard = ({campaign}) => {
  console.log(campaign.photo);
  const navigate = useNavigate();
  const imageUrl = `http://localhost:8080/api/v1/files/${campaign.photo}`;

  return (
    <div
      data-aos="fade-right"
      key={campaign._id}
      className="relative flex flex-col mb-8 transition-transform transform bg-white border border-gray-300 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl group font-display"
    >
      <div className="relative flex items-center justify-center w-full overflow-hidden bg-gray-200 rounded h-60">
        <img
          src={imageUrl}
          alt={campaign.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />

        <div
          className={
            "absolute top-0 right-0 text-sm p-1 px-2 bg-[#5E84C5] mt-3 mr-3 rounded-full text-white"
          }
        >
          {campaign.categoryId.title}
        </div>

        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"
        ></div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded">
          <div
            className="absolute top-0 h-full bg-[#5E84C5] rounded"
            style={{
              width: `${Math.min(
                (campaign.totalDonation / campaign.targetAmount) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 mt-auto -m-6 ">
        {/* Judul dan Informasi */}
        <div className="flex flex-col items-start justify-between mx-5 mb-4">
          <h3 className="text-xl font-semibold text-left text-black transition-colors duration-300 group-hover:text-[#5E84C5]">
            {campaign.title.length > 27
              ? `${campaign.title.substring(0, 27)}...`
              : campaign.title}
          </h3>
        </div>

        {/* Detail Terkumpul, Target, dan Progress */}
        <div className="flex flex-col justify-between mx-5 mb-3 text-lg font-medium text-gray-700">
          
          {/* Target */}
          <div className="flex items-center">
            <span>Target</span>
            <div className="flex-1 mx-2 border-t border-gray-300 border-dashed"></div>
            <span style={{ color: '#5E84C5' }}>
              Rp {campaign.targetAmount?.toLocaleString() || "0"}
            </span>
          </div>

          {/* Terkumpul */}
          <div className="flex items-center">
            <span>Terkumpul</span>
            <div className="flex-1 mx-2 border-t border-gray-300 border-dashed"></div>
            <span style={{ color: '#5E84C5' }}>
              Rp {campaign.totalDonation?.toLocaleString() || "0"}
            </span>
          </div>

          {/* Progress */}
          <div className="flex items-center">
            <span>Progress</span>
            <div className="flex-1 mx-2 border-t border-gray-300 border-dashed"></div>
            <span style={{ color: '#5E84C5' }}>
              {Math.min(
                (campaign.totalDonation / campaign.targetAmount) * 100,
                100
              ).toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex w-full mt-auto divide-x">
          <button
            onClick={() => navigate(`/donasi/${campaign._id}`)}
            className="flex-1 py-5 text-md  box-border  border  hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center rounded-bl-lg"
          >
            Donasi Sekarang
          </button>

          <Link
            to={`/campaign/${campaign._id}`}
            className="flex-1 py-5 text-md  box-border  border  hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center rounded-bl-lg text-center"
          >
            Detail Kampanye
          </Link>
        </div>

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
