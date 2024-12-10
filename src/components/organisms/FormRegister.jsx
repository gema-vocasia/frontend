import { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Left from "../atoms/login-register/Left";
import LinkDaftarMasuk from "../atoms/login-register/LinkDaftarMasuk.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/auth.js";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

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
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.message);
      setErrors({ general: "Email atau password salah." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <Left />
      <div className="flex-1 flex flex-col items-center justify-center p-8 w-full">
        <div className="w-full max-w-md p-8 rounded-lg ">
          <h1 className="flex justify-center text-2xl md:text-4xl font-bold text-[#5E84C5]">
            REGISTRASI
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <FormField
              label="Nama"
              type="text"
              name="name"
              value={name}
              placeholder="Masukan Nama"
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
            <FormField
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="Masukan Email"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <FormField
              label="Nomor Telepon"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Masukan Nomor Telepone"
              onChange={(e) => setphoneNumber(e.target.value)}
              error={errors.phoneNumber}
            />
            <div className="relative">
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
                className="absolute right-3 top-10 text-gray-500"
              ></button>
            </div>

            {errors.general && (
              <p className="text-red-500 text-sm text-center">
                {errors.general}
              </p>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full py-2 text-white bg-[#5E84C5] hover:bg-[#4A6F98] rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sedang Masuk..." : "Masuk"}
              </Button>
            </div>
          </form>
          <LinkDaftarMasuk />
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
