import { useEffect } from "react";
import campaignStore from "../../store/campaignStore";

const CardCampaignSaya = () => {
  const { campaignByUserId, getCampaignByUserId, updateStatusTransfer } = campaignStore();

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

  const imageUrl = (photo) => `http://localhost:8080/api/v1/files/${photo}`;

  return (
    <main className="pt-7 pb-7 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-10">
        {campaignByUserId.map((item) => (
          <div
            data-aos="fade-right"
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border transition transform hover:scale-105 flex flex-col lg:flex-row"
          >
            {/* Gambar */}
            <div className="relative h-80 lg:w-1/2 lg:h-96">
              <div></div>
              <div
                className={`absolute p-4 text-center text-lg font-semibold w-40 ${getStatusStyle(
                  item.statusCampaign
                )}`}
                style={{ zIndex: 10 }}
              >
                {item.statusCampaign}
              </div>
              <div
                className="absolute text-center p-4 w-40 right-0 top-0 rounded text-lg text-gray-600 bg-[#5E84C5]"
                style={{ zIndex: 10 }}
              >
                <span className="font-semibold text-white">
                  {item.categoryId.title}
                </span>
              </div>
              <img
                src={imageUrl(item.photo)}
                alt={item.title}
                className="absolute inset-0 h-full object-cover lg:object-contain"
              />
            </div>

            {/* Konten */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-full max-w-lg">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {item.title} ini judul yang sangatlah panjang dan bagus dan
                    jika ada kekurangan mohon maaf lahir batin dan selamat natal
                    dan tahun baru 2025
                  </h2>
                </div>
                <p className="">
                  <span className="font-semibold">Tanggal Mulai:</span>{" "}
                  {new Date(item.startDate).toLocaleDateString("id-ID")}
                  <br />
                  <span className="font-semibold">Tanggal Selesai:</span>{" "}
                  {new Date(item.endDate).toLocaleDateString("id-ID")}
                </p>

                <p>
                  <span className="font-semibold">Target Donasi:</span>{" "}
                  {`Rp ${item.targetAmount.toLocaleString("id-ID")}`}
                </p>

                <p>
                  <span className="font-semibold">Dana Masuk:</span>{" "}
                  {`Rp ${item.totalDonation.toLocaleString("id-ID")}`}
                </p>
              </div>
              {/* Tarik Dana */}
              {(isDatePassed(item.endDate) ||
                item.totalDonation >= item.targetAmount) && (
                <div>
                  <button
                    onClick={() => updateStatusTransfer(item._id)}
                    disabled={item.statusTransfer !== null}
                    className={`text-white mt-4 w-full px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${item.statusTransfer !== null ? "bg-green-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white" } `}
                  >
                    {item.statusTransfer === null
                      ? "Tarik Dana"
                      : item.statusTransfer}
                  </button>
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
