import { create } from "zustand";
import { axiosInstance } from "./axiosInstance";
import { saveAccessToken, removeAccessToken } from "../utils/tokenManager";

export const useAuth = create((set) => ({
  user: null,

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
