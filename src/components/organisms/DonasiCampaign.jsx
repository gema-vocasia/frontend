import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationCampaign = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        className="bg-white rounded-lg shadow-md p-6 ml-16"
        data-aos="fade-right"
      >
        <div className="flex items-center">
          <FaHandHoldingHeart className="w-20 h-20 -500 mr-4 text-[#05265F]" />
          <div>
            <h3 className="text-xl font-medium mb-2">
              Sumbangkan sedikit rejeki kalian untuk mereka yang membutuhkan
            </h3>
            <button
              onClick={() => navigate(`/all-campaign`)}
              className="flex-1 px-6 py-2 text-[#5E84C5] bg-white border border-[#5E84C5] rounded-full hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-white rounded-lg shadow-md p-6 mr-16"
        data-aos="fade-left"
      >
        <div className="flex items-center">
          <MdCampaign className="w-20 h-20 -500 mr-4  text-[#05265F]" />
          <div>
            <h3 className="text-xl font-medium mb-2">
              GEMA galang dana untuk membantu orang yang membutuhkan di luar
              sana
            </h3>
            <button
              onClick={() => navigate(`/buat-campaign`)}
              className="flex-1 px-6 py-2 text-[#5E84C5] bg-white border border-[#5E84C5] rounded-full hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center"
            >
              Galang Dana
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaign;
