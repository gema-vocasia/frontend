import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { donation } from "../../config/donation";
import { useNavigate } from "react-router-dom";
import FormField from "../molecules/FormField";
import CheckboxField from "../molecules/CheckboxField";
import Button from "../atoms/Button";
import { credential } from "../../config/credential/const";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormDonasi = () => {
  const { campaignId } = useParams();
  // console.log("id : ", campaignId);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    comment: "",
  });

  const navigate = useNavigate();
  const { create } = donation();

  //useEffect midtrans
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

  //useEffect campaign
  useEffect(() => {
    let didCancel = false;
    const fetchCampaignDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/v1/campaign/${campaignId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        if (!didCancel) {
          setCampaignDetails({
            title: response.data.data.title,
            photo: response.data.data.photo,
            userId: response.data.data.userId,
            targetAmount: response.data.data.targetAmount,
          });
          setLoading(false);
        }
      } catch (error) {
        if (!didCancel) {
          toast.error("Gagal memuat detail kampanye", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          navigate("/");
          setError(error);
          console.error("Error fetching kampanye detail:", error);
          setLoading(false);
        }
      }
    };

    if (campaignId) {
      fetchCampaignDetails();
    }

    return () => {
      didCancel = true;
    };
  }, [campaignId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsAnonymous((prev) => !prev);
    setFormData((prev) => ({
      ...prev,
      name: !isAnonymous ? "Anonymous" : "",
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePayment = (accessToken) => {
    const transactionToken = accessToken;

    window.snap.pay(transactionToken, {
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
        navigate("/");
        console.log(result);
      },
      onPending: function (result) {
        // Ganti alert dengan toast.info
        toast.info("Menunggu pembayaran!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(result);
      },
      onError: function (result) {
        // Ganti alert dengan toast.error
        toast.error("Pembayaran gagal!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(result);
      },
      onClose: function () {
        // Ganti alert dengan toast.warning
        toast.warning("Anda menutup popup sebelum menyelesaikan pembayaran.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const donasi = await create(campaignId, formData);

      if (!donasi || !donasi.snapToken) {
        throw new Error("snapToken tidak ditemukan");
      }

      handlePayment(donasi.snapToken);
      navigate("/");
    } catch (error) {
      console.error("Error submitting donation:", error.message);
      // Ganti alert dengan toast.error
      toast.error("Gagal mengirim donasi. Silakan coba lagi.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      // Tampilkan notifikasi toast
      toast.error("Anda belum login, silakan masuk untuk berdonasi.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 3100);
      return;
    }

    // Validasi langkah dan lanjutkan jika valid
    if (currentStep === 1 && !isStep1Valid) return;
    if (currentStep === 2 && !isStep2Valid) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const isStep1Valid = isAnonymous || formData.name.trim() !== "";
  const isStep2Valid = formData.amount.trim() !== "";

  if (loading) {
    return <div>Memuat detail kampanye...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <ToastContainer />
      <div
        className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {campaignDetails && (
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 mb-10">
            {campaignDetails.photo && (
              <img
                src={campaignDetails.photo}
                alt={campaignDetails.title}
                className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-4 md:mb-0"
              />
            )}
            <div className="flex flex-col items-start w-full md:w-2/3 md:pl-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                {campaignDetails.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-500 font-medium mb-4">
                Oleh: {campaignDetails.userId?.name || "Tidak diketahui"}
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-2">
                <strong>Target Donasi:</strong>{" "}
                <span className="font-semibold text-green-600">
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    campaignDetails.targetAmount
                  )}
                </span>
              </p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <>
              <FormField
                label="Nama"
                type="text"
                name="name"
                value={formData.name}
                required
                placeholder="Masukkan Nama Lengkap"
                onChange={handleChange}
                disabled={isAnonymous}
              />
              <CheckboxField
                id="anonymous"
                checked={isAnonymous}
                onChange={handleCheckboxChange}
                label="Sembunyikan nama saya (Anonymous)"
              />
              <div className="flex justify-center">
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                  className={`px-4 py-2 rounded ${
                    isStep1Valid
                      ? "bg-blue-500 hover:bg-blue-700 text-white"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Lanjut
                </Button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <FormField
                label="Jumlah Donasi"
                type="text"
                name="amount"
                value={new Intl.NumberFormat("id-ID").format(
                  formData.amount || ""
                )}
                placeholder="Masukkan Jumlah Donasi Anda"
                onChange={(e) => {
                  const angka = e.target.value.replace(/\D/g, "");
                  setFormData((prev) => ({ ...prev, amount: angka }));
                }}
              />

              <FormField
                label="Pesan untuk Campaign (Opsional)"
                type="text"
                name="comment"
                value={formData.comment}
                placeholder="Tuliskan pesan singkat untuk campaign ini"
                onChange={handleChange}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded mr-4"
                >
                  Kembali
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep2Valid}
                  className={`px-4 py-2 rounded ${
                    isStep2Valid
                      ? "bg-blue-500 hover:bg-blue-700 text-white"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Lihat Ringkasan
                </Button>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Ringkasan Donasi Anda
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center">
                  <p className="text-lg font-medium pr-2">
                    <strong>Kampanye :</strong>
                  </p>
                  <p className="text-lg">
                    {campaignDetails?.title || "Tidak diketahui"}
                  </p>
                </div>

                <div className="flex items-center ">
                  <p className="text-lg font-medium pr-2">
                    <strong>Nama : </strong>
                  </p>
                  <p className="text-lg">{formData.name || "Belum diisi"}</p>
                </div>

                <div className="flex items-center">
                  <p className="text-lg font-medium pr-2">
                    <strong>Jumlah Donasi :</strong>
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(formData.amount || 0)}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="text-lg font-medium pr-2">
                    <strong>Pesan :</strong>
                  </p>
                  <p className="text-lg">
                    {formData.comment || "Tidak ada pesan"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded mr-4"
                >
                  Kembali
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Konfirmasi dan Donasi"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormDonasi;
