import { useState } from "react";
import Navbar from "../components//organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import CampaignSection from "../components/organisms/CampaignSection";
import StorySection from "../components/organisms/StorySection";
import SedekahPangan from "../assets/images/SedekahPangan.png";
import Santunan from "../assets/images/Santunan.png";
import KesehatanDua from "../assets/images/KesehatanDua.png";
import BanjirMedan from "../assets/images/BanjirMedan.png";
import cerita from "../assets/images/cerita.png";
import herohome from "../assets/images/heroHome.png";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearch = () => {
    setSearchQuery("");
  };

  const cardData = [
    {
      id: 1,
      title: "Sedekah Pangan Tuntaskan Kelaparan",
      progress: 10,
      totalDonation: 6500000,
      targetAmount: 65000000,
      category: "Kegiatan Sosial",
      isUrgent: false,
      photo: SedekahPangan,
    },
    {
      id: 2,
      title: "Santunan dan Doa bersama anak Yatim Akhir Tahun",
      progress: 3,
      totalDonation: 2174000,
      targetAmount: 71800000,
      category: "Kegiatan Sosial",
      isUrgent: true,
      photo: Santunan,
    },
    {
      id: 3,
      title: "Kesehatan untuk Semua",
      progress: 5,
      totalDonation: 1000000,
      targetAmount: 10000000,
      category: "Kesehatan",
      isUrgent: false,
      photo: KesehatanDua,
    },
    {
      id: 4,
      title: "Banjir Medan Membutuhkan Bantuan",
      progress: 20,
      totalDonation: 1500000,
      targetAmount: 10000000,
      category: "Bencana Alam",
      isUrgent: true,
      photo: BanjirMedan,
    },
  ];

  const filteredUrgentData = cardData.filter((card) => card.isUrgent);

  const filteredLatestData = cardData.filter((card) => !card.isUrgent);

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

      {/* Campaign Section */}
      {filteredUrgentData.length > 0 || filteredLatestData.length > 0 ? (
        <>
          {filteredUrgentData.length > 0 && (
            <CampaignSection
              title="Penggalangan Dana Mendesak"
              cards={filteredUrgentData}
            />
          )}

          {filteredLatestData.length > 0 && (
            <CampaignSection
              title="Penggalangan Dana Terbaru"
              cards={filteredLatestData}
            />
          )}
        </>
      ) : (
        <section className="py-10 bg-gray-100">
          <div className="container px-4 mx-auto">
            <p className="text-lg text-center text-gray-600">
              Tidak ada hasil pencarian yang ditemukan.
            </p>
          </div>
        </section>
      )}

      {/* Story Section */}
      <section className="mt-6 pt-6 pb-6 bg-white">
        <StorySection
          image={cerita}
          title="Cerita Kami"
          description="Kami di sini untuk membantu mereka yang kehilangan harapan. Dengan sedikit kebaikanmu hari ini, senyum mereka akan bertahan selamanya. Bergabunglah dalam misi kami untuk menciptakan dunia yang lebih baik!"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
