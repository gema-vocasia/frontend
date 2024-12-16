import HeroRiwayatImage from "../../assets/herohome.png";
import TitleRiwayat from "../molecules/TitleRiwayat";

const HeroRiwayat = () => {
  return (
    <section className="relative w-full h-[400px] mt-[70px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <img
        src={HeroRiwayatImage}
        alt="Hero"
        className="absolute top-0 left-0 object-cover w-full h-full opacity-50"
      />
      <TitleRiwayat />
    </section>
  );
};

export default HeroRiwayat;
