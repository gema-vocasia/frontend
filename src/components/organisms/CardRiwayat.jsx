import { useState, useEffect } from "react";
import { useHistory } from "../../store/history";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RumahBaca from "../../assets/BantuRumahBaca.png";
import { credential } from "../../config/credential/const";

const CardRiwayat = () => {
  const { riwayat, getHistory } = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", credential.MIDTRANS_CLIENT_KEY);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCardClick = (item) => {
    if (item.statusPayment === "Pending") {
      if (item.snapToken) {
        window.snap.pay(item.snapToken, {
          onSuccess: function (result) {
            toast.success("Pembayaran berhasil!", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            console.log("Payment successful");
            console.log(result);
          },
          onPending: function (result) {
            toast.info("Pembayaran masih tertunda", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            console.log("Payment still pending");
            console.log(result);
          },
          onError: function (result) {
            toast.error("Pembayaran gagal!", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            console.log("Payment failed");
            console.log(result);
          },
          onClose: function () {
            toast.warn("Anda menutup pop-up tanpa menyelesaikan pembayaran", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          },
        });
      } else {
        toast.error("Tidak ada token transaksi. Silakan hubungi dukungan.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        await getHistory();
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center my-10">
        <div className="relative flex-shrink-0 w-96 p-6 text-black bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="absolute top-0 left-0 w-full bg-blue-500 text-white text-xl text-center py-2 rounded-t-lg font-bold">
            Belum Berdonasi
          </div>
          <div className="w-full h-80 flex flex-col justify-center items-center">
            <p className="text-gray-500 text-center mb-4 text-lg">
              Sedikit kebaikan dari Anda dapat membawa perubahan besar bagi
              mereka yang membutuhkan.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded shadow-md transition-all"
              onClick={() => (window.location.href = "/all-campaign")}
            >
              Mulai Berdonasi Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  }

  const successDonations = riwayat.filter(
    (item) => item.statusPayment === "Success"
  );
  const pendingDonations = riwayat.filter(
    (item) => item.statusPayment === "Pending"
  );
  const failedDonations = riwayat.filter(
    (item) => item.statusPayment === "Failed"
  );

  const renderCards = (data, statusColor, statusText) => {
    return data.map((item) => (
      <div
        key={item._id}
        className={`relative flex-shrink-0 w-96 p-4 text-black bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl hover:bg-[#f0f4ff] transition-all duration-300 ${
          item.statusPayment === "Pending" ? "cursor-pointer" : ""
        }`}
        style={{ margin: "0 16px 16px 0" }}
        onClick={() => handleCardClick(item)}
      >
        <div className="absolute top-0 left-0 w-full bg-[#5E84C5] text-white text-xl text-center py-2 rounded-t-lg font-bold">
          {item.campaignId?.title || "Donation Campaign"}
        </div>
        <div className="w-full h-1/2 mt-10 mb-5 overflow-hidden rounded-lg">
          <img
            src={item.campaignId?.photo || RumahBaca}
            alt="Donation Campaign"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg text-gray-600">
            <span className="font-medium">Nama:</span>{" "}
            {item.name || "Unknown User"}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium">Tanggal:</span>{" "}
            {new Date(item.donateDate).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium">Jumlah Donasi:</span> Rp{" "}
            {item.amount.toLocaleString()}
          </p>
          <div className="text-center bg-gray-100 border border-gray-300 p-2 rounded">
            <p className="text-lg font-medium text-gray-800 italic">
              {item.comment || "Tidak ada pesan"}
            </p>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full ${statusColor} text-white text-center py-2 rounded-b-lg font-bold`}
        >
          {statusText}
        </div>
      </div>
    ));
  };

  return (
    <main className="pt-10 pb-10 px-4">
      <ToastContainer />{" "}
      <div className="mb-8">
        <div className="flex gap-10 sm:flex-wrap sm:justify-center">
          {pendingDonations.length > 0 ? (
            renderCards(pendingDonations, "bg-yellow-500", "Pending")
          ) : (
            <p className="text-gray-500">Tidak ada donasi pending.</p>
          )}
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <div className="mb-8">
          <div className="flex gap-10 sm:flex-wrap sm:justify-center">
            {successDonations.length > 0 ? (
              renderCards(successDonations, "bg-green-500", "Success")
            ) : (
              <p className="text-gray-500">Tidak ada donasi berhasil.</p>
            )}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex gap-10 sm:flex-wrap sm:justify-center">
            {failedDonations.length > 0 ? (
              renderCards(failedDonations, "bg-red-500", "Failed")
            ) : (
              <p className="text-gray-500">Tidak ada donasi gagal.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardRiwayat;
