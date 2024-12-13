import ProfileCard from "../molecules/ProfileCard";
import {EnvelopeIcon, LockClosedIcon, PhoneIcon} from "@heroicons/react/24/solid";
import Button from "../atoms/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAccessToken} from "../../utils/tokenManager.js";
import {axiosInstance as api} from "../../config/axiosInstance.js";

const ProfileContent = () => {
  const [userData, setUserData] = useState({});
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    setAccessToken(getAccessToken());
  }, [])

  async function fetchCurrentUser() {
    try {
      const data = await api.get("/user/profile");
      setUserData(data.data); // Directly use data from interceptor
      console.log(data.data);
      return data;
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
      throw error; // Rethrow to allow error handling in the calling component
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [accessToken]);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-2xl p-6 m-6 bg-white rounded-lg shadow-lg">
        <div className="bg-[#5E84C5] p-6 rounded-lg shadow-lg w-full flex flex-col items-center mb-8">
          <img
            src={`http://localhost:8080/api/v1/files/${userData?.photo_url}`}
            alt="Profile"
            className="w-40 h-40 border-4 border-gray-200 rounded-full shadow-lg"
          />
          <h1 className="mt-4 mb-8 text-3xl font-semibold text-white">{userData?.name}</h1>
        </div>
        <div className="w-full">
          <ProfileCard
            icon={<EnvelopeIcon className="w-6 h-6 text-[#5E84C5] mr-4"/>}
            text={`${userData?.email}`}
          />
          <div className="mb-4"/>
          {/* Spacer */}
          <ProfileCard
            icon={<PhoneIcon className="w-6 h-6 text-[#5E84C5] mr-4"/>}
            text={`${userData?.phoneNumber}`}
          />
          <div className="mb-4"/>
          {/* Spacer */}
          <ProfileCard
            icon={<LockClosedIcon className="w-6 h-6 text-[#5E84C5] mr-4"/>}
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
