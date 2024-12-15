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
  // console.log("id: ", campaignId);
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

  // useEffect for midtrans
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

  // useEffect for campaign details
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
          console.error("Error fetching campaign details:", error);
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
        console.log(result);
      },
      onPending: function (result) {
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
    navigate("/");
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

    // Validate steps and continue if valid
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

  const imageUrl = `http://localhost:8080/api/v1/files/${campaignDetails.photo}`;
  return (
    <div className="flex items-center justify-center p-6 bg-gray-100">
      <ToastContainer />
      <div
        className="w-full max-w-3xl p-8 m-8 bg-white rounded-lg shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {campaignDetails && (
          <div className="flex flex-col items-start p-6 mb-10 bg-white rounded-lg shadow-lg md:flex-row">
            {campaignDetails.photo && (
              <img
                src={imageUrl}
                alt={campaignDetails.title}
                className="object-cover w-full h-64 mb-4 rounded-lg md:w-1/3 md:mb-0"
              />
            )}
            <div className="flex flex-col items-start w-full md:w-2/3 md:pl-6">
              <h1 className="mb-4 text-3xl font-semibold text-gray-800 md:text-4xl">
                {campaignDetails.title}
              </h1>
              <p className="mb-2 text-base text-gray-700 md:text-lg">
                <strong>Oleh: </strong>
                <span className="text-lg">
                  {campaignDetails.userId?.name || "Tidak diketahui"}
                </span>
              </p>

              <p className="mb-2 text-base text-gray-700 md:text-lg">
                <strong>Target Donasi:</strong>{" "}
                <span className="text-lg">
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
                  className="px-4 py-2 mr-4 text-white bg-[#5E84C5] rounded hover:bg-[#5E84C5]"
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
                value={`Rp ${new Intl.NumberFormat("id-ID").format(
                  formData.amount || ""
                )}`}
                placeholder="Masukkan Jumlah Donasi Anda"
                onChange={(e) => {
                  const angka = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
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
                  className="px-4 py-2 mr-4 text-white bg-gray-500 rounded hover:bg-gray-700"
                >
                  Kembali
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep2Valid}
                  className="px-4 py-2 mr-4 text-white bg-[#5E84C5] rounded hover:bg-[#5E84C5]"
                >
                  Lihat Ringkasan
                </Button>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-black">
                Ringkasan Donasi Anda
              </h2>

              <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                  <p className="pr-2 text-lg font-medium">
                    <strong>Kampanye:</strong>
                  </p>
                  <p className="text-lg">
                    {campaignDetails?.title || "Tidak diketahui"}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="pr-2 text-lg font-medium">
                    <strong>Nama:</strong>
                  </p>
                  <p className="text-lg">{formData.name || "Belum diisi"}</p>
                </div>

                <div className="flex items-center">
                  <p className="pr-2 text-lg font-medium">
                    <strong>Jumlah Donasi:</strong>
                  </p>
                  <p className="text-lg">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(formData.amount || 0)}
                  </p>
                </div>

                <div className="flex items-start">
                  <p className="pr-2 text-lg font-medium">
                    <strong>Pesan:</strong>
                  </p>
                  <p className="w-full text-lg break-words">
                    {formData.comment || "Tidak ada pesan"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 mr-4 text-white bg-gray-500 rounded hover:bg-gray-700"
                >
                  Kembali
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 mr-4 text-white bg-[#5E84C5] rounded hover:bg-[#5E84C5]"
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
