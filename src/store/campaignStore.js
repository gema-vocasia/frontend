import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const campaignStore = create((set) => ({
  campaign: [],
  campaignByUserId: [],
  campaignById: null,

  // Get All Campaigns
  getCampaigns: async () => {
    try {
      const res = await api.get("/campaigns");
      console.log("Data Kampanye:", res.data);
      set({ campaign: res.data });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  },

  // Get Campaign By User ID
  getCampaignByUserId: async (userId) => {
    try {
      const res = await api.get(`/campaigns/user/${userId}`);
      set({ campaignByUserId: res.data });
    } catch (error) {
      console.error(`Error fetching campaigns for user ${userId}:`, error);
    }
  },

  // Get Campaign By ID
  getCampaignById: async (campaignId) => {
    try {
      const res = await api.get(`/campaign/${campaignId}`);
      set({ campaignById: res.data });
      return res.data;
    } catch (error) {
      console.error(`Error fetching campaign with ID ${campaignId}:`, error);
      throw error;
    }
  },
}));

export default campaignStore;
