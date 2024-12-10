import banjirmedan from "../../assets/BanjirMedan.png";
import RumahBaca from "../../assets/BantuRumahBaca.png";
import kesehatan from "../../assets/KesehatanDua.png";
import kebakaran from "../../assets/Kebakaran.jpg";
import sekolahrubuh from "../../assets/SekolahRubuh.jpg";
import angintopan from "../../assets/AnginTopan.jpg";

const CardCampaignSaya = () => {
  const donasi = [
    {
      id: 1,
      kampanye: "Bantuan Gizi Anak",
      tanggalmulai: "2025-01-01",
      tanggalberakhir: "2025-05-05",
      kategori: "Kesehatan",
      TargetDonasi: 500000000,
      danamasuk: 0,
      status: "belum dimulai",
      deskripsi:
        "Penggalangan dana bantuan gizi anak bertujuan untuk menyediakan makanan bergizi bagi anak-anak yang mengalami kekurangan gizi. Dana yang terkumpul akan digunakan untuk memberikan paket makanan sehat dan bergizi, serta mendukung program edukasi kesehatan untuk orang tua agar dapat memenuhi kebutuhan gizi anak dengan baik. Ini adalah upaya untuk memastikan tumbuh kembang anak yang optimal dan mencegah malnutrisi..",
      gambar: RumahBaca,
    },
    {
      id: 2,
      kampanye: "Bantuan Kesehatan",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      kategori: "Kesehatan",
      TargetDonasi: 500000000,
      danamasuk: 200000000,
      status: "sedang proses",
      deskripsi:
        "Penggalangan dana bantuan kesehatan untuk pasien balita dengan kelainan jantung bertujuan untuk memberikan dukungan finansial bagi keluarga yang membutuhkan biaya pengobatan dan perawatan medis. Dana yang terkumpul akan digunakan untuk prosedur medis, operasi jantung, perawatan rumah sakit, serta obat-obatan yang dibutuhkan, guna memberikan kesempatan hidup yang lebih baik bagi balita dengan kondisi tersebut.",
      gambar: kesehatan,
    },
    {
      id: 3,
      kampanye: "Bantuan Korban Tsunami",
      tanggalmulai: "2024-11-01",
      tanggalberakhir: "2024-12-05",
      kategori: "Bencana Alam",
      TargetDonasi: 500000000,
      danamasuk: 500000000,
      status: "telah terkumpul",
      deskripsi:
        "Menggalang dana untuk menyediakan obat-obatan, layanan medis, dan fasilitas kesehatan bagi yang membutuhkan.",
      gambar: banjirmedan,
    },
    {
      id: 4,
      kampanye: "Bantuan Korban Kebakaran",
      tanggalmulai: "2024-10-30",
      tanggalberakhir: "2024-12-31",
      kategori: "Bencana Alam",
      TargetDonasi: 12000000,
      danamasuk: 500000,
      status: "sedang proses",
      deskripsi:
        "Menggalang dana untuk menyediakan obat-obatan, layanan medis, dan fasilitas kesehatan bagi yang membutuhkan.",
      gambar: kebakaran,
    },
    {
      id: 3,
      kampanye: "Bantuan Membangun Sekolah ",
      tanggalmulai: "2023-05-01",
      tanggalberakhir: "2023-05-05",
      kategori: "Bencana Alam",
      TargetDonasi: 10000000,
      danamasuk: 10000000,
      status: "telah terkumpul",
      deskripsi:
        "Menggalang dana untuk membangun kembali tempat sekolah anak anak yang rubuh karena terjadinya gempa.",
      gambar: sekolahrubuh,
    },
    {
      id: 6,
      kampanye: "Bantuan Korban Angin Topan",
      tanggalmulai: "2020-11-01",
      tanggalberakhir: "2021-03-05",
      kategori: "Bencana Alam",
      TargetDonasi: 500000000,
      danamasuk: 500000000,
      status: "telah terkumpul",
      deskripsi:
        "Menggalang dana untuk korban yang terkena dampak angin topan. menyiapkan obat-obatan, layanan medis, dan fasilitas kesehatan bagi yang membutuhkan.",
      gambar: angintopan,
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "belum dimulai") return "bg-red-500 text-white rounded-lg";
    if (status === "sedang proses")
      return "bg-yellow-400 text-black rounded-lg";
    if (status === "telah terkumpul")
      return "bg-green-500 text-white rounded-lg";
  };

  return (
    <main className="pt-20 pb-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {donasi.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border transition transform hover:scale-105 flex flex-col lg:flex-row"
          >
            {/* Responsive Gambar */}
            <div className="relative w-full h-80 lg:w-1/2 lg:h-96">
              <img
                src={item.gambar}
                alt={item.kampanye}
                className="absolute inset-0 w-full h-full object-cover lg:object-contain"
              />
            </div>
            <div className="p-8 space-y-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {item.kampanye}
                </h2>
                <p className="text-gray-600 mb-3">{item.deskripsi}</p>
                <div className="text-gray-800 space-y-3 text-lg">
                  <p>
                    <span className="font-semibold">
                      Tanggal Mulai - Tanggal Berakhir:
                    </span>{" "}
                    {item.tanggalmulai} - {item.tanggalberakhir}
                  </p>
                  <p>
                    <span className="font-semibold">Kategori:</span>{" "}
                    <span className="italic">{item.kategori}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Target Donasi:</span>{" "}
                    {`Rp ${item.TargetDonasi.toLocaleString("id-ID")}`}
                  </p>
                  {(item.status === "sedang proses" ||
                    item.status === "telah terkumpul") && (
                    <p>
                      <span className="font-semibold">Dana Masuk:</span>{" "}
                      {`Rp ${item.danamasuk.toLocaleString("id-ID")}`}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`p-4 text-center text-sm font-semibold ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default CardCampaignSaya;
