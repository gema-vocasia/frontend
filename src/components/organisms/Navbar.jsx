import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../atoms/Logo";
import MenuLink from "../molecules/MenuLink.";
import ProfileMenu from "../molecules/ProfileMenu";
import { LoginRegisterButton } from "../atoms/ButtonIcon";
import { useAuth } from "../../config/auth";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Beranda", to: "/" },
  { name: "Tentang Kami", to: "/tentang-kami" },
  { name: "Donasikan", to: "/all-campaign" },
  { name: "FAQ", to: "/faq" },
];

const Navbar = () => {
  const { user, refreshUser } = useAuth();
  const isLoggedIn = !!user;

  useEffect(() => {
    if (user) {
      refreshUser().catch(() => {});
    }
  }, []);
  const location = useLocation();
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: location.pathname === item.to,
  }));

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#5E84C5] hover:bg-[#5E84C5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {updatedNavigation.map((item) => (
                  <MenuLink
                    key={item.name}
                    to={item.to}
                    name={item.name}
                    current={item.current}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isLoggedIn ? (
              <ProfileMenu isLoggedIn={isLoggedIn} />
            ) : (
              <div className="hidden sm:flex space-x-4">
                <LoginRegisterButton />
              </div>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={`${
                item.current
                  ? "text-[#5E84C5]"
                  : "text-black hover:text-[#5E84C5]"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              {item.name}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              to="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-[#5E84C5]"
            >
              Masuk
            </Link>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
