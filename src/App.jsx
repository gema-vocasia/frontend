import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Logo */}
      <div className="flex-1 bg-[#5E84C5] hidden sm:flex justify-center items-center">
        <img
          src="img/gambar1.png"
          alt="Logo"
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Form Login */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-8 space-y-4 ">
          <h1 className="text-4xl font-bold text-center text-[#5E84C5]">
            GEMA
          </h1>
          <p className="text-sm text-center text-gray-500">
            Gerakan Empati dan Kebaikan
          </p>

          <form className="mt-6 space-y-4">
            {/* Input Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
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
                type="password"
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
