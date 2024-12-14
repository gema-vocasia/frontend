import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import BackButton from '../components/atoms/BackButtonLicense'; 

import herohome from "../assets/images/herohome.png"; 
import cerita from "../assets/images/cerita.png";
import heroTK from "../assets/images/heroTK.png";
import whoweare from "../assets/images/whoweare.png";
import missionImage from "../assets/images/mission.png";
import campaign from "../assets/images/bg-foto-donasi.png";
import LoginRegiter from "../assets/images/LoginRegister.jpg";

import ImageList from '../components/organisms/ImageList';

const allImages = [
  { id: 1, src: herohome, owner: "Ilustrasi Hari Anak Nasional (HAN) 2021. (Unsplash @larm)" },
  { id: 2, src: heroTK, owner: "https://www.pexels.com/id-id/foto/foto-anak-mengenakan-kemeja-turquoise-3292433/" },
  { id: 3, src: cerita, owner: "Ilustrasi amal (unsplash.com/Joel Muniz)" },
  { id: 4, src: campaign, owner: "nathan-dumlao-Xavq7lKj5j8-unsplash.jpg" },
  { id: 5, src: whoweare, owner: "Photo by Tetbirt Salim on Unsplash" },
  { id: 6, src: missionImage, owner: "LoveLetters" },
  { id: 7, src: LoginRegiter, owner: "https://www.freepik.com/free-photo/person-holding-jar-with-coins_11072242.htm#fromView=search&page=1&position=6&uuid=959fa3e7-a8c1-483c-bf3b-7660113e7011" }
];

const ImageLicensePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // If using React Router

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page (if using React Router)
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <BackButton onClick={handleBackClick} className="mb-6" /> {/* Using BackButton component */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-center text-gray-900">Daftar Lisensi Gambar</h1>
      <ImageList images={allImages} onImageClick={openLightbox} />
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeLightbox}>
          <img src={selectedImage.src} alt="Selected" className="max-w-3xl max-h-3xl" />
        </div>
      )}
    </div>
  );
};

export default ImageLicensePage;
