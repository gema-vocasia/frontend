// import { useState } from "react";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex">
        {/* Logo */}
        <div className="flex-1 bg-[#5E84C5] hidden sm:flex justify-center items-center">
          <img
            src="img/gambar1.png"
            alt="Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Form Register*/}
        <div className="flex-1 flex justify-center items-center bg-white">
          <div className="w-full max-w-md p-8 space-y-4 ">
            <h1 className="text-4xl font-bold text-center text-[#5E84C5] mb-10">
              DAFTAR AKUN
            </h1>

            <form className="mt-6 space-y-4">
              {/* Input Nama Lengkap */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  id="nama"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                  placeholder="Masukkan Nama Lengkap"
                  required
                />
              </div>

              {/* Input Alamat Email*/}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alamat Email
                </label>
                <input
                  id="email"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                  placeholder="Masukkan alamat email"
                  required
                />
              </div>

              {/* Input No Telepon */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor Telepon
                </label>
                <input
                  id="contact"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                  placeholder="Masukkan Nomor Telepon"
                  required
                />
              </div>

              {/* Input NO KTP*/}
              <div>
                <label
                  htmlFor="ktp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alamat Email
                </label>
                <input
                  id="ktp"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                  placeholder="Masukkan alamat email"
                  required
                />
              </div>

              {/* Input Kata Sandi */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <input
                  id="password"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                  placeholder="Masukkan kata sandi"
                  required
                />
              </div>

              {/* Tombol Masuk */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#5E84C5] text-white py-2 px-4 rounded-md hover:bg-[#5E84C5] transition"
                >
                  DAFTAR
                </button>
              </div>
            </form>

            {/* Link Daftar */}
            <p className="text-center text-sm text-gray-600">
              Sudah punya akun?{" "}
              <a href="#!" className="text-[#5E84C5] hover:underline">
                Login disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// function ProfilePicture() {
//   return (
//     <>
//       <h1 className="text-2xl mb-4 text-center font-bold">
//         WELLCOME IN GEMA WEBSITE
//       </h1>
//       <div
//         className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-5"
//         aria-label="Profile Picture"
//       ></div>
//     </>
//   );
// }

// function FormRegistrasi() {
//   return (
//     <>
//       <form className="space-y-3">
//         <div className="text-left">
//           <label
//             htmlFor="full-name"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Nama Lengkap
//           </label>
//           <input
//             type="text"
//             id="full-name"
//             name="full-name"
//             placeholder="Nama Lengkap"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>

//         <div className="text-left">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
//           />
//         </div>

//         <div className="text-left">
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             No Telepon
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             placeholder="No Telepon"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
//           />
//         </div>

//         <div className="text-left">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
//           />
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:opacity-90"
//           >
//             Sign Up
//           </button>
//         </div>
//         <p className="text-center">
//           Already Have An Account ?
//           <a href="#" className="text-blue-500">
//             Login
//           </a>
//         </p>
//       </form>
//     </>
//   );
// }

export default App;
