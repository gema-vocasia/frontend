import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const TentangKami = () => {
  const location = useLocation();

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
            "Kami percaya bahwa setiap kontribusi, sekecil apa pun itu, memiliki potensi besar untuk menciptakan perubahan. Dengan transparansi, keamanan, dan kemudahan dalam proses donasi, kami mengajak Anda untuk menjadi bagian dari perubahan positif ini, baik untuk orang-orang yang membutuhkan maupun untuk bumi yang kita cintai."
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
            "Menjaga transparansi dan kepercayaan dalam setiap donasi yang diberikan."
          ]}
          imageSrc={missionImage}
        />
      </div>

      <div data-aos="zoom-in">
        <TeamSection
          team={[
            { id: 1, name: 'Sarah Aulia', position: 'Founder & Executive Director', image: 'https://i.pravatar.cc/300?img=11' },
            { id: 2, name: 'Budi Prasetyo', position: 'Marketing Director', image: 'https://i.pravatar.cc/300?img=12' },
            { id: 3, name: 'Cynthia Lestari', position: 'Program Manager', image: 'https://i.pravatar.cc/300?img=13' },
            { id: 4, name: 'Dian Putra', position: 'Communications Lead', image: 'https://i.pravatar.cc/300?img=14' },
            { id: 5, name: 'Eka Pramudya', position: 'Operations Manager', image: 'https://i.pravatar.cc/300?img=15' },
          ]}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default TentangKami;
