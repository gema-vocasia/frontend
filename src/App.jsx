import { BrowserRouter, Routes, Route } from "react-router-dom";

import sketsa from "./img/gambar1.png";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Bagian Kiri */}
      <div className="flex-1 bg-[#5E84C5] hidden lg:flex justify-center items:center ">
        <div className="flex items-center justify-center">
          <img
            src={sketsa}
            alt="Logo"
            // className="sm:h-auto sm:w-[200px] md:-auto md:w-[250px] lg:h-auto lg:w-[350px] "
            className="h-2/3 w-2/3 items-center justify-center"
          />
        </div>
      </div>

      {/* Form Login */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-8 space-y-4 ">
          <h1 className="text-4xl font-bold text-center text-[#5E84C5] mb-5">
            GEMA
          </h1>
          <p className="text-xl text-center text-gray-500">
            Gerakan Empati dan Kebaikan
          </p>

          <form className=" space-y-4">
            <div>
              <form action="">
                <label htmlFor="email">
                  <span className="block font-medium  text-gray-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="Masukkan email.."
                    className="px-3 py-2 border shadow rounded w-full block text-md placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#5E84C5] focus:border-[#5E84C5]invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                  />
                  <p className="text-sm0 m-1 text-pink-700 invisible peer-invalid:visible">
                    Email Tidak Valid
                  </p>
                </label>
              </form>
            </div>

            {/* Input Kata Sandi */}
            <div>
              <label htmlFor="password">
                <span className="block font-medium  text-gray-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mb-2">
                  Kata Sandi
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                  className="px-3 py-2 border shadow rounded w-full block text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5E84C5] focus:border-[#5E84C5]"
                />
              </label>
            </div>

            {/* Tombol Masuk */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#5E84C5] text-white py-2 px-4 rounded-md hover:bg-[#5E84C5] transition"
              >
                Masuk
              </button>
            </div>
          </form>

          {/* Link Daftar */}
          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <a href="#!" className="text-[#5E84C5] hover:underline">
              Daftar disini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
