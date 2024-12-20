import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const categoryStore = create((set) => ({
  categories: [],

  // Get All Categories
  getCategories: async () => {
    try {
      const res = await api.get("/categories");
      console.log(res.data);
      set({ categories: res.data.categories || [] });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },
}));

export default categoryStore;
