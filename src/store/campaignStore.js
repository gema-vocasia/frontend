import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const initialState = {
  campaigns: [],
  currentCampaign: null,
  error: null,
  isLoading: false,
};

export const useCampaignStore = create((set) => ({
  ...initialState,

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
      const errorMessage = error.response?.data?.message || "Gagal membuat kampanye";
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
