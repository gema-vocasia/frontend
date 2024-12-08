import { Link, useLocation } from "react-router-dom";

function LinkDaftarMasuk() {
  const location = useLocation();

  // Pengkondisian berdasarkan URL
  const isOnRegistrationPage = location.pathname.toLowerCase() === "/register";

  return (
    <p className="text-center text-sm text-gray-600">
      {isOnRegistrationPage ? (
        <>
          Sudah punya akun,{" "}
          <Link to="/login">
            <span className="text-[#5E84C5] hover:underline">Masuk disini</span>
          </Link>
          .
        </>
      ) : (
        <>
          Belum punya akun,{" "}
          <Link to="/register">
            <span className="text-[#5E84C5] hover:underline">
              Daftar disini
            </span>
          </Link>
          .
        </>
      )}
    </p>
  );
}

export default LinkDaftarMasuk;
