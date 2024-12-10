import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const categoryStore = create((set) => ({
  category: [
    {
      createdAt: "2024-11-28T08:00:00.000Z",
      deletedAt: null,
      description: "Bantuan untuk Korban Kebakaran dan Infrastruktur",
      isDeleted: false,
      title: "Korban Kebakaran",
      updatedAt: "2024-11-28T08:00:00.000Z",
      __v: 0,
      _id: "6749a627f2a718270b6cff16",
    },
    {
      createdAt: "2024-11-30T14:00:00.000Z",
      deletedAt: null,
      description:
        "Bantuan untuk Pembangunan Sekolah Dasar di Daerah Terpencil",
      isDeleted: false,
      title: "Bantuan Sekolah",
      updatedAt: "2024-11-30T14:00:00.000Z",
      __v: 0,
      _id: "6749a627f2a718270b6cff17",
    },
    {
      createdAt: "2024-12-01T10:30:00.000Z",
      deletedAt: null,
      description:
        "Dana untuk Kebutuhan Logam Dasar dan Makanan untuk Korban Bencana",
      isDeleted: false,
      title: "Dana Logam Dasar",
      updatedAt: "2024-12-01T10:30:00.000Z",
      __v: 0,
      _id: "6749a627f2a718270b6cff18",
    },
    {
      createdAt: "2024-12-03T11:15:00.000Z",
      deletedAt: null,
      description: "Bantuan Untuk Korban Gempa dan Banjir di Wilayah Timur",
      isDeleted: false,
      title: "Gempa dan Banjir",
      updatedAt: "2024-12-03T11:15:00.000Z",
      __v: 0,
      _id: "6749a627f2a718270b6cff19",
    },
    {
      createdAt: "2024-12-04T09:45:00.000Z",
      deletedAt: null,
      description:
        "Bantuan untuk Kebutuhan Medik dan Tempat Relokasi Sementara",
      isDeleted: false,
      title: "Bantuan Medis dan Relokasi",
      updatedAt: "2024-12-04T09:45:00.000Z",
      __v: 0,
      _id: "6749a627f2a718270b6cff20",
    },
  ],
  // Get All Categories
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
