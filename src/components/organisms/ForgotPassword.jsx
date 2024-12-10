import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
      handleSendEmail(emailParam);
    }
  }, [location]);

  const handleSendEmail = async (email) => {
    try {
      // Kirim request ke API backend untuk reset password
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/requestResetPassword",
        {
          email,
          redirectUrl: "http://localhost:5173/reset-password",
        }
      );

      const resetString = response.data.resetString;
      localStorage.setItem("resetString", resetString);

      // Jika berhasil
      setMessage("Email reset password telah dikirim. Silakan cek email Anda.");
    } catch (error) {
      console.error(
        "Error sending reset email:",
        error.response?.data?.error || error.message || "Unknown error"
      );
      setMessage("Gagal mengirim email. Pastikan email Anda benar.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Lupa Password</h1>
        {email ? (
          <p className="text-center mb-4">
            Kami telah mengirimkan email reset password ke:{" "}
            <strong>{email}</strong>
          </p>
        ) : (
          <p className="text-center text-red-500">
            Tidak ada email yang ditemukan. Silakan coba lagi.
          </p>
        )}
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
