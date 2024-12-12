import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const campaignStore = create((set) => ({
  campaign: [],
  campaignByUserId: [],
  // Get All Campaigns
  getCampaigns: async () => {
    try {
      const res = await api.get("/api/v1/campaigns");
      set({ campaign: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  // Get Campaign By User ID
  getCampaignByUserId: async () => {

    try {
      const res = await api.get(`/api/v1/campaigns/user/`);
      set({ campaignByUserId: res.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default campaignStore;
