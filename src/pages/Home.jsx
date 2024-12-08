import React, { useState } from 'react';
import { ArrowRightOnRectangleIcon, UserPlusIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Gunakan XMarkIcon untuk v2
import logo from '../assets/logo.png'; // Path to the logo image
import home from '../assets/home.png'; // Path to the hero image
import { Link } from 'react-router-dom';
import cerita from '../assets/cerita.png'; 
import SedekahPangan from '../assets/SedekahPangan.png';
import Santunan from '../assets/Santunan.png';
import KesehatanDua from '../assets/KesehatanDua.png';
import Lewatobi from '../assets/Lewatobi.jpg';
import GunungLewotobi from '../assets/GunungLewotobi.png';
import BanjirMedan from '../assets/BanjirMedan.png';


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // Data untuk card
  const cardData = [
    {
      id: 5,
      title: 'Tolong, Selamatkan Nyawa Balita Sakit Kronis!',
      type: 'Kesehatan',
      progress: 97,
      isUrgent: true,
      collected: 152000000,
      target: 157000000,
      fundraiser: 'Yayasan Ruang Sejahtera Umat',
      image: KesehatanDua
    },    
    {
      id: 7,
      title: 'Bantuan Warga Terdampak Erupsi Gunung Lewotobi',
      type: 'Bencana Alam',
      progress: 70,
      isUrgent: true,
      collected: 7000000,
      target: 10000000,
      fundraiser: 'GEMA Foundation',
      image: Lewatobi
    },
    {
      id: 9,
      title: 'Lewotobi Erupsi, Darurat Bantuan Obat dan Alat Kesehatan',
      type: 'Bencana Alam',
      progress: 80,
      isUrgent: true,
      collected: 80000000,
      target: 100000000,
      fundraiser: 'RSUD Labuang Baji',
      image: GunungLewotobi
    },    
    {
      id: 1,
      title: 'Sedekah Pangan Tuntaskan Kelaparan',
      type: 'Kegiatan Sosial',
      progress: 10,
      isUrgent: false,
      collected: 6500000,
      target: 65000000,
      fundraiser: 'Call To Action Indonesia',
      image: SedekahPangan
    },    
    {
      id: 2,
      title: 'Santunan dan Doa bersama anak Yatim Akhir Tahun',
      type: 'Kegiatan Sosial',
      progress: 3,
      isUrgent: false,
      collected: 2174000,
      target: 71800000,
      fundraiser: 'Yayasan Desa Hijau',
      image: Santunan
    },    
    {
      id: 8,
      title: 'Solidaritas untuk Korban Banjir Sumatera Utara',
      type: 'Bencana Alam',
      progress: 20,
      isUrgent: false,
      collected: 850000,
      target: 150000000,
      fundraiser: 'Aksi Peduli',
      image: BanjirMedan
    },    
  ];

  const filteredUrgentData = cardData.filter(
    (card) =>
      card.isUrgent &&
      (card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredLatestData = cardData.filter(
    (card) =>
      !card.isUrgent &&
      (card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Function to clear the search input
  const clearSearch = () => {
    setSearchQuery('');
  };
  

  return (
    <div>
      <header className="fixed top-0 left-0 z-10 w-full p-4 bg-white border-b border-gray-300">
  <div className="flex items-center justify-between w-full px-4">
    <div className="flex items-center">
      {/* Logo */}
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

    {/* Buttons */}
    <div className="flex gap-2">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0]">
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
        Masuk
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0]">
        <UserPlusIcon className="w-5 h-5" />
        Daftar
      </button>
    </div>
  </div>
</header>
      {/* Hero Section */}
      <div className="relative mt-0">
        <div className="w-screen h-[500px] overflow-hidden">
          <img src={home} alt="home" className="object-cover w-screen h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">
            <span className="text-[#2088CE]">KEBAIKANMU</span> HARI INI<br />SENYUM MEREKA SELAMANYA
          </h1>
          <div className="relative w-1/3 mt-4"><MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2088CE]"/>
  <input
    type="text"
    placeholder="Cari..."
    className="w-full pl-10 pr-6 py-3 text-black bg-white rounded-full border-2 border-[#2088CE] focus:outline-none focus:ring-2 focus:ring-[#2088CE] transition duration-300 ease-in-out hover:bg-[#f1f1f1]"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  {searchQuery && (
    <XMarkIcon
      onClick={clearSearch}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-[#2088CE] hover:text-[#4B6CA0] transition"
    />
  )}
</div>

        </div>
      </div>

      {/* Section: Galang Dana dan Donasi */}
{/* Section: Galang Dana dan Donasi */}
{searchQuery === '' && (
  <section className="w-full py-16 bg-gray-100">
    <div className="flex flex-col items-center justify-center mx-auto max-w-[800px] gap-6 md:flex-row">
      {/* Card Galang Dana */}
      <div
        className="w-full p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 md:w-[48%] flex flex-col items-center justify-between h-[240px]"
        style={{ backgroundColor: '#5E84C5' }}
      >
        <h3 className="text-2xl font-bold text-center text-white">
          Galang Dana
        </h3>
        <button
          className="flex items-center justify-center mt-4 font-medium text-blue-900 transition-all rounded-full hover:bg-blue-600 hover:text-white"
          style={{
            backgroundColor: '#D3E3FF',
            width: '210px',
            height: '40px',
            fontSize: '14px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Buat Penggalangan
        </button>
      </div>

      {/* Card Donasi */}
      <div
        className="w-full p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 md:w-[48%] flex flex-col items-center justify-between h-[240px]"
        style={{ backgroundColor: '#D3E3FF' }}
      >
        <h3 className="text-2xl font-bold text-center text-blue-900">
          Donasikan Sebagian Harta Anda
        </h3>
        <Link to="/all-kampanye"> {/* Arahkan ke halaman kampanye */}
          <button
            className="flex items-center justify-center mt-4 font-medium text-white transition-all bg-blue-900 rounded-full hover:bg-blue-700"
            style={{
              width: '150px',
              height: '40px',
              fontSize: '14px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Donasi
          </button>
        </Link>
      </div>
    </div>
  </section>
)}



      {/* Conditional Sections */}
{filteredUrgentData.length > 0 || filteredLatestData.length > 0 ? (
  <>
    {/* Section: Penggalangan Dana Mendesak */}
    {filteredUrgentData.length > 0 && (
      <section className="py-10 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Penggalangan Dana Mendesak</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {filteredUrgentData.map((card) => (
              <div key={card.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                {/* Image Placeholder */}
                <div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden bg-gray-200 rounded">
  <img src={card.image} alt={card.name} className="object-cover w-full h-full" />
</div>
                <div className="p-4">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
  <p className="text-left">{card.fundraiser}</p>
  <p className="ml-auto text-left">{card.type}</p>
</div>


{/* Amounts Section (Terkumpul and Target above progress bar) */}
<div className="flex items-center justify-between mb-2">
  <span className="text-sm font-medium text-gray-700">
    Terkumpul Rp {card.collected.toLocaleString()}
  </span>
  <span className="text-sm font-medium text-gray-700">
    Target Rp {card.target.toLocaleString()}
  </span>
</div>

{/* Progress Bar */}
<div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
  <div
    className="h-full bg-blue-500 rounded-full"
    style={{ width: `${(card.collected / card.target) * 100}%` }}
  ></div>
</div>


<div className="flex gap-2 mt-4">
  {/* Tombol Donasi */}
  <button
    className="w-40 px-5 py-2 text-sm font-semibold text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] border border-[#5E84C5] transition duration-300"
  >
    Donasi
  </button>
  
  {/* Tombol Detail */}
  <Link to={`/campaign-detail/${card.id}`}>
    <button className="w-40 px-5 py-2 text-sm font-semibold text-[#5E84C5] bg-white rounded-full hover:bg-[#E6ECF5] border border-[#5E84C5] transition duration-300">
      Detail
    </button>
  </Link>
</div>





                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Section: Penggalangan Dana Terbaru */}
    {filteredLatestData.length > 0 && (
      <section className="py-10 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Penggalangan Dana Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {filteredLatestData.map((card) => (
              <div key={card.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                {/* Image Placeholder */}
                {/* Image Placeholder */}
                <div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden bg-gray-200 rounded">
  <img src={card.image} alt={card.name} className="object-cover w-full h-full" />
</div>
               
                <div className="p-4">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                   <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-500">
  <p className="text-left">{card.fundraiser}</p>
  <p className="ml-auto text-left">{card.type}</p>
</div>

{/* Amounts Section (Terkumpul and Target above progress bar) */}
<div className="flex items-center justify-between mb-2">
  <span className="text-sm font-medium text-gray-700">
    Terkumpul Rp {card.collected.toLocaleString()}
  </span>
  <span className="text-sm font-medium text-gray-700">
    Target Rp {card.target.toLocaleString()}
  </span>
</div>

{/* Progress Bar */}
<div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
  <div
    className="h-full bg-blue-500 rounded-full"
    style={{ width: `${(card.collected / card.target) * 100}%` }}
  ></div>
</div>

<div className="flex gap-2 mt-4">
  {/* Tombol Donasi */}
  <button
    className="w-40 px-5 py-2 text-sm font-semibold text-white bg-[#5E84C5] rounded-full hover:bg-[#4B6CA0] border border-[#5E84C5] transition duration-300"
  >
    Donasi
  </button>
  
  {/* Tombol Detail */}
  <Link to={`/campaign-detail/${card.id}`}>
    <button className="w-40 px-5 py-2 text-sm font-semibold text-[#5E84C5] bg-white rounded-full hover:bg-[#E6ECF5] border border-[#5E84C5] transition duration-300">
      Detail
    </button>
  </Link>
</div>







                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </>
) : (
  <section className="py-10 bg-gray-100">
    <div className="container px-4 mx-auto">
      <p className="text-lg text-center text-gray-600">Tidak ada hasil pencarian yang ditemukan.</p>
    </div>
  </section>
)}

      
      {/* Conditional Section: Cerita Kami */}
{searchQuery === '' && (
  <section className="py-10 bg-white">
    <div className="container px-4 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Cerita Kami</h2>
      
      <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-8">
        {/* Atas Kiri - Gambar */}
        <div className="row-span-1">
          <img
            src={cerita}// Ganti dengan path gambar yang sesuai
            alt="Balita Cangkok Hati"
            className="object-cover w-full h-64 rounded-lg shadow-lg"
          />
        </div>

        {/* Atas Kanan - Background Biru Tua */}
<div className="flex flex-col justify-center p-6 text-white bg-blue-900">
  <h3 className="text-xl font-semibold text-center">Siapa Kami?</h3>
  <p className="mt-2 text-sm">
    "Kami di sini untuk membantu mereka yang kehilangan harapan. Dengan sedikit kebaikanmu hari ini, senyum mereka akan bertahan selamanya. Bergabunglah dalam misi kami untuk menciptakan dunia yang lebih baik!"
  </p>
</div>

        {/* Bawah Kiri - Background Abu-Abu */}
        <div className="flex flex-col justify-center p-6 bg-gray-300">
        <h3 className="text-xl font-semibold text-center text-gray-800">Kenapa Memilih Kami?</h3>
          <p className="mt-2 text-sm text-gray-700">
            "Kami di sini untuk membantu mereka yang kehilangan harapan. Dengan sedikit kebaikanmu hari ini, senyum mereka akan bertahan selamanya. Bergabunglah dalam misi kami untuk menciptakan dunia yang lebih baik!"
          </p>
        </div>

        {/* Bawah Kanan - Gambar */}
        <div className="row-span-1">
          <img
            src={cerita}  // Ganti dengan path gambar yang sesuai
            alt="Pembangunan Rumah Singgah"
            className="object-cover w-full h-64 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  
)}




      
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
  );
};

export default Home;
