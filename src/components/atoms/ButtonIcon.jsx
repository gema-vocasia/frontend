import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ text, icon, to }) => {
  const navigate = useNavigate();

  return (
    <MenuItem>
      <button
        onClick={() => navigate(to)}
        className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
      >
        {icon}
        <span className="ml-2">{text}</span>
      </button>
    </MenuItem>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export const LoginRegisterButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center rounded-lg bg-[#5E84C5] px-4 py-2 text-white shadow-xl hover:bg-[#476BA6] focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:ring-offset-2">
        Selamat Datang
      </MenuButton>
      <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <ActionButton
          text="Masuk"
          icon={
            <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-[#5E84C5]" />
          }
          to="/login"
        />
        <ActionButton
          text="Daftar"
          icon={<UserPlusIcon className="h-5 w-5 text-[#5E84C5]" />}
          to="/register"
        />
      </MenuItems>
    </Menu>
  );
};
