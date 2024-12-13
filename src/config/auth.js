import { create } from "zustand";
import { axiosInstance } from "./axiosInstance";
import { saveAccessToken, removeAccessToken } from "../utils/tokenManager";

export const useAuth = create((set) => ({
  user: null,

  register: async (userData) => {
    try {
      const { name, email, phoneNumber, password } = userData;

      if (!name || !email || !phoneNumber || !password) {
        throw new Error("Semua field harus diisi");
      }

      const response = await axiosInstance.post("/user/register", {
        name,
        email,
        phoneNumber,
        password,
      });
      saveAccessToken(response.data.token);

      // Save user data to local storage
      const registeredUser = response.data.user;
      localStorage.setItem("user", JSON.stringify(registeredUser));

      // Update store state
      set({ user: registeredUser });

      return registeredUser;
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error);

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else if (error.response?.data?.errors) {
        const errorMessages = error.response.data.errors
          .map((err) => err.msg)
          .join(", ");
        throw new Error(errorMessages);
      } else {
        throw new Error("Registrasi gagal. Silakan coba lagi.");
      }
    }
  },

  login: async (email, password) => {
    try {
      const data = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      console.log("API Response:", data);
      saveAccessToken(data.data.token);
      const userData = data.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
      return userData;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error);
      throw new Error("Invalid email or password");
    }
  },

  logout: () => {
    removeAccessToken();
    localStorage.removeItem("user");
    set({ user: null });
  },

  // Optional: Add a method to refresh user data
  refreshUser: async () => {
    try {
      const data = await axiosInstance.get("/user/profile");
      const userData = data;
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
      return userData;
    } catch (error) {
      console.error("Failed to refresh user:", error.response?.data || error);
      throw error; // Optionally rethrow to handle in the calling component
    }
  },
}));
