import CardCampaignSaya from "../components/organisms/CardCampaignSaya";
import Footer from "../components/organisms/Footer";
import HeroCampaignSaya from "../components/organisms/HeroCampaignSaya";
import Navbar from "../components/organisms/Navbar";

// import { Link } from "react-router-dom";

const CampaignSaya = () => {
  return (
    <>
      <Navbar />
      <HeroCampaignSaya />
      <CardCampaignSaya />
      <Footer />
    </>
  );
};

export default CampaignSaya;
