import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import BackButton from "../components/atoms/BackButton";
import Button from "../components/atoms/Button";
import CampaignDetailContent from "../components/organisms/CampaignDetailContent";
import CampaignDonorSection from "../components/organisms/CampaignDonorSection";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SedekahPangan from '../assets/images/SedekahPangan.png';
import Santunan from '../assets/images/Santunan.png';
import SedekahMakanan from '../assets/images/SedekahMakanan.png';
import KesehatanSatu from '../assets/images/KesehatanSatu.png';
import KesehatanDua from '../assets/images/KesehatanDua.png';
import KesehatanKetiga from '../assets/images/KesehatanKetiga.png';
import Lewatobi from '../assets/images/Lewatobi.jpg';
import BanjirMedan from '../assets/images/BanjirMedan.png';
import GunungLewotobi from '../assets/images/GunungLewotobi.png';
import PerlengkapanSekolah from '../assets/images/PerlengkapanSekolah.png';
import RelawanMengajar from '../assets/images/RelawanMengajar.png';
import BantuRumahBaca from '../assets/images/BantuRumahBaca.png';
import mangrove from '../assets/images/mangrove.png';
import MenanamPohon from '../assets/images/MenanamPohon.jpg';
import PengelolaanSampah from '../assets/images/PengelolaanSampah.png';


const CampaignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showDonors, setShowDonors] = useState(false);


  useEffect(() => {
    const campaigns = [
      {
        id: 1,
        name: "Sedekah Pangan Tuntaskan Kelaparan",
        progress: 10,
        goal: 65000000,
        collected: 6500000,
        startDate: "02 November 2024",
        endDate: "31 Desember 2024",
        fundraiser: "Call To Action Indonesia",
        description: "Program Sedekah Pangan Tuntaskan Kelaparan bertujuan untuk membantu meringankan beban saudara-saudara kita yang terdampak kekurangan pangan, terutama di daerah-daerah yang masih kesulitan dalam mengakses kebutuhan dasar. Melalui donasi ini, setiap sumbangan yang Anda berikan akan digunakan untuk menyediakan makanan bergizi bagi mereka yang membutuhkan. Dengan bergabung dalam program ini, Anda ikut serta dalam upaya mengurangi angka kelaparan dan malnutrisi yang dialami oleh banyak keluarga, terutama anak-anak dan lansia yang rentan. Setiap donasi, sekecil apapun, sangat berarti dalam memberikan harapan dan keberlanjutan hidup bagi mereka yang terhimpit oleh kondisi sulit. Ayo, berbagi kebaikan untuk sesama, karena setiap piring makanan yang Anda bantu sediakan bisa membawa perubahan besar dalam hidup mereka. Bersama kita bisa membantu menuntaskan kelaparan dan mewujudkan Indonesia yang lebih sejahtera.",
        image: SedekahPangan,
        donors: [
          { 
            name: "Username", 
            amount: 1000000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga kampanye ini berhasil" 
          },
          { 
            name: "Naira", 
            amount: 500000, 
            avatar: "https://via.placeholder.com/50",
            message: "Dukung selalu untuk kebaikan." 
          }
        ]
      },
      {
        id: 2,
        name: "Santunan dan Doa bersama anak Yatim Akhir Tahun",
        progress: 3,
        goal: 2174000,
        collected: 71800000,
        startDate: "02 November 2024",
        endDate: "01 Desember 2024",
        fundraiser: "Yayasan Desa Hijau",
        "description": "Program Santunan dan Doa Bersama Anak Yatim Akhir Tahun bertujuan memberikan kebahagiaan dan dukungan bagi anak-anak yatim yang membutuhkan perhatian lebih di penghujung tahun. Melalui santunan ini, kami berharap dapat membantu meringankan beban mereka, sekaligus memberikan kebahagiaan dalam bentuk perhatian, kasih sayang, dan doa bersama. Dengan bergabung dalam program ini, Anda turut serta dalam memberikan kebahagiaan kepada anak-anak yatim dan doa agar mereka senantiasa diberi kekuatan, kebahagiaan, dan masa depan yang lebih baik. Mari bersama-sama menutup tahun ini dengan kebaikan dan kasih sayang untuk sesama.",
        image: Santunan,
        donors: [
          { 
            name: "Alice", 
            amount: 2000000, 
            avatar: "https://via.placeholder.com/50",
            message: "Anak-anak adalah masa depan kita, mari bantu mereka." 
          },
          { 
            name: "Gita", 
            amount: 1000000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga berkah" 
          }
        ]
      },
      {
        id: 3,
        name: "Sedekah Makanan Bergizi anak Papua",
        progress: 2,
        goal: 50000000,
        collected: 1155000,
        startDate: "28 Oktober 2024",
        endDate: "20 Februari 2024",
        fundraiser: "Rumah Zakat Jayapura",
        description: "Papua, dengan luas 319.000 km², kaya akan sumber daya alam seperti hutan, laut, minyak, dan tambang emas terbesar di dunia, yaitu Grasberg. Namun, meski kaya akan kekayaan alam, Papua masih menghadapi kemiskinan yang serius, dengan banyak provinsi termasuk dalam daftar provinsi termiskin di Indonesia. Akibat kemiskinan ini, gizi buruk menjadi ancaman besar bagi anak-anak di Papua, seperti yang terjadi di Asmat, Papua Selatan. Krisis ini dipengaruhi oleh faktor-faktor seperti pola konsumsi yang tidak sehat dan akses terbatas ke makanan bergizi. Rumah Zakat mengajak kita semua untuk berbagi sedekah makanan bergizi agar anak-anak Papua dapat terhindar dari ancaman gizi buruk dan hidup lebih sehat.",
        image: SedekahMakanan,
        donors: [
          { 
            name: "Charlie", 
            amount: 1500000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga sumbangan ini membawa berkah dan membantu anak-anak Papua mencapai kehidupan yang lebih baik." 
          },
          { 
            name: "Dave", 
            amount: 700000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga setiap langkahku selalu diberkahi dan diberikan kemudahan, serta bisa terus berbagi dengan sesama." 
          }
        ]
      },
      {
        id: 4,
        name: "DARURAT! Hidupnya Bergantung Kemo & Radioterapi!",
        progress: 77,
        goal: 139980000,
        collected: 108258028,
        startDate: "12 September 2024",
        endDate: "20 Desember 2024",
        fundraiser: "Tedy Kusniadi",
        description: "Ci Mewa Liem (42 tahun) berjuang melawan dua kanker mematikan setelah suaminya meninggal. Ia harus merawat tiga anaknya sambil melawan kanker payudara stadium akhir yang sudah menyebar ke payudara kanan dan tulang pinggang. Setelah menjalani 20 kali kemoterapi dan 25 kali radioterapi, kondisi ci Mewa semakin kritis. Dokter mengatakan pengobatan lanjutan sangat dibutuhkan, namun tabungannya telah habis. Mari kita bantu agar ia bisa melanjutkan perjuangannya untuk sembuh dan tetap bersama anak-anaknya.",
        image: KesehatanSatu,
        donors: [
          { 
            name: "Syifa", 
            amount: 150000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga membantu dan lekas sembuh" 
          },
          { 
            name: "Dian", 
            amount: 70000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga lekas sembuh" 
          }
        ]
      },
      {
        id: 5,
        name: "Tolong, Selamatkan Nyawa Balita Sakit Kronis!",
        progress: 97,
        goal: 157000000,
        collected: 152000000,
        startDate: "23 Agustus 2024",
        endDate: "05 November 2024",
        fundraiser: "Yayasan Ruang Sejahtera Umat",
        description: "Ratusan anak dari pelosok Indonesia menderita kanker dan penyakit kronis, terpaksa berobat ke Jakarta karena rumah sakit daerah tidak dapat menangani kondisi mereka. Mereka kesulitan biaya dan tempat tinggal, sering terpaksa tidur di lorong rumah sakit. Seperti Faqih yang menderita Down Syndrome, Xin Liew yang terbaring lemah akibat Down Syndrome dan VSD, serta Ettan yang menderita penyakit jantung. Orangtua mereka dengan penghasilan minim kesulitan untuk membiayai pengobatan. Kami mengajak Anda untuk membantu membangun rumah singgah bagi mereka. Setiap donasi akan memberi mereka harapan dan tempat tinggal yang layak selama berjuang melawan penyakit. Mari bersama-sama memberikan mereka kesempatan untuk sembuh.",
        image: KesehatanDua,
        donors: [
          { 
            name: "Salwa", 
            amount: 50000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga bermanfaat" 
          },
        ]
      },
      {
        id: 6,
        name: "Terancam Lumpuh Total, Asil Butuh Biaya Berobat!",
        progress: 2,
        goal: 91908000,
        collected: 2576000,
        startDate: "16 November 2024",
        endDate: "16 Desember 2024",
        fundraiser: "Yayasan Sahabat Ayah Sarah",
        description: "Ibu Susi menceritakan betapa sulitnya melihat Asil, putranya yang belum genap 2 tahun, menderita Epilepsi, Gerd, Cerebral Palsy, dan Microcephaly. Setiap hari, Asil sering kejang, muntah hebat, dan sulit bernapas, membuatnya harus dirawat inap berbulan-bulan. Setelah 10 tahun menanti kehadiran buah hati, Asil lahir prematur dengan kondisi fisik yang buruk. Meski dokter menyarankan untuk menggugurkan janin demi keselamatannya, Ibu Susi tetap mempertahankan kandungannya meski nyawa taruhannya. Namun, kondisi Asil tetap berat dengan banyak masalah kesehatan sejak lahir, termasuk kejang dan muntah yang terus berulang. Ibu Susi kini berjuang seorang diri untuk merawat Asil. Ia kesulitan membeli susu khusus dan obat-obatan yang sangat mahal, sementara penghasilannya sudah hilang setelah berpisah dengan suaminya. Asil membutuhkan bantuan kita agar bisa melanjutkan pengobatan dan mencegah kondisinya semakin parah.",
        image: KesehatanKetiga,
        donors: [
          { 
            name: "Syifa", 
            amount: 150000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga membantu dan lekas sembuh" 
          },
        ]
      },
      {
        id: 7,
        name: "Bantuan Warga Terdampak Erupsi Gunung Lewotobi",
        progress: 70,
        goal: 10000000,
        collected: 7000000,
        startDate: "19 November 2024",
        endDate: "08 Desember 2024",
        fundraiser: "Gema Foundation",
        description: "Malam Minggu, 3 November 2024, Gunung Lewotobi di Flores Timur, NTT, meletus, mengakibatkan kehancuran besar. Hingga 4 November 2024, tercatat 10 orang meninggal, 30 terluka, dan lebih dari 10.295 jiwa mengungsi. Desa Klatanlo dan Hokeng Jaya masih dalam proses evakuasi, sementara hujan abu dan kerusakan rumah melanda hingga 7 km dari puncak gunung.  Bantuan sangat dibutuhkan, termasuk makanan, air bersih, obat-obatan, pakaian, selimut, dan perlengkapan bayi. Posko pengungsian membutuhkan uluran tangan kita untuk memenuhi kebutuhan mendesak mereka. Mari bersama membantu saudara-saudara kita di Flores Timur dalam masa-masa sulit ini.",
        image: Lewatobi,
        donors: [
          { 
            name: "Indah", 
            amount: 200000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga semua selalu dalam lindungan dan segera pulih kembali" 
          },
          { 
            name: "Dian", 
            amount: 550000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga sehat, lancar rezeki, jodoh, dan dimudahkan segala urusan" 
          }
        ]
      },
      {
        id: 8,
        name: "Solidaritas untuk Korban Banjir Sumatera Utara",
        progress: 20,
        goal: 150000000,
        collected: 850000,
        startDate: "02 November 2024",
        endDate: "02 Desember 2024",
        fundraiser: "Aksi Peduli",
        description: "Banjir besar yang melanda Sumatera Utara sejak 26 November 2024 telah menggenangi ribuan rumah dan merusak lahan pertanian. Ribuan jiwa membutuhkan bantuan untuk kebutuhan dasar seperti sembako, makanan siap saji, pakaian, serta peralatan kebersihan. Melalui kampanye ini, kami mengajak Anda untuk berdonasi guna meringankan beban para korban dan memberikan harapan agar mereka dapat bangkit kembali. Setiap donasi Anda akan digunakan untuk menyediakan bantuan mendesak selama masa darurat ini.",
        image: BanjirMedan,
        donors: [
          { 
            name: "Rey", 
            amount: 250000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga berkah dan bermanfaat" 
          },
        ]
      },
      {
        id: 9,
        name: "Lewotobi Erupsi, Darurat Bantuan Obat dan Alat Kesehatan",
        progress: 80,
        goal: 100000000,
        collected: 80000000,
        startDate: "05 November 2024",
        endDate: "05 Desember 2024",
        fundraiser: "RSUD Labuang Baji",
        description: "Erupsi Gunung Lewotobi Laki-laki di Flores Timur, NTT, pada 3 November 2024, menyebabkan puluhan korban jiwa dan ribuan warga terpaksa mengungsi. Lebih dari 10.000 orang terdampak, dengan 869 pengungsi mengalami ISPA dan penyakit lainnya. Bantuan medis mendesak, terutama obat-obatan dan alat kesehatan, sangat dibutuhkan untuk menyelamatkan nyawa dan meringankan penderitaan mereka.",
        image: GunungLewotobi,
        donors: [
          { 
            name: "Vano", 
            amount: 350000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga bisa membantu" 
          },
          { 
            name: "Sekar", 
            amount: 90000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga kondisi lekas kondusif, semua masyarakat yang terdampak senantiasa dilindungi" 
          },
        ]
      },
      {
        id: 10,
        name: "Bantu Perlengkapan Sekolah Siswa Tak Mampu",
        progress: 9,
        goal: 14000000,
        collected: 1323000,
        startDate: "01 Desember 2024",
        endDate: "10 Desember 2024",
        fundraiser: "Yayasan Nurul Fahmi",
        description: "Lebih dari 5 juta anak di Indonesia hidup dalam kondisi kurang mampu dan banyak yang terhambat akses pendidikannya. Mereka sering kesulitan memenuhi kebutuhan dasar seperti perlengkapan sekolah. Program bantuan pendidikan ini bertujuan memberikan peluang yang setara bagi anak-anak agar dapat belajar dengan lebih baik. Setiap donasi yang Anda berikan adalah investasi bagi masa depan mereka, membuka akses pendidikan yang layak untuk generasi mendatang.",
        image: PerlengkapanSekolah,
        donors: [
          { 
            name: "Hanum", 
            amount: 50000, 
            avatar: "https://via.placeholder.com/50",
            message: "Semoga berkah" 
          },
        ]
      },
      {
        id: 11,
        name: "Bantuan Pendidikan untuk Relawan Mengajar",
        progress: 36,
        goal:  500000000,
        collected: 181004000,
        startDate: "01 September 2024",
        endDate: "01 Januari 2025",
        fundraiser: "Comma (Collaborative Muhammadiyah)",
        description: "Di daerah pelosok Indonesia, ribuan guru dan relawan mengajar dengan semangat tinggi meskipun menghadapi keterbatasan fasilitas dan dukungan. Program COMMA (Collaborative Muhammadiyah) hadir untuk memberikan pelatihan, fasilitas pengajaran, dan dukungan kesejahteraan bagi mereka. Bantuan Anda akan digunakan untuk menyediakan fasilitas pengajaran, pelatihan, dukungan kesejahteraan, fasilitas teknologi, dan asuransi jiwa bagi relawan. Target penggalangan dana sebesar Rp 500.000.000 untuk membantu lebih dari 50 guru di pelosok.",
        image: RelawanMengajar,
        donors: [
          { 
            name: "Fiona", 
            amount: 120000, 
            avatar: "https://via.placeholder.com/50",
            message: "Bismillah, semoga bermanfaat" 
          },
        ]
      },
      {
        id: 12,
        name: "1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua",
        progress: 30,
        goal: 100000000,
        collected: 30609556,
        startDate: "01 Oktober 2024",
        endDate: "31 Januari 2025",
        fundraiser: "Wahana Visi Indonesia",
        description: "Di Biak, Papua, rendahnya kemampuan literasi anak disebabkan oleh keterbatasan akses buku, kondisi ekonomi, serta kurangnya kapasitas orang dewasa dalam mendukung literasi anak. Program Wahana Literasi bertujuan meningkatkan keterampilan dasar siswa, seperti pengenalan huruf, kesadaran fonem, membaca lancar, kosakata, dan pemahaman membaca. Rumah Baca Nermnu akan dibangun dengan renovasi bangunan yang ada, dilengkapi dengan buku, alat peraga edukatif, materi digital, dan pelatihan untuk pengajar.",
        image: BantuRumahBaca,
        donors: [
          { 
            name: "Arbian", 
            amount: 85000, 
            avatar: "https://via.placeholder.com/50",
            message: "Bismillah, semoga bermanfaat" 
          },
        ]
      },
      {
        id: 13,
        name: "Bergerak Bersama! Tanam Mangrove Pesisir Indonesia",
        progress: 5,
        goal: 100000000,
        collected: 5000000,
        startDate: "29 November 2024",
        endDate: "25 Maret 2025",
        fundraiser: "Gema Foundation",
        description: "Indonesia memiliki lebih dari 92 spesies mangrove, yang menyumbang 23% dari total hutan mangrove di dunia. Namun, dalam tiga dekade terakhir, Indonesia telah kehilangan hampir 40% populasi mangrove-nya. Mangrove berfungsi sebagai benteng alam melawan bencana seperti abrasi, banjir, dan tsunami. Program konservasi mangrove bertujuan untuk menanam bibit baru, merawatnya, dan memberikan edukasi kepada masyarakat pesisir. Donasi Anda akan digunakan untuk pengadaan bibit, perawatan, dan edukasi masyarakat untuk menjaga kelestarian mangrove.",
        image: mangrove,
        donors: [
          { 
            name: "Afni", 
            amount: 85000, 
            avatar: "https://via.placeholder.com/50",
            message: "Bismillah, semoga bisa membantu" 
          },
        ]
      },
      {
        id: 14,
        name: "Hijaukan Kembali Bumi dengan Menanam Pohon",
        progress: 36,
        goal: 25000000,
        collected:  8970514,
        startDate: "14 November 2024",
        endDate: "18 Desember 2024",
        fundraiser: "Gema Foundation",
        description: "Setiap tahun, 3,5 hingga 7 miliar pohon ditebang di dunia, menyebabkan hilangnya penyerap karbon dan memperburuk perubahan iklim. Pohon-pohon ini bukan hanya penyedia oksigen, tapi juga penyeimbang alam yang melawan polusi dan penyakit. Indonesia, sebagai paru-paru dunia, kehilangan jutaan hektar hutan tropisnya. Pada 28 November, diperingati sebagai Hari Menanam Pohon Indonesia, untuk mengingatkan kita akan pentingnya menjaga alam. Filantra mengajak kita semua untuk bergerak bersama, menanam pohon, dan menyelamatkan bumi bagi generasi mendatang. Mari mulai dari langkah kecil, tanam pohon, dan hijaukan kembali Indonesia!",
        image: MenanamPohon,
        donors: [
          { 
            name: "Kevan", 
            amount: 100000, 
            avatar: "https://via.placeholder.com/50",
            message: "Bismillah, semoga saya lolos tes CPNS tahun ini" 
          },
        ]
      },
      {
        id: 15,
        name: "Mari Wujudkan Pengelolaan Sampah Berkelanjutan",
        progress: 66,
        goal: 15000000,
        collected:  10000000,
        startDate: "22 Oktober 2024",
        endDate: "20 Desember 2024",
        fundraiser: "Relawan Gesit",
        description: "Setiap hari, kita menghasilkan sampah yang berdampak besar pada lingkungan. Pengelolaan sampah yang tidak tepat dapat mencemari tanah, air, dan udara. Banyak daerah yang belum memiliki sistem pengelolaan sampah yang efektif. Program Bank Sampah adalah solusi untuk masalah ini. Namun, keberhasilan Bank Sampah sangat bergantung pada kesadaran dan partisipasi masyarakat, serta dukungan untuk edukasi tentang memilah dan mendaur ulang sampah.\n\nMelalui program Saling Jaga Bumi, kami mengajak Anda untuk mendukung gerakan ini dengan berdonasi. Donasi Anda akan digunakan untuk:\n- Mendirikan dan memperkuat Bank Sampah di berbagai komunitas.\n- Menyelenggarakan edukasi tentang pengelolaan sampah yang benar.\n- Mendukung inisiatif daur ulang dan pengurangan sampah plastik.\n- Menyediakan paket gizi bagi masyarakat yang terlibat aktif dalam kegiatan Bank Sampah.\n\nMari bersama-sama mewujudkan lingkungan yang lebih bersih dan sehat untuk generasi mendatang dengan mendukung pengelolaan sampah berkelanjutan.",
        image: PengelolaanSampah,
        donors: [
          { 
            name: "Karin", 
            amount: 100000, 
            avatar: "https://via.placeholder.com/50",
            message: "Bismillah, semoga berkah dan bermanfaat" 
          },
        ]
      },
    ];

    const selectedCampaign = campaigns.find(
      (campaign) => campaign.id === parseInt(id)
    );
    setCampaign(selectedCampaign || null);
  }, [id]);

  if (!campaign) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        Campaign not found
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
        <Navbar />
      <main className="bg-gray-100">
        <div className="absolute top-28 left-4 z-20 sm:left-4 md:left-8 lg:left-12">
            <BackButton onClick={() => navigate("/all-campaign")} />
        </div>

        {/* Konten Detail Kampanye */}
        <CampaignDetailContent
          campaign={campaign}
          showFullDescription={showFullDescription}
          toggleShowFullDescription={() =>
            setShowFullDescription(!showFullDescription)
          }
        />

        {/* Bagian Donatur */}
        <CampaignDonorSection
          donors={campaign.donors}
          showDonors={showDonors}
          toggleShowDonors={() => setShowDonors(!showDonors)}
        />

        {/* Tombol Donasi */}
        <div className="mt-8 mb-12 text-center">
        <Button onClick={() => navigate("/donasi")} className="w-2/6">
          Donasi Sekarang
        </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampaignDetail;
