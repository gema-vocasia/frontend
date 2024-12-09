import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { CameraIcon } from "@heroicons/react/24/solid";

const FormEditProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-semibold text-black">Edit Profile</h1>
        </div>
        <form className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-32 h-32 rounded-full shadow-lg border-4 border-[#5E84C5]"
              />
              <label className="absolute bottom-0 right-0 p-2 rounded-full shadow cursor-pointer bg-[#5E84C5] text-white hover:text-[#5E84C5] hover:bg-white border-2 border-[#5E84C5]
              transition-transform duration-300 transform hover:scale-105">
                <CameraIcon className="w-5 h-5" />
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
          <FormField label="Nama" type="text" placeholder="Nama Lengkap" />
          <FormField label="Email" type="email" placeholder="Alamat Email" />
          <FormField label="Nomor Telepon" type="tel" placeholder="Nomor Telepon" />
          <FormField label="Password" type="password" placeholder="Password Baru" />
          <div className="flex justify-center">
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProfile;
