import { useState } from "react";

const FormDonasi = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    jumlahDonasi: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsAnonymous((prev) => !prev);
    setFormData((prev) => ({
      ...prev,
      nama: !isAnonymous ? "Anonymous" : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form berhasil disubmit!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-3xl bg-white m-8 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-black mb-6">
          Isi Data Diri
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan Nama Lengkap"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
              disabled={isAnonymous}
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="anonymous" className="text-black">
                Sembunyikan nama saya (Anonymous)
              </label>
            </div>
          </div>

          <div>
            <label className="block text-black mb-2">Jumlah Donasi</label>
            <input
              type="text"
              placeholder="Masukkan Jumlah Donasi Anda"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-black mb-2">
              Pesan untuk Campaign (Opsional)
            </label>
            <input
              type="text"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Tuliskan pesan singkat untuk campaign ini"
              className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/3 h-12 bg-[#5E84C5] text-white rounded-lg hover:bg-[#4B6CA0] transform hover:scale-105 transition duration-300 mt-6 text-lg font-semibold"
            >
              Donasi Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDonasi;
