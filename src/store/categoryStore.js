import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const categoryStore = create((set, get) => ({
  categories: [],

  // Create Category
  createCategory: async (name, description) => {
    try {
      const data = await api.post("/api/v1/category", {
        name,
        description,
      });

      get().getCategories();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  // Get All Categories
  getCategories: async () => {
    try {
      const res = await api.get("/api/v1/categories");
      set({ categories: res.data });
    } catch (error) {
      console.error(error);
    }
  },

  // Update Category
  updateCategory: async (_id, name, description) => {
    try {
      const res = await api.patch(`/api/v1/category/${_id}`, {
        name,
        description,
      });

      get().getCategories();
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  // Delete Category
  deleteCategory: async (_id) => {
    try {
      const res = await api.delete(`/api/v1/category/${_id}`);
      get().getCategories();
      return res;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default categoryStore;
