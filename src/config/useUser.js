import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

export const useUsersPosts = create((set) => ({
  user: null,

  fetchUser: async () => {
    try {
      const data = await api.get("/user/profile");
      set({ user: data }); // Directly use data from interceptor
      return data;
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
      throw error; // Rethrow to allow error handling in the calling component
    }
  },

  updateUser: async (updatedData) => {
    try {
      const data = await api.put("/user/profile", updatedData);
      set({ user: data });
      return data;
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error);
      throw error;
    }
  },

  // Optional: Add a method to clear user data
  clearUser: () => {
    set({ user: null });
  },
}));
