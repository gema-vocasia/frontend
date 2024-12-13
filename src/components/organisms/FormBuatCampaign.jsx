import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaignStore } from "../../store/campaignStore"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormField from "../molecules/FormField";
import FileUploadField from "../molecules/FileUploadField";
import DateField from "../molecules/DateField";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Swal from "sweetalert2"
import { useUsersPosts } from "../../config/useUser";

const FormBuatCampaign = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [targetDonasi, setTargetDonasi] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalBerakhir, setTanggalBerakhir] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const { createCampaign, isLoading } = useCampaignStore();
  const { isKYC, fetchUser } = useUsersPosts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const kategoriOption = [
    { title: "Sosial", id: "675871348a20f72572d483ad" },
    { title: "Kesehatan", id: "675871348a20f72572d483ae" },
    { title: "Bencana Alam", id: "675871348a20f72572d483af" },
    { title: "Pendidikan", id: "675871348a20f72572d483b0" },
    { title: "Lingkungan", id: "675871348a20f72572d483b1" },
  ];

  const calculateDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
  };
  const isDateValid = tanggalMulai && tanggalBerakhir && 
  calculateDateDifference(tanggalMulai, tanggalBerakhir) >= 30;

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { 
        alert("File terlalu besar! Maksimum 5MB.");
        e.target.value = ""; 
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setThumbnail(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isKYC) {
      Swal.fire({
        icon: "error",
        title: "Verifikasi Diperlukan",
        text: "Anda harus mengunggah foto KTP di profil sebelum membuat kampanye.",
        confirmButtonText: "Ke Halaman Profil",
      }).then(() => {
        navigate("/profile"); 
      });
      return;
    }

    const steps = [
      { field: judul, step: 1 },
      { field: kategori, step: 2 },
      { field: targetDonasi, step: 3 },
      { field: tanggalMulai && tanggalBerakhir, step: 4 },
      { field: deskripsi, step: 5 },
      { field: thumbnail, step: 6 },
    ];
  
    const incompleteStep = steps.find((item) => !item.field);
    if (incompleteStep) {
      setCurrentStep(incompleteStep.step);
      return;
    }
    
    const campaignData = {
      title: judul,
      categoryId: kategori,
      targetAmount: parseInt(targetDonasi, 10),
      startDate: tanggalMulai,
      endDate: tanggalBerakhir,
      description: deskripsi,
      photo: thumbnail,
    };

    try {
      await createCampaign(campaignData);
      Swal.fire({
        icon: 'success',
        title: 'Kampanye Berhasil Dibuat',
        text: 'Kampanye Anda telah berhasil dibuat!',
        confirmButtonText: 'OK'
      });
      navigate("/campaignsaya");
    } catch (error) {
      alert(error || "Terjadi kesalahan saat membuat kampanye");
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
        if (!deskripsi) {
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

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl">
        {currentStep === 0 && (
        <div className="bg-white p-8 m-8 rounded-lg shadow-lg border-t-4 border-blue-500">
          <h2 className="text-center text-xl font-semibold text-blue-500 mb-4">
            Persyaratan Sebelum Membuat Kampanye
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sebelum melanjutkan, pastikan Anda telah melakukan verifikasi KTP dengan mengunggahnya di profil Anda.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => setCurrentStep(1)}
              className=" mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
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
              <Label>Kategori</Label>
              <Select 
                kategori={kategori} 
                setKategori={setKategori} 
                options={kategoriOption.map((cat) => ({ value: cat.id, label: cat.title }))} 
              />
            </>
          )}

          {currentStep === 3 && (
            <FormField
              label="Target Donasi"
              type="text"
              placeholder="Masukkan Target Donasi"
              value={targetDonasi}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, ''); 
                setTargetDonasi(`Rp ${value}`);
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
                  deskripsi.length < 30 && currentStep === 5 ? "border-red-500" : "border-[#5E84C5]"
                }`}
                  value={deskripsi}
                  onChange={setDeskripsi}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Minimal panjang deskripsi 30 karakter
                </p>
              </div>
            </>
          )}

          {currentStep === 6 && (
            <FileUploadField
              label="Unggah Gambar"
              onChange={handleThumbnailChange}
              thumbnail={thumbnail}
            />
          )}

            {/* Preview Data Campaign */}
            {currentStep === 7 && (
              <div className="border-2 border-blue-500 rounded-lg p-4 space-y-2">
                <div className="flex justify-center text-xl font-semibold mb-4">
                  <p>Data Kampanye</p>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <strong>Judul Kampanye: </strong>
                  <span>{judul}</span>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <strong>Kategori: </strong>
                  <span>
                    {
                      kategoriOption.find((cat) => cat.id === kategori)?.title || "Kategori tidak ditemukan"
                    }
                  </span>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <strong>Target Donasi: </strong>
                  <span>{targetDonasi}</span>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <strong>Tanggal Mulai: </strong>
                  <span>{tanggalMulai}</span>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <strong>Tanggal Berakhir: </strong>
                  <span>{tanggalBerakhir}</span>
                </div>
                <div className="flex flex-col border-b border-gray-300 pb-2">
                  <strong>Deskripsi: </strong>
                  <p className="text-gray-700 mt-1">{deskripsi}</p>
                </div>
                <div className="flex flex-col">
                  <strong>Thumbnail:</strong>
                  <img
                    src={thumbnail}
                    alt="Thumbnail"
                    className="w-56 h-48 object-cover mt-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep > 0 && currentStep <= 7 && (
                <Button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded mr-4"
                >
                  Kembali
                </Button>
              )}

              {currentStep === 1 && (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                      currentStep === 1 && !judul ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
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
                    !kategori ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
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
                    !targetDonasi ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
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
                    !isDateValid ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
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
                    !deskripsi || deskripsi.length < 30 ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
                  }`}
                  disabled={!deskripsi || deskripsi.length < 30}
                >
                  Selanjutnya
                </Button>
              )}

              {currentStep === 6 && (
                <Button
                  type="button"
                  onClick={handleNextStep}
                  className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded ${
                    !thumbnail ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
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
