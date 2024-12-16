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
        className="relative flex flex-col w-full sm:w-64 md:w-80 lg:w-96 p-4 text-black bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        onClick={() => handleCardClick(item)}
      >
        {/* Header Card */}
        <div
          className={`w-full ${statusColor} text-white text-center py-2 rounded-t-lg font-bold`}
        >
          {item.campaignId?.title || "Donation Campaign"}
        </div>
        {/* Gambar Kampanye */}
        <div className="w-full h-48 mt-4 mb-4 overflow-hidden rounded-lg">
          <img
            src={`http://localhost:8080/api/v1/files/${item.campaignId.photo}`}
            alt="Donation Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Informasi Donasi */}
        <div className="flex-1 space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Nama:</span>{" "}
            {item.name || "Unknown User"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Tanggal:</span>{" "}
            {new Date(item.donateDate).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Jumlah Donasi:</span> Rp{" "}
            {item.amount.toLocaleString()}
          </p>

          {/* Pesan Donasi */}
          <div className="bg-gray-50 border border-gray-200 p-2 rounded">
            <p className="text-sm text-gray-600 italic">
              {item.comment || "Tidak ada pesan"}
            </p>
          </div>
        </div>

        {/* Footer Status */}
        <div
          className={`w-full ${statusColor} text-white text-center py-2 rounded-b-lg font-bold mt-4`}
        >
          {statusText}
        </div>
      </div>
    ));
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <ToastContainer />

      {/* Section Donasi */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Donasi Pending</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pendingDonations.length > 0 ? (
            renderCards(pendingDonations, "bg-yellow-500", "Pending")
          ) : (
            <p className="text-gray-500 text-center">
              Tidak ada donasi pending.
            </p>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Donasi Berhasil</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {successDonations.length > 0 ? (
            renderCards(successDonations, "bg-green-500", "Success")
          ) : (
            <p className="text-gray-500 text-center">
              Tidak ada donasi berhasil.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Donasi Gagal</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {failedDonations.length > 0 ? (
            renderCards(failedDonations, "bg-red-500", "Failed")
          ) : (
            <p className="text-gray-500 text-center">Tidak ada donasi gagal.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default CardRiwayat;
