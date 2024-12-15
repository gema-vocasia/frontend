import { useState, useEffect } from "react";
import campaignStore from "../../store/campaignStore";

const CardCampaignSaya = () => {
  const { campaignByUserId, getCampaignByUserId, updateAccountNumber } = campaignStore();
  const [accountNumber, setAccountNumber] = useState(campaignByUserId.accountNumber); // State untuk nomor rekening
  console.log(accountNumber)

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

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value); // Update state nomor rekening
  };

  const handleSubmit = (campaignId) => {
    if (!accountNumber || accountNumber.length < 10) {
      alert("Nomor rekening tidak valid. Masukkan minimal 10 digit.");
      return;
    }

    // Kirim permintaan ke backend untuk memperbarui nomor rekening
    updateAccountNumber(campaignId, accountNumber);
  };

  return (
    <main className="pt-20 pb-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {campaignByUserId.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border transition transform hover:scale-105 flex flex-col lg:flex-row"
          >
            {/* Gambar */}
            <div className="relative w-full h-80 lg:w-1/2 lg:h-96">
              <div
                className={`absolute p-2 text-center text-sm font-semibold w-40 ${getStatusStyle(
                  item.statusCampaign
                )}`}
                style={{ zIndex: 10 }}
              >
                {item.statusCampaign}
              </div>
              <img
                src={imageUrl(item.photo)}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover lg:object-contain"
              />
            </div>

            {/* Konten */}
            <div className="p-4 space-y-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <div className="text-gray-800 space-y-3 text-lg">
                  <p>
                    <span className="font-semibold">Kategori:</span>{" "}
                    <span className="italic">{item.categoryId.title}</span>
                  </p>

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
                    {`Rp ${item.totalDonation}`}
                  </p>
                </div>

                {/* Input Nomor Rekening */}
                {(isDatePassed(item.endDate) ||
                  item.totalDonation >= item.targetAmount) && (
                  <div>
                    <label
                      htmlFor={`accountNumber-${item._id}`}
                      className="block font-semibold text-gray-700 mb-2"
                    >
                      Isi Nomor Rekening Anda
                    </label>
                    <input
                      type="text"
                      id={`accountNumber-${item._id}`}
                      placeholder="Masukkan nomor rekening"
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                      className="w-full p-2 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <button
                      onClick={() => handleSubmit(item._id)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      Simpan Nomor Rekening
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardCampaignSaya;
