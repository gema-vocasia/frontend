import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const donationStore = create((set) => ({
  donationByUserId: [], // Menyimpan donations berdasarkan user ID
  donationByCampaignId: [], // Menyimpan donations berdasarkan campaign ID

  // Mendapatkan donations berdasarkan User ID
  getDonationsByUserId: async (userId) => {
    try {
      const res = await api.get(`/donations/user/${userId}`);
      console.log(res.data);
      set({ donationsByUserId: res.data.donations }); // Menyimpan donations berdasarkan userId
    } catch (error) {
      console.error(error);
    }
  },

  // Mendapatkan donations berdasarkan Campaign ID
  getDonationsByCampaignId: async (campaignId) => {
    try {
      const res = await api.get(`/donations/${campaignId}`);

      // Filter data agar statusPayment !== "Pending"
      const filteredDonations = res.data.filter(
        (donation) => donation.statusPayment !== "Pending"
      );

      console.log(filteredDonations);
      set({ donationByCampaignId: filteredDonations });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default donationStore;
