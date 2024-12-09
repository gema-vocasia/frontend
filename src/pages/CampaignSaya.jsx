import logo from "../assets/logo.jpg";
import banjirmedan from "../assets/img/BanjirMedan.png";
import RumahBaca from "../assets/img/BantuRumahBaca.png";
import kesehatan from "../assets/img/KesehatanDua.png";
import hero from "../assets/img/hero.png";

import { Link } from "react-router-dom";

function CampaignSaya() {
  const donasi = [
    {
      id: 1,
      kampanye: "Bantuan Pendidikan Anak",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Pendidikan",
      TargetDonasi: 500000000,
      danamasuk: 0,
      status: "belum dimulai",
      pesan: "Semoga bermanfaat untuk pendidikan anak-anak.",
      deskripsi:
        "Gerakan ini bertujuan membantu anak-anak di daerah terpencil mendapatkan akses pendidikan yang layak.",
      gambar: RumahBaca,
    },
    {
      id: 2,
      kampanye: "Bantuan Bencana Alam",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Bencana Alam",
      TargetDonasi: 500000000,
      danamasuk: 200000000,
      status: "sedang proses",
      pesan: "Semoga amal ini menjadi berkah.",
      deskripsi:
        "Mendukung korban bencana alam dengan bantuan darurat, logistik, dan kebutuhan pokok.",
      gambar: kesehatan,
    },
    {
      id: 3,
      kampanye: "Bantuan Kesehatan",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Kesehatan",
      TargetDonasi: 500000000,
      danamasuk: 500000000,
      status: "telah terkumpul",
      pesan: "Doa terbaik untuk korban bencana.",
      deskripsi:
        "Menggalang dana untuk menyediakan obat-obatan, layanan medis, dan fasilitas kesehatan bagi yang membutuhkan.",
      gambar: banjirmedan,
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "belum dimulai") return "bg-orange-300 text-white";
    if (status === "sedang proses") return "bg-yellow-300 text-black";
    if (status === "telah terkumpul") return "bg-green-300 text-white";
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full p-4 bg-white border-b border-gray-300">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
            <nav className="flex gap-5">
              <Link
                to="/"
                className="text-lg font-medium text-black hover:underline"
              >
                Beranda
              </Link>
              <Link
                to="/tentang-kami"
                className="text-lg font-medium text-black hover:underline"
              >
                Tentang Kami
              </Link>
              <Link
                to="/all-kampanye"
                className="text-lg font-medium text-black hover:underline"
              >
                Donasikan
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[400px] mt-[70px]">
        <img
          src={hero}
          alt="Hero"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8 bg-black bg-opacity-50">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold sm:text-5xl text-center text-white">
            Campaign Saya
          </h1>
        </div>
      </section>

      <main className="pt-20 pb-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {donasi.length === 0 ? (
            <p className="text-center text-gray-500 italic text-lg">
              Belum ada riwayat donasi.
            </p>
          ) : (
            donasi.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border transition transform hover:scale-105"
              >
                <div className="relative w-full h-80">
                  <img
                    src={item.gambar}
                    alt={item.kampanye}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    {item.kampanye}
                  </h2>
                  <p className="text-gray-600">{item.deskripsi}</p>
                  <div className="text-gray-800 space-y-3 text-lg">
                    <p>
                      <span className="font-semibold">
                        Tanggal Mulai - Tanggal Berakhir:
                      </span>{" "}
                      {item.tanggalmulai} - {item.tanggalberakhir}{" "}
                      <b>{item.jam} WIB</b>
                    </p>
                    <p>
                      <span className="font-semibold">Kategori:</span>{" "}
                      <span className="italic">{item.kategori}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Target Donasi:</span>{" "}
                      {`Rp ${item.TargetDonasi.toLocaleString("id-ID")}`}
                    </p>
                    {item.status === "sedang proses" && (
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
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default CampaignSaya;
