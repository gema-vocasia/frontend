import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowRightStartOnRectangleIcon, UserPlusIcon, UserIcon, SpeakerWaveIcon, DocumentTextIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const navigation = [
  { name: 'Beranda', to: '/', current: false },
  { name: 'Tentang Kami', to: '/tentang-kami', current: false },
  { name: 'Donasikan', to: '/all-campaign', current: false },
  { name: 'Lisensi', to: '/lisensi-gambar', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isLoggedIn] = useState(true);
  const navigate = useNavigate();
  
  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            {/* tombol menu tampilan layar kecil (mobile)*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#5E84C5] hover:bg-[#5E84C5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo"
                src={logo}
                className="h-12 w-auto"
              />
            </div>

            {/* Menu navigasi, hanya tampil di layar besar */}
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-[#5E84C5]' : 'text-black hover:text-[#5E84C5]',
                      'rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
           
          {/* Profile dropdown */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isLoggedIn ? (
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
                    className="flex items-center px-4 py-2 text-sm text-black data-[focus]:bg-gray-200 data-[focus]:outline-none"
                  >
                    <UserIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
                    Profil
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/kampanye-saya"
                    className="flex items-center px-4 py-2 text-sm text-black data-[focus]:bg-gray-200 data-[focus]:outline-none"
                  >
                    <SpeakerWaveIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
                    Kampanye Saya
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/riwayat-donasi"
                    className="flex items-center px-4 py-2 text-sm text-black data-[focus]:bg-gray-200 data-[focus]:outline-none"
                  >
                    <DocumentTextIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
                    Riwayat Donasi
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-sm text-black data-[focus]:bg-gray-200 data-[focus]:outline-none"
                  >
                    <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-3 text-[#5E84C5]" />
                    Keluar
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : ( 
            <div className="hidden sm:flex space-x-4">
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center rounded-lg bg-[#5E84C5] px-4 py-2 text-white hover:bg-[#476BA6] shadow-xl"
                >
                  <ArrowRightStartOnRectangleIcon className="mr-2 h-5 w-5" />
                  Masuk
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="flex items-center rounded-lg bg-[#5E84C5] px-4 py-2 text-white hover:bg-[#476BA6] shadow-xl"
                >
                  <UserPlusIcon className="mr-2 h-5 w-5" />
                  Daftar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Panel navigasi yang hanya tampil di layar kecil (mobile) */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-[#5E84C5]' : 'text-black hover:text-[#5E84C5]',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {!isLoggedIn && (
            <DisclosureButton
              as="a"
              to="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:text-[#5E84C5]"
            >
              Masuk
            </DisclosureButton>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;