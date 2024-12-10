import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const campaignStore = create((set, get) => ({
  campaigns: [],

  // Create Campaign
  createCampaign: async (title, description, targetAmount, categoryId, photo, statusCampaign, startDate, endDate ) => {
    try {
      const data = await api.post("/api/v1/campaign", {
        title,
        description,
        targetAmount,
        categoryId,
        photo,
        statusCampaign,
        startDate,
        endDate,
      });

      get().getCampaigns();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  // Get All Campaigns
  getCampaigns: async () => {
    try {
      const res = await api.get("/api/v1/campaigns");
      set({ campaigns: res.data });
    } catch (error) {
      console.error(error);
    }
  },

  // Mark Campaign as Featured (Example: Highlight or Approve Campaign)
  markFeaturedCampaignById: async (_id) => {
    try {
      const res = await api.patch(`/api/campaigns/${_id}/featured`);
      get().getCampaigns();
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  // Delete Campaign
  deleteCampaign: async (_id) => {
    try {
      const res = await api.delete(`/api/campaigns/${_id}`);
      get().getCampaigns();
      return res;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default campaignStore;
