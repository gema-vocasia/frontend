import CardCampaignSaya from "../components/organisms/CardCampaignSaya";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import HeroCampaignSaya from "../assets/images/HeroCampaignSaya.jpg";
import HeroCampaignSaya from "../assets/images/HeroCampaignSaya.jpg";

const CampaignSaya = () => {
  return (
    <>
      <Navbar />
      <Hero
            title="Kampanye Saya"
            subtitle="Jelajahi berbagai kampanye yang telah Anda buat"
            image={HeroCampaignSaya}
      />
      <CardCampaignSaya />
      <Footer />
    </>
  );
};

export default CampaignSaya;
