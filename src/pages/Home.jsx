import { useState, useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import CampaignSection from "../components/organisms/CampaignSection";
import StorySection from "../components/organisms/StorySection";
import campaignStore from "../store/campaignStore";
import cerita from "../assets/images/cerita.png";
import herohome from "../assets/images/heroHome.png";
import DonationCampaign from "../components/organisms/DonasiCampaign";

const Home = () => {
  const { campaign, getCampaigns } = campaignStore();
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data campaigns saat komponen di-mount
  useEffect(() => {
    getCampaigns();
  }, []);

  // Filter berdasarkan pencarian
  // Filter berdasarkan pencarian
  const filteredData = campaign.filter((item) => {
    const title = item.title || ""; // Default ke string kosong jika undefined
    const category = item.categoryId._id || ""; // Default ke string kosong jika undefined'
    console.log(item.categoryId._id);
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredUrgentData = filteredData.filter((card) => card.isUrgent);

  const filteredLatestData = filteredData.filter((card) => !card.isUrgent);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <Navbar />

      <Hero
        title="KEBAIKANMU HARI INI"
        subtitle="SENYUM MEREKA SELAMANYA"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearSearch={clearSearch}
        image={herohome}
        showSearch={true}
      />
      <DonationCampaign />
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
        <StorySection image={cerita} title="Cerita Kami" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
