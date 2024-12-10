import { useState } from "react";
import CampaignCard from "../components/molecules/CampaignCard";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

import SedekahPangan from "../assets/images/SedekahPangan.png";
import Santunan from "../assets/images/Santunan.png";
import SedekahMakanan from "../assets/images/SedekahMakanan.png";
import KesehatanSatu from "../assets/images/KesehatanSatu.png";
import KesehatanDua from "../assets/images/KesehatanDua.png";
import KesehatanKetiga from "../assets/images/KesehatanKetiga.png";
import Lewatobi from "../assets/images/Lewatobi.jpg";
import BanjirMedan from "../assets/images/BanjirMedan.png";
import GunungLewotobi from "../assets/images/GunungLewotobi.png";
import PerlengkapanSekolah from "../assets/images/PerlengkapanSekolah.png";
import RelawanMengajar from "../assets/images/RelawanMengajar.png";
import BantuRumahBaca from "../assets/images/BantuRumahBaca.png";
import mangrove from "../assets/images/mangrove.png";
import MenanamPohon from "../assets/images/MenanamPohon.jpg";
import PengelolaanSampah from "../assets/images/PengelolaanSampah.png";

const AllKampanye = () => {

  // Data Kategori Kampanye
  const categories = [
    {
      id: 1,
      name: "Sedekah Pangan Tuntaskan Kelaparan",
      progress: 10,
      raisedAmount: 6500000,
      goalAmount: 65000000,
      fundraiser: "Call To Action Indonesia",
      type: "Kegiatan Sosial",
      image: SedekahPangan,
    },
    {
      id: 2,
      name: "Santunan dan Doa bersama anak Yatim Akhir Tahun",
      progress: 3,
      raisedAmount: 2174000,
      goalAmount: 71800000,
      fundraiser: "Yayasan Desa Hijau",
      type: "Kegiatan Sosial",
      image: Santunan,
    },
    {
      id: 3,
      name: "Sedekah Makanan Bergizi anak Papua",
      progress: 2,
      raisedAmount: 1155000,
      goalAmount: 50000000,
      fundraiser: "Rumah Zakat Jayapura",
      type: "Kegiatan Sosial",
      image: SedekahMakanan,
    },
    {
      id: 4,
      name: "DARURAT! Hidupnya Bergantung Kemo & Radioterapi!",
      progress: 77,
      raisedAmount: 108258028,
      goalAmount: 139980000,
      fundraiser: "Tedy Kusniadi",
      type: "Kesehatan",
      image: KesehatanSatu,
    },
    {
      id: 5,
      name: "Tolong, Selamatkan Nyawa Balita Sakit Kronis!",
      progress: 97,
      raisedAmount: 152000000,
      goalAmount: 157000000,
      fundraiser: "Yayasan Ruang Sejahtera Umat",
      type: "Kesehatan",
      image: KesehatanDua,
    },
    {
      id: 6,
      name: "Terancam Lumpuh Total, Asil Butuh Biaya Berobat!",
      progress: 2,
      raisedAmount: 2576000,
      goalAmount: 91908000,
      fundraiser: "Yayasan Sahabat Ayah Sarah",
      type: "Kesehatan",
      image: KesehatanKetiga,
    },
    {
      id: 7,
      name: "Bantuan Warga Terdampak Erupsi Gunung Lewotobi",
      progress: 70,
      raisedAmount: 7000000,
      goalAmount: 10000000,
      fundraiser: "Gema Foundation",
      type: "Bencana Alam",
      image: Lewatobi,
    },
    {
      id: 8,
      name: "Solidaritas untuk Korban Banjir Sumatera Utara",
      progress: 20,
      raisedAmount: 850000,
      goalAmount: 150000000,
      fundraiser: "Aksi Peduli",
      type: "Bencana Alam",
      image: BanjirMedan,
    },
    {
      id: 9,
      name: "Lewotobi Erupsi, Darurat Bantuan Obat dan Alat Kesehatan",
      progress: 80,
      raisedAmount: 80000000,
      goalAmount: 100000000,
      fundraiser: "RSUD Labuang Baji",
      type: "Bencana Alam",
      image: GunungLewotobi,
    },
    {
      id: 10,
      name: "Bantu Perlengkapan Sekolah Siswa Tak Mampu",
      progress: 9,
      raisedAmount: 1323000,
      goalAmount: 14000000,
      fundraiser: "Yayasan Nurul Fahmi",
      type: "Pendidikan",
      image: PerlengkapanSekolah,
    },
    {
      id: 11,
      name: "Bantuan Pendidikan untuk Relawan Mengajar",
      progress: 36,
      raisedAmount: 181004000,
      goalAmount: 500000000,
      fundraiser: "Comma (Collaborative Muhammadiyah)",
      type: "Pendidikan",
      image: RelawanMengajar,
    },
    {
      id: 12,
      name: "1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua",
      progress: 30,
      raisedAmount: 30609556,
      goalAmount: 100000000,
      fundraiser: "Wahana Visi Indonesia",
      type: "Pendidikan",
      image: BantuRumahBaca,
    },
    {
      id: 13,
      name: "Bergerak Bersama! Tanam Mangrove Pesisir Indonesia",
      progress: 5,
      raisedAmount: 5000000,
      goalAmount: 100000000,
      fundraiser: "Gema Foundation",
      type: "Lingkungan",
      image: mangrove,
    },
    {
      id: 14,
      name: "Hijaukan Kembali Bumi dengan Menanam Pohon",
      progress: 36,
      raisedAmount: 8970514,
      goalAmount: 25000000,
      fundraiser: "Gema Foundation",
      type: "Lingkungan",
      image: MenanamPohon,
    },
    {
      id: 15,
      name: "Mari Wujudkan Pengelolaan Sampah Berkelanjutan",
      progress: 66,
      raisedAmount: 10000000,
      goalAmount: 15000000,
      fundraiser: "Relawan Gesit",
      type: "Lingkungan",
      image: PengelolaanSampah,
    },
  ];

  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default untuk menampilkan semua kategori

  // Filter kampanye berdasarkan kategori yang dipilih
  const filteredCategories = categories.filter((category) => {
    return selectedCategory === "All" || category.type === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold text-black">Kampanye Kami</h1>
        <p className="mt-2 text-lg text-gray-600">
          Kami hadir untuk membantu mereka yang membutuhkan
        </p>
      </div>

      {/* Filter Section */}
      <div className="px-6 pt-10 md:px-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              "All",
              "Kegiatan Sosial",
              "Kesehatan",
              "Bencana Alam",
              "Pendidikan",
              "Lingkungan",
            ].map((categoryType) => (
              <button
                key={categoryType}
                onClick={() => setSelectedCategory(categoryType)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition duration-300 ${
                  selectedCategory === categoryType
                    ? "bg-[#5E84C5] text-white"
                    : "bg-white text-[#5E84C5] border border-[#5E84C5] hover:bg-[#E6ECF5]"
                }`}
              >
                {categoryType}
              </button>
            ))}
          </div>
        </div>

        {/* Kampanye Section */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <p className="text-lg text-center text-gray-500">
              Kampanye yang Anda cari tidak ditemukan.
            </p>
          ) : (
            [
              "Kegiatan Sosial",
              "Kesehatan",
              "Bencana Alam",
              "Pendidikan",
              "Lingkungan",
            ]
              .filter(
                (categoryType) =>
                  selectedCategory === "All" ||
                  selectedCategory === categoryType
              )
              .map((categoryType) => {
                const filteredItems = filteredCategories.filter(
                  (item) => item.type === categoryType
                );

                if (filteredItems.length === 0) {
                  return null; // Jangan tampilkan kategori tanpa kampanye
                }

                return (
                  <div key={categoryType}>
                    {/* Category Title */}
                    <h2 className="mb-4 text-2xl font-bold text-black">
                      {categoryType}
                    </h2>

                    {/* Campaign List */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredItems.map((category) => (
                        <CampaignCard key={category.id} campaign={category} />
                      ))}
                    </div>
                  </div>
                );
              })
          )}
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default AllKampanye;
