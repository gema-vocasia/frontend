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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container grid grid-cols-1 gap-8 py-12 mx-auto sm:grid-cols-2">
      {/* Card Galang Dana */}
      <div
        className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 md:ml-16 m-auto"
        data-aos="fade-right"
      >
        <div className="flex items-start space-x-6">
          <MdCampaign className="w-14 h-14 text-[#5E84C5]" />
          <div>
            <h3 className="text-xl font-bold text-[#5E84C5] mb-4">
              Galang Dana
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              Buat kampanye penggalangan dana, bagikan kisahmu, dan raih
              dukungan untuk wujudkan tujuanmu bersama komunitas.
            </p>
            <button
              onClick={() => navigate(`/buat-campaign`)}
              className="px-5 py-2 text-white bg-[#5E84C5] rounded-full shadow-md hover:bg-[#3C5A99] hover:shadow-lg transition duration-300"
            >
              Galang Dana
            </button>
          </div>
        </div>
      </div>

      {/* Card Mulai Donasi */}
      <div
        className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105  md:mr-16 m-auto"
        data-aos="fade-left"
      >
        <div className="flex items-start space-x-6">
          <FaHandHoldingHeart className="w-14 h-14 text-[#5E84C5]" />
          <div>
            <h3 className="text-xl font-bold text-[#5E84C5] mb-4">
              Mulai Donasi
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              Donasi sekarang untuk mendukung kampanye pilihanmu dan jadilah
              bagian dari perubahan nyata yang membawa harapan.
            </p>
            <button
              onClick={() => navigate(`/all-campaign`)}
              className="px-5 py-2 text-white bg-[#5E84C5] rounded-full shadow-md hover:bg-[#3C5A99] hover:shadow-lg transition duration-300"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaign;
