import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#5E84C5] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Jelajahi</h3>
          <ul className="space-y-2">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/tentang-kami">Tentang Kami</Link></li>
            <li><Link to="/all-campaign">Donasikan</Link></li>
            <li><Link to="/lisensi-gambar">Lisensi</Link></li>
          </ul>
        </div>
        
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Hubungi Kami</h3>
          <p>GEMA Foundation</p>
          <p>Jl. Kebaikan No.45</p>
          <p className="mb-2">Kota Berbagi, Indonesia</p>
          <p className="mb-2">info@donasigema.com</p>
          <p className="mb-2">(+62) 812-3456-7890</p>
        </div>
        
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">Ikuti Kami</h3>
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <FaInstagram size={24} className="text-white" />
              <span className="text-white">@donasi.gema</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebook size={24} className="text-white" />
              <span className="text-white">Donasi Gema</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTiktok size={24} className="text-white" />
              <span className="text-white">@donasi.gema</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center py-4 bg-white text-black">
        © 2024 GEMA - Gerakan Empati dan Kebaikan
      </div>
    </footer>
  );
};

export default Footer;
 
