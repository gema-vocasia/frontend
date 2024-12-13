import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const categoryStore = create((set) => ({
  category: [
    {
        "_id": "675871348a20f72572d483ad",
        "title": "Sosial",
        "description": "Kategori untuk kegiatan sosial"
    },
    {
        "_id": "675871348a20f72572d483ae",
        "title": "Kesehatan",
        "description": "Kategori untuk kesehatan"
    },
    {
        "_id": "675871348a20f72572d483af",
        "title": "Bencana Alam",
        "description": "Kategori untuk bencana alam"
    },
    {
        "_id": "675871348a20f72572d483b0",
        "title": "Pendidikan",
        "description": "Kategori untuk pendidikan"
    },
    {
        "_id": "675871348a20f72572d483b1",
        "title": "Lingkungan",
        "description": "Kategori untuk lingkungan"
    },
  ],

  getCategories: async () => {
    try {
      const res = await api.get("/api/v1/categories");
      console.log(res.data);
      set({ category: res.data.categories });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default categoryStore;