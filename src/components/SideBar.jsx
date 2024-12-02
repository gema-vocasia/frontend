import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {HomeIcon, DocumentTextIcon, PencilIcon, XMarkIcon, ArrowRightEndOnRectangleIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 h-screen bg-[#5E84C5] text-white p-6 transition-transform duration-300 z-50 shadow-lg ${
                isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 lg:static lg:translate-x-0`}
      style={{boxShadow: '4px 0 15px rgba(0, 0, 0, 0.4)'}}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 text-white focus:outline-none lg:hidden hover:text-blue-950">
        <XMarkIcon className="w-7 h-7" />
      </button>

      {/* Navigasi menu */}
      <ul className="mt-12 space-y-4">
        <li>
          <Link
            to="/beranda"
            className="flex items-center space-x-2 hover:text-blue-950 transition-transform duration-200"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Beranda</span>
          </Link>
        </li>
        <li>
          <Link
            to="/riwayat-donasi"
            className="flex items-center space-x-2 hover:text-blue-950 transition-transform duration-200"
          >
            <DocumentTextIcon className="w-5 h-5" />
            <span>Riwayat Donasi</span>
          </Link>
        </li>
        <li>
          <Link
            to="/campaign-saya"
            className="flex items-center space-x-2 hover:text-blue-950 transition-transform duration-200"
          >
            <SpeakerWaveIcon className="w-5 h-5" />
            <span>Campaign Saya</span>
          </Link>
        </li>
        <li>
          <Link
            to="/edit-profile"
            className="flex items-center space-x-2 hover:text-blue-950 transition-transform duration-200"
          >
            <PencilIcon className="w-5 h-5" />
            <span>Edit Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/keluar"
            className="flex items-center space-x-2 hover:text-blue-950 transition-transform duration-200"
          >
            <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
            <span>Keluar</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
