import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackButton from '../components/atoms/BackButtonLicense';
import herohome from "../assets/images/herohome.png"; 
import cerita from "../assets/images/cerita.png";
import heroTK from "../assets/images/heroTK.png";
import whoweare from "../assets/images/whoweare.png";
import missionImage from "../assets/images/mission.png";
import campaign from "../assets/images/bg-foto-donasi.png";
import LoginRegiter from "../assets/images/LoginRegister.jpg";
import History from "../assets/images/History.jpg";
import ImageList from '../components/organisms/ImageList';
import Lightbox from '../components/molecules/Lightbox'; 

const allImages = [
  { id: 1, src: herohome, owner: "Ilustrasi Hari Anak Nasional (HAN) 2021. (Unsplash @larm)" },
  { id: 2, src: heroTK, owner: "https://www.pexels.com/id-id/foto/foto-anak-mengenakan-kemeja-turquoise-3292433/" },
  { id: 3, src: cerita, owner: "Ilustrasi amal (unsplash.com/Joel Muniz)" },
  { id: 4, src: campaign, owner: "nathan-dumlao-Xavq7lKj5j8-unsplash.jpg" },
  { id: 5, src: whoweare, owner: "Photo by Tetbirt Salim on Unsplash" },
  { id: 6, src: missionImage, owner: "LoveLetters" },
  { id: 7, src: LoginRegiter, owner: "https://www.freepik.com/free-photo/person-holding-jar-with-coins_11072242.htm#fromView=search&page=1&position=6&uuid=959fa3e7-a8c1-483c-bf3b-7660113e7011" },
  { id: 8, src: History, owner: "https://www.freepik.com/free-photo/bottom-view-women-protesting-outdoors_39425483.htm#fromView=search&page=1&position=8&uuid=98ebf8f3-e91d-42c5-a9b0-3774d79159a2" }
];

const ImageLicensePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <BackButton onClick={handleBackClick} className="mb-6" /> 

      <div
        className="relative flex items-center justify-center mb-6 text-center text-white"
        style={{
          backgroundImage: `url(${LoginRegiter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold tracking-tight" data-aos="fade-down">
          Daftar Lisensi Gambar
        </h1>
      </div>

      <div data-aos="fade-up">
        <ImageList images={allImages} onImageClick={openLightbox} />
      </div>

      <p className="mt-8 text-sm text-center text-gray-600" data-aos="fade-up">
        Gambar-gambar yang ditampilkan di atas merupakan aset yang kami gunakan dalam proyek ini. 
        Setiap gambar dilindungi oleh hak cipta pemiliknya masing-masing. 
        Kami menghargai dan berterima kasih kepada para kreator yang telah menyediakan gambar ini. 
        Mohon gunakan gambar-gambar ini secara bijak dan sesuai dengan ketentuan yang berlaku.
      </p>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </div>
  );
};

export default ImageLicensePage;
