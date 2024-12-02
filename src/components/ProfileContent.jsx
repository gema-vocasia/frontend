import PropTypes from 'prop-types';
import { Bars3Icon, EnvelopeIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const ProfileContent = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Button side bar */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 p-2 bg-[#5E84C5] rounded-md shadow hover:bg-[#4B6CA0] transition duration-300 focus:outline-none lg:hidden">
        <Bars3Icon className="w-7 h-7 text-white" />
      </button>

      {/* Profile section */}
      <div className="flex flex-col items-center w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="bg-[#5E84C5] p-6 rounded-lg shadow-lg w-full flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-200 transition-transform duration-300 transform hover:scale-105"
          />
          <h1 className="text-3xl font-semibold text-white mt-4 mb-8">
            Lavender
          </h1>
        </div>

        <div className="w-full">
          <div className="flex items-center p-4 rounded-lg border-2 border-[#5E84C5] mb-4">
            <EnvelopeIcon className="w-6 h-6 text-[#5E84C5] mr-4" />
            <span className="text-gray-800 text-lg">lavender@gmail.com</span>
          </div>
          <div className="flex items-center p-4 rounded-lg border-2 border-[#5E84C5] mb-4">
            <PhoneIcon className="w-6 h-6 text-[#5E84C5] mr-4" />
            <span className="text-gray-800 text-lg">+628511223345</span>
          </div>
          <div className="flex items-center p-4 rounded-lg border-2 border-[#5E84C5]">
            <LockClosedIcon className="w-6 h-6 text-[#5E84C5] mr-4" />
            <span className="text-gray-800 text-lg">*********</span>
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
