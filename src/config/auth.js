import { create } from "zustand";
import { axiosInstance } from "./axiosInstance";
import { saveAccessToken, removeAccessToken } from "../utils/tokenManager";

export const useAuth = create((set, get) => ({
  user: null,

  initialize: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        set({ user: parsedUser });
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem("user");
        set({ user: null });
      }
    }
  },

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

      // Cek status verifikasi dari response
      if (!data.data.user.verified) {
        // Pastikan melempar error dengan pesan spesifik
        throw new Error("Email belum diverifikasi");
      }

      saveAccessToken(data.data.token);
      const userData = data.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
      return userData;
    } catch (error) {
      // Tangani error dengan spesifik
      if (error.response) {
        // Error dari server
        if (error.response.data.message === "NOT_VERIFIED") {
          throw new Error("Email belum diverifikasi");
        }
        throw new Error(error.response.data.message || "Login gagal");
      } else if (error.message === "Email belum diverifikasi") {
        throw error;
      } else {
        throw new Error("Login gagal. Silakan coba lagi.");
      }
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
      const response = await axiosInstance.get("/user/profile");
      const userData = response.data; // Pastikan ini sesuai struktur response

      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
      return userData;
    } catch (error) {
      console.error("Failed to refresh user:", error.response?.data || error);

      // Jika gagal (misal token invalid), logout
      if (error.response?.status === 401) {
        get().logout(); // Panggil method logout
      }

      throw error;
    }
  },
}));
