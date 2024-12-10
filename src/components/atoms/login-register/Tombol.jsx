import { useLocation } from "react-router-dom";

function Tombol() {
  const location = useLocation();

  // Pengkondisian berdasarkan URL
  const isOnLoginPage = location.pathname.toLowerCase() === "/login";

  return (
    <div>
      <button
        type="submit"
        className="w-full bg-[#5E84C5] text-white py-2 px-4 rounded-md hover:bg-[#5E84C5] transition"
      >
        {isOnLoginPage ? "Masuk" : "Daftar"}
      </button>
    </div>
  );
}

export default Tombol;
