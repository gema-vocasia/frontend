import {  EnvelopeIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const ProfileContent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-2xl bg-white m-6 p-6 rounded-lg shadow-lg">
        <div className="bg-[#5E84C5] p-6 rounded-lg shadow-lg w-full flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-200"
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
          <div className="flex items-center p-4 rounded-lg border-2 border-[#5E84C5] mb-6">
            <LockClosedIcon className="w-6 h-6 text-[#5E84C5] mr-4" />
            <span className="text-gray-800 text-lg">*********</span>
          </div>
        </div>

        <button
          className="w-2/3 h-12 bg-[#5E84C5] text-white rounded-lg hover:bg-[#4B6CA0]
          transform hover:scale-105 transition duration-300 mt-6 text-lg font-semibold"
          onClick={() => navigate('/edit-profile')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
