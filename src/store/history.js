import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

export const useHistory = create((set) => ({
  riwayat: [],

  getHistory: async () => {
    try {
      const response = await api.get("/donations/user");
      console.log("Response data:", response.data);

      console.log("Fetched history:", response);
      const formateHistory = response.data.map((history) => ({
        _id: history._id,
        name: history.name,
        campaignId: history.campaignId,
        amount: history.amount,
        comment: history.comment,
        donateDate: history.donateDate,
        statusPayment: history.statusPayment,
        snapToken: history.snapToken,
        isDone: history.isDone,
      }));
      console.log("Formatted history:", formateHistory);

      set({ riwayat: formateHistory });
      return formateHistory;
    } catch (error) {
      console.error(
        "Error fetching history:",
        error.response?.data || error.message
      );
      throw error;
    }
  },
}));
