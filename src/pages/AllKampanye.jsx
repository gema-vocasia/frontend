import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ArrowRightOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';
import SedekahPangan from '../assets/SedekahPangan.png';
import Santunan from '../assets/Santunan.png';
import SedekahMakanan from '../assets/SedekahMakanan.png'
import KesehatanSatu from '../assets/KesehatanSatu.png';
import KesehatanDua from '../assets/KesehatanDua.png';
import KesehatanKetiga from '../assets/KesehatanKetiga.png';
import Lewatobi from '../assets/Lewatobi.jpg';
import BanjirMedan from '../assets/BanjirMedan.png';
import GunungLewotobi from '../assets/GunungLewotobi.png';
import PerlengkapanSekolah from '../assets/PerlengkapanSekolah.png';
import RelawanMengajar from '../assets/RelawanMengajar.png';
import BantuRumahBaca from '../assets/BantuRumahBaca.png';
import mangrove from '../assets/mangrove.png';
import MenanamPohon from '../assets/MenanamPohon.jpg';
import PengelolaanSampah from '../assets/PengelolaanSampah.png';

const AllKampanye = () => {
  // Data Kategori Kampanye
  const categories = [
    { id: 1, name: 'Sedekah Pangan Tuntaskan Kelaparan', progress: 10, raisedAmount: 6500000, goalAmount: 65000000, fundraiser: 'Call To Action Indonesia', type: 'Kegiatan Sosial', image: SedekahPangan },
    { id: 2, name: 'Santunan dan Doa bersama anak Yatim Akhir Tahun', progress: 3, raisedAmount: 2174000, goalAmount: 71800000, fundraiser: 'Yayasan Desa Hijau', type: 'Kegiatan Sosial', image: Santunan },
    { id: 3, name: 'Sedekah Makanan Bergizi anak Papua', progress: 2, raisedAmount: 1155000, goalAmount: 50000000, fundraiser: 'Rumah Zakat Jayapura', type: 'Kegiatan Sosial', image: SedekahMakanan },
    { id: 4, name: 'DARURAT! Hidupnya Bergantung Kemo & Radioterapi!', progress: 77, raisedAmount: 108258028, goalAmount: 139980000, fundraiser: 'Tedy Kusniadi', type: 'Kesehatan', image: KesehatanSatu },
    { id: 5, name: 'Tolong, Selamatkan Nyawa Balita Sakit Kronis!', progress: 97, raisedAmount: 152000000, goalAmount: 157000000, fundraiser: 'Yayasan Ruang Sejahtera Umat', type: 'Kesehatan', image: KesehatanDua },
    { id: 6, name: 'Terancam Lumpuh Total, Asil Butuh Biaya Berobat!', progress: 2, raisedAmount: 2576000, goalAmount: 91908000, fundraiser: 'Yayasan Sahabat Ayah Sarah', type: 'Kesehatan', image: KesehatanKetiga },
    { id: 7, name: 'Bantuan Warga Terdampak Erupsi Gunung Lewotobi', progress: 70, raisedAmount: 7000000, goalAmount: 10000000, fundraiser: 'Gema Foundation', type: 'Bencana Alam', image: Lewatobi },
    { id: 8, name: 'Solidaritas untuk Korban Banjir Sumatera Utara', progress: 20, raisedAmount: 850000, goalAmount: 150000000, fundraiser: 'Aksi Peduli', type: 'Bencana Alam', image: BanjirMedan },
    { id: 9, name: 'Lewotobi Erupsi, Darurat Bantuan Obat dan Alat Kesehatan', progress: 80, raisedAmount: 80000000, goalAmount: 100000000, fundraiser: 'RSUD Labuang Baji', type: 'Bencana Alam', image: GunungLewotobi },
    { id: 10, name: 'Bantu Perlengkapan Sekolah Siswa Tak Mampu', progress: 9, raisedAmount: 1323000, goalAmount: 14000000, fundraiser: 'Yayasan Nurul Fahmi', type: 'Pendidikan', image: PerlengkapanSekolah },
    { id: 11, name: 'Bantuan Pendidikan untuk Relawan Mengajar', progress: 36, raisedAmount: 181004000, goalAmount: 500000000, fundraiser: 'Comma (Collaborative Muhammadiyah)', type: 'Pendidikan', image: RelawanMengajar },
    { id: 12, name: '1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua', progress: 30, raisedAmount: 30609556, goalAmount: 100000000, fundraiser: 'Wahana Visi Indonesia', type: 'Pendidikan', image: BantuRumahBaca},
    { id: 13, name: 'Bergerak Bersama! Tanam Mangrove Pesisir Indonesia', progress: 5, raisedAmount: 5000000, goalAmount: 100000000, fundraiser: 'Gema Foundation', type: 'Lingkungan', image: mangrove },
    { id: 14, name: 'Hijaukan Kembali Bumi dengan Menanam Pohon', progress: 36, raisedAmount: 8970514, goalAmount: 25000000, fundraiser: 'Gema Foundation', type: 'Lingkungan', image: MenanamPohon },
    { id: 15, name: 'Mari Wujudkan Pengelolaan Sampah Berkelanjutan', progress: 66, raisedAmount: 10000000, goalAmount: 15000000, fundraiser: 'Relawan Gesit', type: 'Lingkungan', image: PengelolaanSampah },
];


  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default untuk menampilkan semua kategori

  // Filter kampanye berdasarkan kategori yang dipilih
  const filteredCategories = categories.filter((category) => {
    return selectedCategory === 'All' || category.type === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
     <header className="fixed top-0 left-0 z-10 w-full p-4 bg-white border-b border-gray-300">
  <div className="flex items-center justify-between w-full px-4">
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
      <nav className="flex gap-5">
        <Link
          to="/"
          className={`text-lg font-medium p-2 rounded border-2 ${
            location.pathname === '/'
              ? 'bg-[#5E84C5] text-white border-[#5E84C5]' // Saat Beranda aktif
              : 'text-black hover:bg-[#4B6CA0] hover:border-[#5E84C5] hover:text-white border-transparent' // Efek hover saat tidak aktif
          }`}
        >
          Beranda
        </Link>
        <Link
          to="/tentang-kami"
          className={`text-lg font-medium p-2 rounded border-2 ${
            location.pathname === '/tentang-kami'
              ? 'bg-[#5E84C5] text-white border-[#5E84C5]' // Saat Tentang Kami aktif
              : 'text-black hover:bg-[#4B6CA0] hover:border-[#5E84C5] hover:text-white border-transparent' // Efek hover saat tidak aktif
          }`}
        >
          Tentang Kami
        </Link>
        <Link
          to="/all-kampanye"
          className={`text-lg font-medium p-2 rounded border-2 ${
            location.pathname === '/all-kampanye'
              ? 'bg-[#5E84C5] text-white border-[#5E84C5]' // Saat All Kampanye aktif
              : 'text-black hover:bg-[#4B6CA0] hover:border-[#5E84C5] hover:text-white border-transparent' // Efek hover saat tidak aktif
          }`}
        >
          Donasikan
        </Link>
      </nav>
    </div>
    <div className="flex gap-2">
      {/* Tombol Masuk */}
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0]">
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
        Masuk
      </button>
      {/* Tombol Daftar */}
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0]">
        <UserPlusIcon className="w-5 h-5" />
        Daftar
      </button>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold text-black">Kampanye Kami</h1>
        <p className="mt-2 text-lg text-gray-600">Kami hadir untuk membantu mereka yang membutuhkan</p>
      </div>

      {/* Filter Section */}
      <div className="px-6 pt-10 md:px-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-4">
            {['All', 'Kegiatan Sosial', 'Kesehatan', 'Bencana Alam', 'Pendidikan', 'Lingkungan'].map((categoryType) => (
              <button
                key={categoryType}
                onClick={() => setSelectedCategory(categoryType)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition duration-300 ${
                  selectedCategory === categoryType
                    ? 'bg-[#5E84C5] text-white'
                    : 'bg-white text-[#5E84C5] border border-[#5E84C5] hover:bg-[#E6ECF5]'
                }`}>
                {categoryType}
              </button>
            ))}
          </div>
        </div>

        {/* Kampanye Section */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
<p className="text-lg text-center text-gray-500">Kampanye yang Anda cari tidak ditemukan.</p>
          ) : (
            ['Kegiatan Sosial', 'Kesehatan', 'Bencana Alam', 'Pendidikan', 'Lingkungan']
              .filter((categoryType) => selectedCategory === 'All' || selectedCategory === categoryType)
              .map((categoryType) => {
                const filteredItems = filteredCategories.filter((item) => item.type === categoryType);

                if (filteredItems.length === 0) {
                  return null; // Jangan tampilkan kategori tanpa kampanye
                }

                return (
                  <div key={categoryType}>
                    {/* Category Title */}
                    <h2 className="mb-4 text-2xl font-bold text-black">{categoryType}</h2>

                    {/* Campaign List */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredItems.map((category, idx) => (
                        <div
                        key={category.id}
                        className="flex flex-col p-6 mb-8 transition transform bg-white border border-gray-300 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl"
                      >
                      
{/* Image Section */}
<div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden bg-gray-200 rounded">
  <img src={category.image} alt={category.name} className="object-cover w-full h-full" />
</div>

<h3 className="mb-4 text-xl font-semibold text-left text-black">{category.name}</h3>
<div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
  <p className="text-left">{category.fundraiser}</p>
  <p className="ml-auto text-left">{category.type}</p>
</div>



{/* Amounts Section (Terkumpul and Target above progress bar) */}
<div className="flex items-center justify-between mb-2">
  <span className="text-sm font-medium text-gray-700">Terkumpul Rp {category.raisedAmount.toLocaleString()}</span>
  <span className="text-sm font-medium text-gray-700">Target Rp {category.goalAmount.toLocaleString()}</span>
</div>

{/* Progress Bar */}
<div className="w-full mt-2">
  <div className="relative w-full h-1 bg-gray-300 rounded">
    <div
      className="absolute top-0 left-0 h-full bg-[#5E84C5] rounded"
      style={{ width: `${category.progress}%` }}
    ></div>
  </div>
</div>



                         {/* Buttons */}
<div className="flex justify-between w-full gap-4 mt-6">
  <button className="flex-1 px-6 py-2 text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] transition duration-300 flex items-center justify-center">
    Donasi
  </button>

  <Link
    to={`/campaign-detail/${category.id}`}
    className="flex-1 px-6 py-2 text-[#5E84C5] bg-white border border-[#5E84C5] rounded-full hover:bg-[#E6ECF5] transition duration-300 flex items-center justify-center"
  >
    Detail
  </Link>
</div>
 
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
          )}
        </div>

        
        {/* Footer Section */}
        <footer className="w-full text-white" style={{ backgroundColor: '#5E84C5' }}>
            <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explore Section */}
            <div>
  <h4 className="mb-4 text-lg font-bold">Explore</h4>
  <ul className="space-y-2">
    <li><a href="/" className="text-white hover:underline">Beranda</a></li>
    <li><a href="/tentang-kami" className="text-white hover:underline">Tentang kami</a></li>
    <li><a href="/all-kampanye" className="text-white hover:underline">Semua Kampanye</a></li>
  </ul>
</div>

            {/* Contact Us Section */}
            <div>
                <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
                <p>GEMA Foundation</p>
                <p>Jl. Kebaikan No.45, Kota Berbagi, Indonesia 12345</p>
                <p className="mt-2">
                Email:{" "}
                <a href="mailto:info@donasigema.com" className="text-white hover:underline">
                    info@donasigema.com
                </a>
                </p>
                <p>
                Phone:{" "}
                <a href="tel:+6281234567890" className="text-white hover:underline">
                    (+62) 812-3456-7890
                </a>
                </p>
            </div>

            {/* Follow Section */}
            <div>
                <h4 className="mb-4 text-lg font-bold">Follow</h4>
                <ul className="space-y-2">
                <li>
                    <a
                    href="https://www.instagram.com/donasi.gema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:underline">
                    <img
                        src="https://img.icons8.com/color/20/instagram-new.png"
                        alt="Instagram"
                        className="mr-2"/>
                    @donasi.gema
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.facebook.com/donasigema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:underline">
                    <img
                        src="https://img.icons8.com/color/20/facebook.png"
                        alt="Facebook"
                        className="mr-2"/>
                    Donasi Gema
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.tiktok.com/@donasi.gema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:underline">
                    <img
                        src="https://img.icons8.com/color/20/tiktok.png"
                        alt="TikTok"
                        className="mr-2"/>
                    @donasi.gema
                    </a>
                </li>
                </ul>
            </div>
            </div>

            {/* Copyright Section */}
            <div className="py-4 bg-white">
            <p className="text-sm text-center" style={{ color: '#5E84C5' }}>
                © 2024 GEMA. All rights reserved.
            </p>
            </div>
        </footer> 
      </div>
    </div>
  );
};

export default AllKampanye;
