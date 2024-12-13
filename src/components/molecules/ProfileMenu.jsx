import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  UserIcon,
  SpeakerWaveIcon,
  DocumentTextIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ProfileMenu = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:ring-offset-2 focus:ring-offset-white">
          <span className="absolute -inset-1.5" />
          <img
            alt="User Profile"
            src="https://via.placeholder.com/150"
            className="size-12 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-black"
          >
            <UserIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
            Profil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/kampanye-saya"
            className="flex items-center px-4 py-2 text-sm text-black"
          >
            <SpeakerWaveIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
            Kampanye Saya
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/riwayat-donasi"
            className="flex items-center px-4 py-2 text-sm text-black"
          >
            <DocumentTextIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
            Riwayat Donasi
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/login"
            className="flex items-center px-4 py-2 text-sm text-black"
          >
            <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
            Keluar
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  ) : null;

ProfileMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProfileMenu;
