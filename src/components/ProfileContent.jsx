import PropTypes from 'prop-types';
import { Bars3Icon, EnvelopeIcon, PhoneIcon, IdentificationIcon, LockClosedIcon } from '@heroicons/react/24/solid';


const ProfileContent = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 p-2 bg-[#5E84C5] rounded-md shadow hover:bg-blue-950 focus:outline-none lg:hidden"
      >
        <Bars3Icon className="w-7 h-7 text-white"/>
      </button>

      <div className="flex flex-col items-center justify-center bg-[#5E84C5] p-8 rounded-lg shadow-xl w-full max-w-xl">
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-white"
            />
          </div>
        </div>

        <h1 className="text-3xl font-semibold text-white text-center">Lavender</h1>
        <div className="mt-12 space-y-4 border border-white p-4 rounded-lg w-full">
          <div className="flex items-center space-x-4 p-2 ml-4">
            <EnvelopeIcon className="w-5 h-5 text-white" />
            <span className="text-white">lavender@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 p-2 ml-4">
            <PhoneIcon className="w-5 h-5 text-white" />
            <span className="text-white">+628511223345</span>
          </div>
          <div className="flex items-center space-x-4 p-2 ml-4">
            <IdentificationIcon className="w-5 h-5 text-white" />
            <span className="text-white">2200123456789000</span>
          </div>
          <div className="flex items-center space-x-4 p-2 ml-4">
            <LockClosedIcon className="w-5 h-5 text-white" />
            <span className="text-white">*********</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileContent.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default ProfileContent;
