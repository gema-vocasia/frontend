import { useState, useEffect } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Left from "../atoms/login-register/Left";
import LinkDaftarMasuk from "../atoms/login-register/LinkDaftarMasuk.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/auth.js";
import "aos/dist/aos.css";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const FormRegistrasi = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Nama tidak boleh kosong.";
    }

    if (!email) {
      newErrors.email = "Email tidak boleh kosong.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Nomor telepon tidak boleh kosong.";
    } else if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Nomor telepon hanya boleh berisi angka.";
    }

    if (!password) {
      newErrors.password = "Password tidak boleh kosong.";
    } else if (password.length < 6) {
      newErrors.password = "Password harus minimal 6 karakter.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const user = await register({
        name,
        email,
        phoneNumber,
        password,
      });

      console.log("Registered user:", user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.message);
      toast.error(error.message || "Registrasi gagal. Silakan coba lagi.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen md:flex-row">
      <ToastContainer />
      <Left />
      <div
        className="flex flex-col items-center justify-center flex-1 w-full p-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full max-w-md p-8 rounded-lg">
          <h1
            className="flex justify-center text-2xl md:text-4xl font-bold text-[#5E84C5]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            REGISTRASI
          </h1>
          <form className="space-y-4" onSubmit={handleRegistration}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <FormField
                label="Nama"
                type="text"
                name="name"
                value={name}
                placeholder="Masukan Nama"
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
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
              data-aos-delay="600"
            >
              <FormField
                label="Nomor Telepon"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Masukan Nomor Telepon"
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={errors.phoneNumber}
              />
            </div>

            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <FormField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="Masukan Password"
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-500 right-3 top-10"
              ></button>
            </div>

            {errors.general && (
              <p
                className="text-sm text-center text-red-500"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {errors.general}
              </p>
            )}

            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <Button
                type="submit"
                className="w-full py-2 text-white bg-[#5E84C5] hover:bg-[#4A6F98] rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sedang Mendaftar..." : "Daftar"}
              </Button>
            </div>
          </form>

          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
          >
            <LinkDaftarMasuk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegistrasi;

