import HeroRiwayatImage from "../../assets/heroriwayat.jpg";

const HeroRiwayat = () => {
  return (
    <section className="relative w-full h-[400px] mt-[70px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <img
        src={HeroRiwayatImage}
        alt="Hero"
        className="absolute top-0 left-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">Riwayat Donasi Anda</h1>
        <p className="mt-4 text-lg sm:text-2xl max-w-2xl">
          Terima kasih atas donasi Anda! Dukungan Anda sangat berarti bagi
          mereka yang membutuhkan. Semoga kebaikan Anda membawa berkah.
        </p>
      </div>
    </section>
  );
};

export default HeroRiwayat;
