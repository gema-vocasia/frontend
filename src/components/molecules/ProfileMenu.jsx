import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../config/auth";
import { useEffect, useState } from "react";
import { axiosInstance as api } from "../../config/axiosInstance.js";

const ProfileMenu = ({ isLoggedIn }) => {
  const [userData, setUserData] = useState({});
  const { logout } = useAuth();
  const Navigate = useNavigate();

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get("/user/profile");
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  const buttonLogOut = () => {
    logout();
    Navigate("/login");
  };

  return isLoggedIn ? (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:ring-offset-2 focus:ring-offset-white">
          <span className="absolute -inset-1.5" />
          <img
            alt="User Profile"
            src={`http://localhost:8080/api/v1/files/${userData?.photo_url}`}
            className="size-12 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none">
        <MenuItem>
          {({ active }) => (
            <Link
              to="/profile"
              className={`${
                active ? "bg-gray-100" : ""
              } flex items-center px-4 py-2 text-sm text-black`}
            >
              <UserIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
              Profil
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <Link
              to="/kampanye-saya"
              className={`${
                active ? "bg-gray-100" : ""
              } flex items-center px-4 py-2 text-sm text-black`}
            >
              <SpeakerWaveIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
              Kampanye Saya
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <Link
              to="/buat-campaign"
              className={`${
                active ? "bg-gray-100" : ""
              } flex items-center px-4 py-2 text-sm text-black`}
            >
              <DocumentPlusIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
              Buat Kampanye
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <Link
              to="/riwayat-donasi"
              className={`${
                active ? "bg-gray-100" : ""
              } flex items-center px-4 py-2 text-sm text-black`}
            >
              <DocumentTextIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
              Riwayat Donasi
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <button
              onClick={buttonLogOut}
              className={`${
                active ? "bg-gray-100" : ""
              } flex items-center w-full px-4 py-2 text-sm text-black`}
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
              Keluar
            </button>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  ) : null;
};

ProfileMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProfileMenu;
