import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/organisms/Navbar';
import HeroSection from '../components/molecules/HeroSection';
import AboutSection from '../components/organisms/AboutSection';
import MissionSection from '../components/organisms/MissionSection';
import TeamSection from '../components/organisms/TeamSection';
import heroImage from '../assets/images/heroTK.png';
import aboutImage from '../assets/images/whoweare.png';
import missionImage from '../assets/images/mission.png';
import Footer from '../components/organisms/Footer';
import Damar from '../assets/images/Damar.jpg';
import Rizal from '../assets/images/Rizal.jpg';
import Thoriq from '../assets/images/Thoriq.jpg';
import Azizah from '../assets/images/Azizah.jpg';
import Tri from '../assets/images/Tri.png';

const TentangKami = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Jalankan animasi hanya sekali
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div data-aos="fade-down">
        <HeroSection
          imageSrc={heroImage}
          title="Apa yang kami lakukan..."
          subtitle="Tentang Organisasi Kami"
        />
      </div>

      <div data-aos="fade-up">
        <AboutSection
          title="Siapa Kami?"
          description={[
            "Kami adalah sekelompok individu yang berkomitmen untuk menciptakan dampak positif di dunia. Kami menyadari bahwa banyak orang yang membutuhkan bantuan, baik dari segi ekonomi, kesehatan, maupun pendidikan. Selain itu, kami juga memandang pentingnya menjaga keberlanjutan bumi untuk generasi mendatang.",
            "Melalui platform donasi ini, kami ingin memberikan solusi nyata untuk membantu mereka yang membutuhkan. Kami juga berfokus pada keberlanjutan lingkungan dengan mendukung berbagai inisiatif yang bertujuan untuk melindungi planet ini.",
            "Kami percaya bahwa setiap kontribusi, sekecil apa pun itu, memiliki potensi besar untuk menciptakan perubahan. Dengan transparansi, keamanan, dan kemudahan dalam proses donasi, kami mengajak Anda untuk menjadi bagian dari perubahan positif ini, baik untuk orang-orang yang membutuhkan maupun untuk bumi yang kita cintai.",
          ]}
          imageSrc={aboutImage}
        />
      </div>

      <div data-aos="zoom-in">
        <MissionSection
          missions={[
            "Mempermudah akses donasi bagi siapa saja.",
            "Memberikan bantuan bagi yang membutuhkan di bidang ekonomi, kesehatan, dan pendidikan.",
            "Mendukung upaya pelestarian lingkungan.",
            "Menjaga transparansi dan kepercayaan dalam setiap donasi yang diberikan.",
          ]}
          imageSrc={missionImage}
        />
      </div>

      <div data-aos="zoom-in">
        <TeamSection
          team={[
            {
              id: 1,
              name: "Damar Adi Nugroho",
              position: "Backend & Project Manager",
              image: Damar,
            },
            {
              id: 2,
              name: "Rizal Wahyu Saputra",
              position: "Backend",
              image: Rizal,
            },
            {
              id: 3,
              name: "M. Thoriq Dzulfiqar",
              position: "Frontend",
              image: Thoriq,
            },
            {
              id: 4,
              name: "Azizah Pauziah",
              position: "Frontend",
              image: Azizah,
            },
            {
              id: 5,
              name: "Tri Mulyani",
              position: "Frontend",
              image: Tri,
            },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

export default TentangKami;
