import { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Judul from "../atoms/login-register/Judul";
import Left from "../atoms/login-register/Left";
import LinkDaftarMasuk from "../atoms/login-register/LinkDaftarMasuk.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/auth.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email tidak boleh kosong.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!password) {
      newErrors.password = "Password tidak boleh kosong.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const user = await login(email, password);
      console.log("Logged in user:", user);
      setLoginAttempts(0);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      console.error("Login error message:", error.message);

      if (error.message === "User Not Verified") {
        toast.error("Email belum diverifikasi, silakan cek email Anda", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (error.message === "Wrong Email or Password") {
        toast.error("Password atau email yang Anda masukkan salah!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Terjadi kesalahan, silakan coba lagi.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setLoginAttempts((prev) => prev + 1);
      if (loginAttempts + 1 >= 3) {
        navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      <ToastContainer />
      <Left />
      <div
        className="flex flex-col items-center justify-center flex-1 p-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div
          className="w-full max-w-md p-8 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Judul />
          <h1
            className="text-xl md:text-3xl font-bold text-[#5E84C5] text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            SELAMAT DATANG KEMBALI!
          </h1>
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <FormField
                label="Email"
                type="email"
                name="email"
                value={email}
                placeholder="Masukan Email"
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="flex items-center justify-between mb-1">
                <label
                  id="pass"
                  htmlFor="password"
                  className="block text-black"
                >
                  Password
                </label>
                <a
                  href={`/forgot-password?email=${encodeURIComponent(email)}`}
                  className="text-sm text-[#5E84C5] hover:underline"
                >
                  Lupa Password?
                </a>
              </div>
              <FormField
                label=""
                type="password"
                name="password"
                value={password}
                placeholder="Masukan Password"
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
            </div>

            {errors.general && (
              <p
                className="text-sm text-center text-red-500"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
              >
                {errors.general}
              </p>
            )}

            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              <Button
                type="submit"
                className="w-full py-2 text-white bg-[#5E84C5] hover:bg-[#4A6F98] rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sedang Masuk..." : "Masuk"}
              </Button>
            </div>
          </form>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            <LinkDaftarMasuk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
