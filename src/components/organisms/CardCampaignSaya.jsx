import campaignStore from "../../store/campaignStore";
import { useEffect } from "react";

const CardCampaignSaya = () => {

  const { campaignByUserId, getCampaignByUserId } = campaignStore();
  
  useEffect(() => {
    getCampaignByUserId();
  }, []);
  
  console.log(campaignByUserId);
  
  const getStatusStyle = (status) => {
    if (status === "Unpublished") return "bg-red-500 text-white rounded-lg";
    if (status === "On Going")
      return "bg-yellow-400 text-black rounded-lg";
    if (status === "Done")
      return "bg-green-500 text-white rounded-lg";
  };
  
  const imageUrl = (photo) => `http://localhost:8080/api/v1/files/${photo}`;

  
  return (
    <main className="pt-20 pb-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {campaignByUserId.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border transition transform hover:scale-105 flex flex-col lg:flex-row"
          >
            {/* Responsive Gambar */}
            <div className="relative w-full h-80 lg:w-1/2 lg:h-96">
              <img
                src={imageUrl(item.photo)}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover lg:object-contain"
              />
            </div>
            <div className="p-8 space-y-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="text-gray-800 space-y-3 text-lg">
                  <p>
                    <span className="font-semibold">
                      Tanggal Mulai - Tanggal Berakhir:
                    </span>{" "}
                    {new Date(item.startDate).toLocaleDateString("id-ID")} -{" "}
                    {new Date(item.endDate).toLocaleDateString("id-ID")}
                  </p>

                  <p>
                    <span className="font-semibold">Kategori:</span>{" "}
                    <span className="italic">{item.categoryId}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Target Donasi:</span>{" "}
                    {`Rp ${item.targetAmount.toLocaleString("id-ID")}`}
                  </p>
                  {(
                    <p>
                      <span className="font-semibold">Dana Masuk:</span>{" "}
                      {`Rp ${item.totalDonation}`}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`p-4 text-center text-sm font-semibold ${getStatusStyle(
                  item.statusCampaign
                )}`}
              >
                {item.statusCampaign}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default CardCampaignSaya;
