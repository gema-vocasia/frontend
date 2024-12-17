import HeroCampaignSayaImage from "../../assets/images/HeroCampaignSaya.jpg";
import TitleCampaignSaya from "../molecules/TitleCampaignSaya";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <img
        src={HeroCampaignSayaImage}
        alt="Hero"
        className="absolute top-0 left-0 object-cover w-full h-full opacity-50"
      />
      <TitleCampaignSaya />
    </section>
  );
};

export default Hero;
