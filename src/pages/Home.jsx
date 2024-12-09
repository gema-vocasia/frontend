import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components//organisms/Navbar';
import Footer from '../components/organisms/Footer';
import Hero from '../components/organisms/Hero';
import CampaignSection from '../components/organisms/CampaignSection';
import StorySection from '../components/organisms/StorySection'; 
import SedekahPangan from '../assets/images/SedekahPangan.png';
import Santunan from '../assets/images/Santunan.png';
import KesehatanDua from '../assets/images/KesehatanDua.png';
import Lewatobi from '../assets/images/Lewatobi.jpg';
import GunungLewotobi from '../assets/images/GunungLewotobi.png';
import BanjirMedan from '../assets/images/BanjirMedan.png';
import cerita from '../assets/images/cerita.png';
import herohome from '../assets/images/heroHome.png';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const clearSearch = () => {
    setSearchQuery('');
  };

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
      image: KesehatanDua,
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
      image: Lewatobi,
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
      image: GunungLewotobi,
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
      image: SedekahPangan,
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
      image: Santunan,
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
      image: BanjirMedan,
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

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Hero
        title="KEBAIKANMU HARI INI"
        subtitle="SENYUM MEREKA SELAMANYA"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearSearch={clearSearch}
        image={herohome}
        showSearch={true}
      />
      {/* Section: Galang Dana dan Donasi */}
      {searchQuery === '' && (
        <section className="w-full py-16 bg-gray-100">
          <div className="flex flex-col items-center justify-center mx-auto max-w-[800px] gap-6 md:flex-row">
            {/* Card Galang Dana */}
            <div
              className="w-full p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 md:w-[48%] flex flex-col items-center justify-between h-[240px]"
              style={{ backgroundColor: '#5E84C5' }}
            >
              <h3 className="text-2xl font-bold text-center text-white">Galang Dana</h3>
              <button
                className="flex items-center justify-center mt-4 font-medium text-blue-900 transition-all rounded-lg hover:bg-blue-600 hover:text-white"
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
              <h3 className="text-2xl font-bold text-center text-blue-900">Donasikan Sebagian Harta Anda</h3>
              <Link to="/all-kampanye">
                <button
                  className="flex items-center justify-center mt-4 font-medium text-white transition-all bg-blue-900 rounded-lg hover:bg-blue-700"
                  style={{
                    width: '150px',
                    height: '40px',
                    fontSize: '14px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Donasi Sekarang
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Campaign Section */}
      {filteredUrgentData.length > 0 || filteredLatestData.length > 0 ? (
        <>
          {filteredUrgentData.length > 0 && (
            <CampaignSection title="Penggalangan Dana Mendesak" cards={filteredUrgentData} />
          )}
          {filteredLatestData.length > 0 && (
            <CampaignSection title="Penggalangan Dana Terbaru" cards={filteredLatestData} />
          )}
        </>
      ) : (
        <section className="py-10 bg-gray-100">
          <div className="container px-4 mx-auto">
            <p className="text-lg text-center text-gray-600">Tidak ada hasil pencarian yang ditemukan.</p>
          </div>
        </section>
      )}

      {/* Story Section */}
      {searchQuery === '' && (
        <section className="mt-6 pt-6 pb-6 bg-white">
        <StorySection 
          image={cerita}
          title="Cerita Kami"
          description="Kami di sini untuk membantu mereka yang kehilangan harapan. Dengan sedikit kebaikanmu hari ini, senyum mereka akan bertahan selamanya. Bergabunglah dalam misi kami untuk menciptakan dunia yang lebih baik!"
        />
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Home;
