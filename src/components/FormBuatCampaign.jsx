import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

  const FormBuatCampaign = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setThumbnail(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-black mb-6">
          Isi Data Dibawah Ini
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-black mb-2">Judul Campaign</label>
            <input
              type="text"
              placeholder="Masukan Judul Campaign"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-black mb-2">Kategori</label>
            <select className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200">
              <option value="" disabled selected>
                Pilih Kategori
              </option>
              <option value="sosial">Sosial</option>
              <option value="kesehatan">Kesehatan</option>
              <option value="bencana-alam">Bencana Alam</option>
              <option value="pendidikan">Pendidikan</option>
              <option value="lingkungan">Lingkungan</option>
            </select>  
          </div>
          <div>
            <label className="block text-black mb-2">Target Donasi</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">Rp</span>
            <input
              type="text"
              placeholder="Masukkan Target Donasi"
              className="w-full p-3 pl-10 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
            </div>
          </div>

          <div>
            <label className="block text-black mb-2">Tanggal Mulai</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-black mb-2">Tanggal Berakhir</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="mt-2 bg-blue-100 border-l-4 border-[#5E84C5] text-blue-900 p-2 rounded">
              <p className="text-sm">
                ⚠ Minimal durasi campaign <strong>30 hari</strong>
              </p>
            </div>
          </div>
          
          <div>
            <label className="block text-black mb-2">Deskripsi</label>
            <ReactQuill
              className="bg-white rounded-lg text-black border-2 border-[#5E84C5]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-black mb-2">Unggah Gambar</label>
            <div
              className="w-64 h-64 p-4 border-2 border-[#5E84C5] rounded-lg flex flex-col justify-center items-center relative"
            >
              {/* Area upload foto */}
              {!thumbnail && (
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-500 mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5v-9m0 9-3.75-3.75m3.75 3.75 3.75-3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">Upload Photo</p>
                  <p className="text-xs text-gray-400">Drag and drop here</p>
                </div>
              )}

              {/* Preview foto */}
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt="Thumbnail Preview"
                  className="absolute inset-0 w-full h-full object-cover p-2"
                />
              )}

              {/* Input file */}
              <input
                id="thumbnailInput"
                type="file"
                onChange={handleThumbnailChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
              <p className="text-xs text-gray-500 mt-2">
                Klik gambar untuk mengganti foto
              </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/3 h-12 bg-[#5E84C5] text-white rounded-xl hover:bg-[#4B6CA0] transform hover:scale-105 transition duration-300 mt-6 text-lg font-semibold"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBuatCampaign;
