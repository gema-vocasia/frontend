import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import campaignStore from "../../store/campaignStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormField from "../molecules/FormField";
import FileUploadField from "../molecules/FileUploadField";
import DateField from "../molecules/DateField";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import axios from "axios";

const FormBuatCampaign = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [targetDonasi, setTargetDonasi] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalBerakhir, setTanggalBerakhir] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const {createCampaign, isLoading} = campaignStore();
  const [userKYCStatus, setIsKYC] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function fetchCurrentUserFromLocalStorage() {
      try {
        const userProfile = localStorage.getItem("user");
        if (userProfile) {
          const parsedProfile = JSON.parse(userProfile);
          setIsKYC(parsedProfile.isKYC);
          console.log("data", parsedProfile.isKYC);
        } else {
          console.warn("User profile not found in localStorage");
        }
      } catch (error) {
        console.error("Error parsing user profile from localStorage:", error);
      }
    }
    const isKYC = true;
    localStorage.setItem("userKYCStatus", isKYC.toString());
    fetchCurrentUserFromLocalStorage();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/categories")
      .then((response) => {
        const fetchedCategories = response.data.data.categories;
        setKategori(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const calculateDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
  };
  const isDateValid =
    tanggalMulai &&
    tanggalBerakhir &&
    calculateDateDifference(tanggalMulai, tanggalBerakhir) >= 30;

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
          icon: "error",
          title: "Ukuran File Terlalu Besar",
          text: "Ukuran maksimum file adalah 5MB.",
          confirmButtonText: "OK",
        });
        e.target.value = ""; // Reset input
        return;
      }
      setThumbnail(file); // Simpan file
      setThumbnailPreview(URL.createObjectURL(file)); // Simpan URL preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userKYCStatus);
    if (!userKYCStatus) {
      Swal.fire({
        icon: "error",
        title: "Verifikasi KTP Diperlukan",
        text: "Anda harus melakukan verifikasi KTP sebelum membuat kampanye.",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        navigate("/edit-profile");
      }, 2000);

      return;
    }

    // Validasi form
    const steps = [
      {field: judul, step: 1},
      {field: kategori, step: 2},
      {field: targetDonasi, step: 3},
      {field: tanggalMulai && tanggalBerakhir, step: 4},
      {field: deskripsi, step: 5},
      {field: thumbnail, step: 6},
    ];

    const incompleteStep = steps.find((item) => !item.field);
    if (incompleteStep) {
      setCurrentStep(incompleteStep.step);
      return;
    }

    // Siapkan data untuk dikirim
    const campaignData = {
      title: judul,
      categoryId: selectedCategory,
      targetAmount: parseInt(targetDonasi, 10),
      startDate: tanggalMulai,
      endDate: tanggalBerakhir,
      description: cleanHTML(deskripsi),
    };

    try {
      await createCampaign(campaignData, thumbnail); // Panggil store
      Swal.fire({
        icon: "success",
        title: "Kampanye Berhasil Dibuat",
        text: "Kampanye Anda telah berhasil dibuat!",
        confirmButtonText: "OK",
      });
      navigate("/kampanye-saya");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: error.message || "Terjadi kesalahan saat membuat kampanye.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case 1:
        if (!judul) {
          return;
        }
        break;
      case 2:
        if (!kategori) {
          return;
        }
        break;
      case 3:
        if (!targetDonasi) {
          return;
        }
        break;
      case 4:
        if (!tanggalMulai || !tanggalBerakhir) {
          return;
        }
        break;
      case 5:
        if (countWords < 30) {
          return;
        }
        break;
      case 6:
        if (!thumbnail) {
          return;
        }
        break;
      default:
        break;
    }

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const cleanHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl p-8 m-8 overflow-hidden bg-white rounded-lg shadow-xl">
        {currentStep === 0 && (
          <div className="p-8 m-8 bg-white border-t-4" style={{ borderColor: '#5E84C5' }}>
            <h2 className="mb-4 text-xl font-semibold text-center" style={{ color: '#5E84C5' }}>
              Persyaratan Sebelum Membuat Kampanye
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Sebelum melanjutkan, pastikan Anda telah melakukan verifikasi KTP
              dengan mengunggahnya di profil Anda.
            </p>
            <div className="flex justify-center">
                <Button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-2 mt-4 text-white rounded-lg hover:bg-[#4A6BA9] focus:outline-none"
                    style={{ backgroundColor: "#5E84C5" }}
                >
                    Mulai Isi Data
                </Button>
            </div>

          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <FormField
              label="Judul Kampanye"
              type="text"
              placeholder="Masukan Judul Campaign"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          )}

          {currentStep === 2 && (
            <>
              <label>Kategori</label>
              <Select
                kategori={kategori}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </>
          )}

          {currentStep === 3 && (
            <FormField
              label="Target Donasi"
              type="text"
              placeholder="Masukkan Target Donasi"
              value={
                targetDonasi
                  ? `Rp ${new Intl.NumberFormat("id-ID").format(targetDonasi)}`
                  : ""
              }
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setTargetDonasi(value ? parseInt(value, 10) : "");
              }}
            />
          )}

          {currentStep === 4 && (
            <>
              <DateField
                label="Tanggal Mulai"
                value={tanggalMulai}
                onChange={(e) => setTanggalMulai(e.target.value)}
              />
              <DateField
                label="Tanggal Berakhir"
                value={tanggalBerakhir}
                onChange={(e) => setTanggalBerakhir(e.target.value)}
              />
            </>
          )}

          {currentStep === 5 && (
            <>
              <div>
                <Label>Deskripsi</Label>
                <ReactQuill
                  className={`bg-white rounded-lg text-black border-2 ${
                    countWords(deskripsi) < 30 && currentStep === 5
                      ? "border-red-500"
                      : "border-[#5E84C5]"
                  }`}
                  value={deskripsi}
                  onChange={(value) => {
                    setDeskripsi(value);
                  }}
                  style={{maxHeight: "300px", overflowY: "auto"}}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Minimal panjang deskripsi 30 karakter
                </p>
              </div>
            </>
          )}

          {currentStep === 6 && (
            <div>
              <FileUploadField
                label="Unggah Gambar"
                onChange={handleThumbnailChange}
                thumbnail={thumbnailPreview}
              />
            </div>
          )}

          {/* Preview Data Campaign */}
          {currentStep === 7 && (
            <div className="p-4 space-y-2 border-2 border-blue-500 rounded-lg">
              <div className="flex justify-center mb-4 text-xl font-semibold">
                <p>Data Kampanye</p>
              </div>
              <div className="pb-2 border-b border-gray-300">
                <strong>Judul Kampanye: </strong>
                <span>{judul}</span>
              </div>
              <div className="pb-2 border-b border-gray-300">
                <strong>Kategori: </strong>
                <span>
                  {kategori.find(
                    (category) => category._id === selectedCategory
                  )?.title || "Kategori tidak ditemukan"}
                </span>
              </div>
              <div className="pb-2 border-b border-gray-300">
                <strong>Target Donasi: </strong>
                <span>
                  {targetDonasi
                    ? new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(targetDonasi)
                    : "Rp. 0,00"}
                </span>
              </div>
              <div className="pb-2 border-b border-gray-300">
                <strong>Tanggal Mulai: </strong>
                <span>{tanggalMulai}</span>
              </div>
              <div className="pb-2 border-b border-gray-300">
                <strong>Tanggal Berakhir: </strong>
                <span>{tanggalBerakhir}</span>
              </div>
              <div className="flex flex-col pb-2 border-b border-gray-300">
                <strong>Deskripsi: </strong>
                <p className="mt-1 text-gray-700 scrollable-text">
                  {cleanHTML(deskripsi) || "Belum ada deskripsi."}
                </p>
              </div>
              <div className="flex flex-col">
                <strong>Thumbnail:</strong>
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail"
                  className="object-cover w-56 h-48 mt-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && currentStep <= 7 && (
              <Button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 mr-4 text-white bg-gray-500 rounded hover:bg-gray-700"
              >
                Kembali
              </Button>
            )}

            {currentStep === 1 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  currentStep === 1 && !judul
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentStep === 1 && !judul}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 2 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  !kategori
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={!kategori}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 3 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  !targetDonasi
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={!targetDonasi}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 4 && (
              <Button
                type="button"
                onClick={() => {
                  if (isDateValid) {
                    handleNextStep();
                  }
                }}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  !isDateValid
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={!isDateValid}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 5 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  countWords < 30
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={countWords < 30}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 6 && (
              <Button
                type="button"
                onClick={handleNextStep}
                className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                  !thumbnail
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : ""
                }`}
                disabled={!thumbnail}
              >
                Selanjutnya
              </Button>
            )}

            {currentStep === 7 && (
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Mengirim..." : "Kirim"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBuatCampaign;
