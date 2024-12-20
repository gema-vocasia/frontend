import { useEffect } from "react";
import campaignStore from "../../store/campaignStore";
import WithdrawForm from "./WithDraw";

const CardCampaignSaya = () => {
  const { campaignByUserId, getCampaignByUserId } = campaignStore();

  function isDatePassed(dateString) {
    const givenDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return givenDate < today;
  }

  useEffect(() => {
    getCampaignByUserId();
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Unpublished") return "bg-red-500 text-white rounded-lg";
    if (status === "On Going") return "bg-yellow-400 text-black rounded-lg";
    if (status === "Done") return "bg-green-500 text-white rounded-lg";
  };

  const imageUrl = (photo) => `${import.meta.env.VITE_BASE_URL}/files/${photo}`;

  if (campaignByUserId.length === 0) {
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="relative flex-shrink-0 p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-96">
          <div className="absolute top-0 left-0 w-full py-2 text-xl font-bold text-center text-white bg-blue-500 rounded-t-lg">
            Belum Ada Kampanye
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-lg text-center text-gray-500">
              Kebaikan Anda adalah harapan bagi mereka yang membutuhkan. Jadilah
              bagian dari perubahan!
            </p>
            <button
              className="px-6 py-2 font-bold text-white transition-all bg-blue-500 rounded shadow-md hover:bg-blue-600"
              onClick={() => (window.location.href = "/buat-campaign")}
            >
              Mulai Kampanye Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="px-4 pt-7 pb-7 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-10">
        {campaignByUserId.map((item) => (
          <div
            data-aos="fade-right"
            key={item._id}
            className="flex flex-col overflow-hidden transition transform bg-white border rounded-lg shadow-lg hover:scale-105 lg:flex-row"
          >
            {/* Gambar */}
            <div className="relative h-80 lg:w-1/2 lg:h-96">
              <div
                className={`absolute p-2 text-center text-lg font-semibold w-40 ${getStatusStyle(
                  item.statusCampaign
                )}`}
                style={{ zIndex: 10 }}
              >
                {item.statusCampaign}
              </div>
              <div
                className="absolute text-center p-2 w-40 right-0 top-0 rounded text-lg text-gray-600 bg-[#5E84C5]"
                style={{ zIndex: 10 }}
              >
                <span className="font-semibold text-white">
                  {item.categoryId.title}
                </span>
              </div>
              <img
                src={imageUrl(item.photo)}
                alt={item.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            {/* Konten */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-900">
                  {item.title}
                </h2>

                {/* Tanggal Mulai dan Selesai */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center border-2 border-[#5E84C5] rounded-lg">
                    <span className="font-semibold bg-[#5E84C5] text-white w-full py-1">
                      Tanggal Mulai
                    </span>
                    <p className="py-2">
                      {new Date(item.startDate).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center border-2 border-[#5E84C5] rounded-lg">
                    <span className="font-semibold bg-[#5E84C5] text-white w-full py-1">
                      Tanggal Selesai
                    </span>
                    <p className="py-2">
                      {new Date(item.endDate).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>

                {/* Target Donasi dan Dana Masuk */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col items-center text-center border-2 border-[#5E84C5] rounded-lg">
                    <span className="font-semibold bg-[#5E84C5] text-white w-full py-1">
                      Target Donasi
                    </span>
                    <p className="py-2">
                      {`Rp ${item.targetAmount.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center border-2 border-[#5E84C5] rounded-lg">
                    <span className="font-semibold bg-[#5E84C5] text-white w-full py-1">
                      Dana Masuk
                    </span>
                    <p className="py-2">
                      {`Rp ${item.totalDonation.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarik Dana */}
              {(isDatePassed(item.endDate) ||
                item.totalDonation >= item.targetAmount) && (
                <div className="mt-6">
                  <WithdrawForm campaignId={item._id} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardCampaignSaya;
