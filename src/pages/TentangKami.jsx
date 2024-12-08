import React from 'react';
import logo from '../assets/logo.png'; // Path untuk logo
import hero from '../assets/hero.png'; // Path untuk gambar hero
import whoweare from '../assets/whoweare.png'; // Path untuk gambar "Siapa Kami?"
import missionImage from '../assets/mission.png'; // Path untuk gambar misi (pastikan file tersedia)
import { Link } from 'react-router-dom'; 

const TentangKami = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 w-full p-4 bg-white border-b border-gray-300">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
            <nav className="flex gap-5">
      <Link to="/" className="text-lg font-medium text-black hover:underline">
        Beranda
      </Link>
      <Link to="/tentang-kami" className="text-lg font-medium text-black hover:underline">
        Tentang Kami
      </Link>
      <Link to="/all-kampanye" className="text-lg font-medium text-black hover:underline">
        Donasikan
      </Link>
    </nav>
          </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0] transition-colors">
              Masuk
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded bg-[#5E84C5] hover:bg-[#4B6CA0] transition-colors">
              Daftar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] mt-[70px]">
        <img
          src={hero}
          alt="Hero"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8 bg-black bg-opacity-50">
          <div className="max-w-lg text-left text-white">
            <h1 className="text-3xl font-bold sm:text-5xl">Apa yang kami lakukan...</h1>
            <p className="mt-2 text-xl sm:text-2xl">Tentang Organisasi Kami</p>
          </div>
        </div>
      </section>

      {/* Section "Siapa Kami?" */}
      <section className="w-full py-16 bg-white">
        <div className="grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:px-16">
          <div className="relative">
            <h2 className="mb-6 text-4xl font-bold text-gray-800">Siapa Kami?</h2>
            <img
              src={whoweare}
              alt="Tentang Kami"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold leading-snug text-blue-900">
              Solusi untuk Membantu Orang Membutuhkan dan Melindungi Planet ini
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-[#000000]">
              Kami adalah sekelompok individu yang berkomitmen untuk menciptakan dampak positif di dunia. Kami menyadari bahwa banyak orang yang membutuhkan bantuan, baik dari segi ekonomi, kesehatan, maupun pendidikan. Selain itu, kami juga memandang pentingnya menjaga keberlanjutan bumi untuk generasi mendatang.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#000000]">
              Melalui platform donasi ini, kami ingin memberikan solusi nyata untuk membantu mereka yang membutuhkan. Kami juga berfokus pada keberlanjutan lingkungan dengan mendukung berbagai inisiatif yang bertujuan untuk melindungi planet ini.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#000000]">
              Kami percaya bahwa setiap kontribusi, sekecil apapun itu, memiliki potensi besar untuk menciptakan perubahan. Dengan transparansi, keamanan, dan kemudahan dalam proses donasi, kami mengajak Anda untuk menjadi bagian dari perubahan positif ini—baik untuk orang-orang yang membutuhkan maupun untuk bumi yang kita cintai.
            </p>
          </div>
        </div>
      </section>

      {/* Section "Tujuan Kami dan Misi Kami" */}
      <section className="w-full py-16 bg-gray-100">
        <div className="grid items-center grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-2 lg:px-16">
          {/* Kolom kiri: Tujuan dan Misi */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Tujuan Kami</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Tujuan utama kami adalah untuk menghubungkan orang-orang yang ingin membantu dengan mereka yang membutuhkan dukungan. Kami ingin menciptakan sebuah platform yang memudahkan setiap orang untuk memberikan donasi dengan cara yang aman dan transparan. Kami percaya bahwa dengan membangun komunitas yang peduli, kita bisa memberikan dampak positif yang besar bagi kehidupan orang-orang yang kurang beruntung.
            </p>

            <h2 className="mt-8 text-4xl font-bold text-gray-800">Misi Kami</h2>
            <ol className="pl-5 mt-4 text-lg leading-relaxed text-gray-600 list-decimal">
              <li>Mempermudah akses donasi bagi siapa saja.</li>
              <li>Memberikan bantuan bagi yang membutuhkan di bidang ekonomi, kesehatan, dan pendidikan.</li>
              <li>Mendukung upaya pelestarian lingkungan.</li>
              <li>Menjaga transparansi dan kepercayaan dalam setiap donasi yang diberikan.</li>
            </ol>
          </div>
          {/* Kolom kanan: Gambar */}
          <div className="flex justify-center">
            <img
              src={missionImage} // Path gambar
              alt="Misi Kami"
              className="w-[400px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Galang Dana dan Donasi */}
      <section className="w-full py-16 bg-white">
        <div className="flex flex-col items-center justify-center mx-auto max-w-[800px] gap-6 md:flex-row">
          {/* Card Galang Dana */}
          <div
            className="w-full p-6 rounded-lg shadow-lg md:w-[48%] flex flex-col items-center justify-between h-[220px]"
            style={{ backgroundColor: '#5E84C5' }}>
            <h3 className="text-2xl font-bold text-center text-white">Galang Dana</h3>
            <button
              className="flex items-center justify-center mt-4 font-medium text-blue-900 rounded-full hover:bg-blue-500"
              style={{
                backgroundColor: '#D3E3FF',
                width: '206.28px',
                height: '35.96px',
                fontSize: '14px',
              }}>
              Buat Penggalangan
            </button>
          </div>

          {/* Card Donasi */}
          <div
            className="w-full p-6 rounded-lg shadow-lg md:w-[48%] flex flex-col items-center justify-between h-[220px]"
            style={{ backgroundColor: '#D3E3FF' }}>
            <h3 className="text-2xl font-bold text-center text-blue-900">
              Donasikan Sebagian Harta Anda
            </h3>
            <button
              className="flex items-center justify-center mt-4 font-medium text-white bg-blue-900 rounded-full hover:bg-blue-800"
              style={{
                width: '142px',
                height: '36px',
                fontSize: '14px',
              }}>
              Donasi
            </button>
          </div>
        </div>
      </section>

      {/* Section: Tim Kami */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">Tim Kami</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
              <div className="w-[120px] h-[160px] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🖼️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Lorem</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
              <div className="w-[120px] h-[160px] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🖼️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Lorem</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
              <div className="w-[120px] h-[160px] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🖼️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Lorem</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
              <div className="w-[120px] h-[160px] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🖼️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Lorem</p>
            </div>
            {/* Card 5 */}
            <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
              <div className="w-[120px] h-[160px] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🖼️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Lorem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-white" style={{ backgroundColor: '#5E84C5' }}>
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Explore Section */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:underline">Beranda</a></li>
              <li><a href="#" className="text-white hover:underline">Tentang kami</a></li>
              <li><a href="#" className="text-white hover:underline">Donasikan</a></li>
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

export default TentangKami;


