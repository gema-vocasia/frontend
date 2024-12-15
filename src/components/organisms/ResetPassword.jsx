import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const resetString = params.get("resetString");
    const email = params.get("email");

    if (resetString && email) {
      localStorage.setItem("resetString", resetString);
      localStorage.setItem("email", email);
      window.history.replaceState(null, "", location.pathname);
      setIsLinkValid(true);
    } else {
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

    if (newPassword.length < 8) {
      setMessage("Password minimal 8 karakter.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/v1/user/verifyreset",
        {
          email: email,
          resetString: resetString,
          newPassword: newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
      setMessage(
        error.response?.data?.error ||
          "Gagal mengatur ulang password. Coba lagi."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        {isLinkValid ? (
          <form onSubmit={handleResetPassword} className="space-y-4">
            {/* Password Baru */}
            <div className="relative">
              <label htmlFor="newPassword" className="block text-md mb-1">
                Password Baru
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {showNewPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Konfirmasi Password */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-md mb-1">
                Konfirmasi Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Pesan Error */}
            {message && <p className="text-red-500 text-sm">{message}</p>}

            {/* Tombol Submit */}
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
