import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

export const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await api.get("/user/profile");
      set({ user: data, isLoading: false });
      return data;
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
      set({ error: error.response?.data?.message || "Something went wrong", isLoading: false });
      throw error;
    }
  },

  updateUser: async (updatedData) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await api.put("/user/profile", updatedData);
      set({ user: data, isLoading: false });
      return data;
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error);
      set({ error: error.response?.data?.message || "Something went wrong", isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await api.post("/user/logout");
      set({ user: null, isLoading: false });
    } catch (error) {
      console.error("Error logging out:", error.response?.data || error);
      set({ error: error.response?.data?.message || "Something went wrong", isLoading: false }); 
      throw error;
    }
  },

  clearUser: () => {
    set({ user: null, error: null });
  },
}));
