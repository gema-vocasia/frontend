// donation.js
import { create } from "zustand";
import { axiosInstance } from "./axiosInstance";

export const donation = create((set) => ({
  donation: null,

  create: async (campaignId, data) => {
    try {
      const { name, amount, comment } = data;

      if (!name || !amount) {
        throw new Error("Nama dan jumlah donasi diperlukan");
      }

      const response = await axiosInstance.post(
        `/donation/${campaignId}`,
        { name, amount, comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Pastikan untuk menangani berbagai kemungkinan struktur data
      const createDonation = response.data.donation || {
        snapToken: response.data.snapToken,
      };

      if (!createDonation.snapToken) {
        throw new Error("snapToken tidak ditemukan dalam respons");
      }

      // Simpan di localStorage jika diperlukan
      localStorage.setItem("donation", JSON.stringify(createDonation));

      // Update state
      set({ donation: createDonation });

      return createDonation;
    } catch (error) {
      console.error("Donation creation failed:", error.response?.data || error);
      throw new Error(error.response?.data?.message || "Gagal membuat donasi");
    }
  },
}));
