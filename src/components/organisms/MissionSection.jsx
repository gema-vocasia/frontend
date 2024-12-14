import React from 'react';
import PropTypes from 'prop-types';

const MissionSection = ({ missions, imageSrc }) => (
  <section className="py-16 bg-gray-100">
    <div className="container grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Tujuan Kami</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Tujuan utama kami adalah untuk menghubungkan orang-orang yang ingin membantu
          dengan mereka yang membutuhkan dukungan. Kami ingin menciptakan sebuah platform
          yang memudahkan setiap orang untuk memberikan donasi dengan cara yang aman
          dan transparan. Kami percaya bahwa dengan membangun komunitas yang peduli, kita bisa
          memberikan dampak positif yang besar bagi kehidupan orang-orang yang kurang beruntung.
        </p>

        {/* Bagian Misi */}
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Misi Kami</h2>
        <ul className="pl-5 text-lg leading-relaxed text-gray-600 list-decimal">
          {missions.length > 0 ? (
            missions.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))
          ) : (
            <>
              <li>Mempermudah akses donasi bagi siapa saja.</li>
              <li>
                Memberikan bantuan bagi yang membutuhkan di bidang ekonomi, kesehatan, dan pendidikan.
              </li>
              <li>Mendukung upaya pelestarian lingkungan.</li>
              <li>
                Menjaga transparansi dan kepercayaan dalam setiap donasi yang diberikan.
              </li>
            </>
          )}
        </ul>
      </div>

      {imageSrc && (
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt="Ilustrasi Misi"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  </section>
);

MissionSection.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.string), // Array misi dalam bentuk string
  imageSrc: PropTypes.string, // URL gambar opsional
};

MissionSection.defaultProps = {
  missions: [
    "Mempermudah akses donasi bagi siapa saja.",
    "Memberikan bantuan bagi yang membutuhkan di bidang ekonomi, kesehatan, dan pendidikan.",
    "Mendukung upaya pelestarian lingkungan.",
    "Menjaga transparansi dan kepercayaan dalam setiap donasi yang diberikan."
  ],
  imageSrc: '', 
};

export default MissionSection;
