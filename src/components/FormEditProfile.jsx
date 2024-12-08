import { CameraIcon } from '@heroicons/react/24/solid';

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
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-black mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Alamat Email"
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-black mb-1">Nomor Telepon</label>
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Password Baru"
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-60 h-12 bg-[#5E84C5] text-white rounded-xl hover:bg-[#4B6CA0]
              transform hover:scale-105 transition duration-300 mt-6 text-lg font-semibold"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProfile;