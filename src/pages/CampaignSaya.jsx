import logo from "../assets/logo.jpg";
import banjirmedan from "../assets/img/BanjirMedan.png";
import RumahBaca from "../assets/img/BantuRumahBaca.png";
import kesehatan from "../assets/img/KesehatanDua.png";
import hero from "../assets/img/hero.png";

import { Link } from "react-router-dom";

function CampaignSaya() {
  const donasi = [
    {
      id: 1,

      kampanye: "Bantuan Pendidikan Anak",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Pendidikan",
      TargetDonasi: "Rp 500.000.000",
      danamasuk: "Rp 500.000",
      status: "sukses",
      pesan: "Semoga bermanfaat untuk pendidikan anak-anak.",
      gambar: RumahBaca, // Path gambar
    },
    {
      id: 2,

      kampanye: "Bantuan Pendidikan Anak",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Bencana Alam",
      TargetDonasi: "Rp 500.000.000.",
      danamasuk: "Rp 500.000",
      status: "pending",
      pesan: "Semoga amal ini menjadi berkah.",
      gambar: kesehatan, // Path gambar
    },
    {
      id: 3,

      kampanye: "Bantuan Pendidikan Anak",
      tanggalmulai: "2024-12-01",
      tanggalberakhir: "2025-05-05",
      jam: "23.59",
      kategori: "Kesehatan",
      TargetDonasi: "Rp 500.000.000",
      danamasuk: "Rp 500.000",
      status: "sukses",
      pesan: "Doa terbaik untuk korban bencana.",
      gambar: banjirmedan, // Path gambar
    },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full p-4 bg-white border-b border-gray-300">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
            <nav className="flex gap-5">
              <Link
                to="/"
                className="text-lg font-medium text-black hover:underline"
              >
                Beranda
              </Link>
              <Link
                to="/tentang-kami"
                className="text-lg font-medium text-black hover:underline"
              >
                Tentang Kami
              </Link>
              <Link
                to="/all-kampanye"
                className="text-lg font-medium text-black hover:underline"
              >
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

      <section className="relative w-full h-[400px] mt-[70px]">
        <img
          src={hero}
          alt="Hero"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8 bg-black bg-opacity-50">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold sm:text-5xl text-center text-white">
            Campaign Saya
          </h1>
        </div>
      </section>

      {/* Halaman Riwayat */}
      <main className="pt-20 pb-10 px-4">
        <div className=" max-6xl gap-5 mx-auto space-y-6">
          {donasi.length === 0 ? (
            <p className="text-center text-gray-500">
              Belum ada riwayat donasi.
            </p>
          ) : (
            donasi.map((item) => (
              <div
                key={item.id}
                className="flex items-start max-[720px]:flex-col max-[720px]:items-center p-4 bg-white shadow-md rounded-md border border-gray-300 gap-4"
              >
                {/* Gambar */}
                <div className="flex-shrink-0 ">
                  <img
                    src={item.gambar}
                    alt={item.kampanye}
                    className="w-96 h-96 object-cover rounded"
                  />
                </div>

                {/* Detail Donasi */}
                <div className="flex-1 p-1">
                  <h2 className="text-3xl font-semibold text-gray-800 pb-3">
                    {item.kampanye}
                  </h2>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">
                      Tanggal Mulai - Tanggal Berakhir :{" "}
                    </span>{" "}
                    {item.tanggalmulai} - {item.tanggalberakhir} --{" "}
                    <b> {item.jam} WIB</b>
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Kategori :</span>{" "}
                    {item.kategori}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Target Donasi :</span>{" "}
                    {item.TargetDonasi}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Donasi Masuk :</span>{" "}
                    {item.danamasuk}
                  </p>
                  {/* Status */}
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">Status :</span>{" "}
                    <span
                      className={`font-semibold ${
                        item.status === "sukses"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </p>
                  {/* Pesan */}
                  <p className=" font-medium text-lg text-gray-800 ">
                    Deskripsi :{" "}
                    <span className=" italic">
                      <p>
                        Saat ini, ribuan anak di Indonesia terancam kehilangan
                        akses pendidikan yang layak akibat keterbatasan biaya.
                        Mereka adalah generasi penerus bangsa yang penuh
                        semangat dan harapan, tetapi terkendala oleh kondisi
                        ekonomi.Kami mengajak Anda untuk ikut berkontribusi
                        dalam Gerakan Peduli Pendidikan dengan target
                        penggalangan dana sebesar Rp500 juta dalam waktu 5 hari.
                        Dana yang terkumpul akan digunakan untuk: 1.Membiayai
                        kebutuhan pendidikan seperti buku, seragam, dan alat
                        tulis. 2.Memberikan beasiswa kepada siswa-siswa
                        berprestasi dari keluarga kurang mampu. 3. Mendukung
                        akses digital seperti perangkat belajar dan koneksi
                        internet.{" "}
                      </p>
                      <p>
                        Setiap donasi Anda, sekecil apa pun, akan menjadi
                        langkah besar untuk masa depan mereka. Mari bersama kita
                        wujudkan impian mereka untuk terus belajar dan
                        berkembang.
                      </p>
                      <p>
                        Ayo donasi sekarang dan jadilah bagian dari perubahan!
                      </p>
                      <p>
                        Bantu sebarkan informasi ini agar lebih banyak orang
                        dapat tergerak untuk membantu.
                      </p>
                      <p>
                        Setiap anak berhak bermimpi, dan Anda bisa menjadi
                        alasan mereka untuk mewujudkannya.
                      </p>
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <footer
        className="w-full text-white mt-10"
        style={{ backgroundColor: "#5E84C5" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Explore Section */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Tentang kami
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Donasikan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
            <p>GEMA Foundation</p>
            <p>Jl. Kebaikan No.45, Kota Berbagi, Indonesia 12345</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@donasigema.com"
                className="text-white hover:underline"
              >
                info@donasigema.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+6281234567890"
                className="text-white hover:underline"
              >
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
                  className="flex items-center text-white hover:underline"
                >
                  <img
                    src="https://img.icons8.com/color/20/instagram-new.png"
                    alt="Instagram"
                    className="mr-2"
                  />
                  @donasi.gema
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/donasigema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  <img
                    src="https://img.icons8.com/color/20/facebook.png"
                    alt="Facebook"
                    className="mr-2"
                  />
                  Donasi Gema
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@donasi.gema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  <img
                    src="https://img.icons8.com/color/20/tiktok.png"
                    alt="TikTok"
                    className="mr-2"
                  />
                  @donasi.gema
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-4 bg-white">
          <p className="text-sm text-center" style={{ color: "#5E84C5" }}>
            © 2024 GEMA. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default CampaignSaya;
