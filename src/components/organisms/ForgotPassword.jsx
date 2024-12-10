import { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Judul from "../atoms/login-register/Judul";
import { useAuth } from "../../config/auth.js";

const ForgotPassword = () => {
  const { sendPasswordResetEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email tidak boleh kosong.");
      return;
    }

    setIsLoading(true);

    try {
      await sendPasswordResetEmail(email);
      setMessage("Instruksi reset password telah dikirim ke email Anda.");
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      setError("Terjadi kesalahan. Pastikan email sudah benar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md p-8 rounded-lg">
          <Judul />
          <h1 className="flex justify-center text-2xl md:text-4xl font-bold text-[#5E84C5]">
            Lupa Password
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormField
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="Masukan Email"
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            {message && (
              <p className="text-green-500 text-sm text-center">{message}</p>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full py-2 text-white bg-[#5E84C5] hover:bg-[#4A6F98] rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Mengirim..." : "Kirim Instruksi"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
