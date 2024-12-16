import HeroCampaignSayaImage from "../../assets/CampaignSayaHero.jpeg";
import TitleCampainSaya from "../molecules/TItleCampaignSaya";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] mt-[70px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <img
        src={HeroCampaignSayaImage}
        alt="Hero"
        className="absolute top-0 left-0 object-cover w-full h-full opacity-50"
      />
      <TitleCampainSaya />
    </section>
  );
};
export default Hero;
