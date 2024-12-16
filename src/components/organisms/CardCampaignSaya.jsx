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
                    {item.title}
                  </h2>
                </div>

                 {/* Tanggal Mulai dan Tanggal Selesai Targert Donasi dan Dana Terkumpul */}
                <div className="flex flex-row  justify-between">
                  <div className="flex flex-col w-48 h-auto text-center border-2 border-[#5E84C5]">
                    <span className="font-semibold p-1 bg-[#5E84C5] text-white  -mt-[1px]">
                      Tanggal Mulai
                    </span>
                    <p className="p-0 m-auto">
                      {new Date(item.startDate).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div className="flex flex-col w-48 h-auto text-center border-2 border-[#5E84C5]">
                    <span className="font-semibold p-1 bg-[#5E84C5] text-white  -mt-[1px]">
                      Tanggal Selesai
                    </span>
                    <p className="p-0 m-auto">
                      {new Date(item.endDate).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row mt-5 justify-between">
                  <div className="flex flex-col w-48 h-auto text-center border-2 border-[#5E84C5]">
                    <span className="font-semibold p-1 bg-[#5E84C5] text-white  -mt-[1px]">
                      Target Donasi
                    </span>
                    <p className="p-0 m-auto">
                      {`Rp ${item.targetAmount.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                  <div className="flex flex-col w-48 h-auto text-center border-2 border-[#5E84C5]">
                    <span className="font-semibold p-1 bg-[#5E84C5] text-white  -mt-[1px]">
                      Dana Masuk
                    </span>
                    <p className="p-0 m-auto">
                      {`Rp ${item.totalDonation.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                </div>

              </div>
              {/* Tarik Dana */}
              {(isDatePassed(item.endDate) ||
                item.totalDonation >= item.targetAmount) && (
                <div>
                  <button
                    onClick={() => updateStatusTransfer(item._id)}
                    disabled={item.statusTransfer !== null}
                    className={`text-white mt-4 w-full px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                      item.statusTransfer !== null
                        ? "bg-green-600 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    } `}
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
