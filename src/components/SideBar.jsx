import PropTypes from 'prop-types';
import { HomeIcon, DocumentTextIcon, PencilIcon, XMarkIcon, ArrowRightEndOnRectangleIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 h-screen bg-[#5E84C5] text-white p-6 transition-transform duration-300 z-50 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 lg:static lg:translate-x-0`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 text-white focus:outline-none lg:hidden hover:text-blue-950">
        <XMarkIcon className="w-7 h-7" />
      </button>

      <ul className="mt-12 space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-950">
            <HomeIcon className="w-5 h-5" />
            <span>Beranda</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-950">
            <DocumentTextIcon className="w-5 h-5" />
            <span>Riwayat Donasi</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-950">
            <SpeakerWaveIcon className="w-5 h-5" />
            <span>Campaign Saya</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-950">
            <PencilIcon className="w-5 h-5" />
            <span>Edit Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-950">
            <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
            <span>Keluar</span>
          </a>
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
