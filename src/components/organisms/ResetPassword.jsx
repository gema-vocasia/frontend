import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log("location :", params.toString());
    const resetString = params.get("resetString");
    console.log("string :", resetString.toString());
    const email = params.get("email");

    if (resetString && email) {
      // Simpan data ke localStorage
      localStorage.setItem("resetString", resetString);
      localStorage.setItem("email", email);

      // Hapus parameter dari URL
      window.history.replaceState(null, "", location.pathname);

      // Set isLinkValid menjadi true
      setIsLinkValid(true);
    } else {
      // Cek apakah ada data yang valid di localStorage
      const storedResetString = localStorage.getItem("resetString");
      const storedEmail = localStorage.getItem("email");

      if (storedResetString && storedEmail) {
        setIsLinkValid(true);
      } else {
        setMessage("Link reset tidak valid atau telah kadaluarsa.");
        setIsLinkValid(false);
      }
    }
  }, [location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const resetString = localStorage.getItem("resetString");
    const email = localStorage.getItem("email");

    if (!isLinkValid || !resetString || !email) {
      setMessage("Link reset tidak valid atau telah kadaluarsa.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Password konfirmasi tidak cocok.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/verifyreset",
        {
          email,
          resetString,
          newPassword,
        }
      );

      console.log("Response data:", response.data);

      // Hapus data dari localStorage
      localStorage.removeItem("resetString");
      localStorage.removeItem("email");

      setMessage(
        "Password berhasil diperbarui. Anda akan diarahkan ke halaman login."
      );
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      console.error(
        "Error resetting password:",
        error.response?.data?.error || error.message
      );
      setMessage("Gagal mengatur ulang password. Coba lagi.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        {isLinkValid ? (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label htmlFor="newPassword" className="block text-md mb-1">
                Password Baru
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-md mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {message && <p className="text-red-500 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
            >
              Reset Password
            </button>
          </form>
        ) : (
          <div className="text-center text-red-500">
            {message || "Link reset tidak valid."}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
