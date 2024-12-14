import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const initialState = {
  campaigns: [],
  currentCampaign: null,
  error: null,
  isLoading: false,
};

const campaignStore = create((set) => ({
  campaign: [],
  campaignByUserId: [],
  campaignById: null,
  ...initialState,

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

  // Membuat kampanye baru
  createCampaign: async (campaignData) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.post("/campaign", campaignData);

      set((state) => ({
        campaigns: [...state.campaigns, response],
        error: null,
      }));

      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Gagal membuat kampanye";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  reset: (fields = []) => {
    if (fields.length === 0) {
      set(initialState);
    } else {
      set((currentState) => {
        const updatedState = { ...currentState };
        fields.forEach((field) => {
          updatedState[field] = initialState[field];
        });
        return updatedState;
      });
    }
  },
}));

export default campaignStore;
