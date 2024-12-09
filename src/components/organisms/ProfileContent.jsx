import ProfileCard from "../molecules/ProfileCard";
import { EnvelopeIcon, PhoneIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

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
          <h1 className="text-3xl font-semibold text-white mt-4 mb-8">Lavender</h1>
        </div>
        <div className="w-full">
          <ProfileCard 
            icon={<EnvelopeIcon className="w-6 h-6 text-[#5E84C5] mr-4" />} 
            text="lavender@gmail.com" 
          />
          <div className="mb-4" /> {/* Spacer */}
          <ProfileCard 
            icon={<PhoneIcon className="w-6 h-6 text-[#5E84C5] mr-4" />} 
            text="+628511223345" 
          />
          <div className="mb-4" /> {/* Spacer */}
          <ProfileCard 
            icon={<LockClosedIcon className="w-6 h-6 text-[#5E84C5] mr-4" />} 
            text="*********" 
          />
        </div>
        <Button onClick={() => navigate("/edit-profile")} className="w-2/3 mt-6">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileContent;
