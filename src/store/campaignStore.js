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
  getCampaigns: async (isHome) => {
    try {
      const res = await api.get(`/campaigns?isHome=${isHome}`);
      console.log("Data Kampanye:", res.data);
      set({ campaign: res.data });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  },

  // Get Campaign By User ID
  getCampaignByUserId: async () => {
    try {
      const res = await api.get(`/campaigns/user`);
      set({ campaignByUserId: res.data });
    } catch (error) {
      console.error(`Error fetching campaigns for user :`, error);
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
  createCampaign: async (campaignData, photoFile) => {
    try {
      set({ isLoading: true, error: null });

      // Membuat objek FormData untuk data campaign dan foto
      const formData = new FormData();
      Object.keys(campaignData).forEach((key) => {
        formData.append(key, campaignData[key]);
      });
      if (photoFile) {
        formData.append("photo", photoFile); // Tambahkan file foto jika ada
      }

      // Kirim data campaign ke server menggunakan POST
      const response = await api.post("/campaign", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Memperbarui state dengan campaign yang baru dibuat
      set((state) => ({
        campaigns: [...state.campaigns, response.data],
        error: null,
      }));

      return response.data; // Mengembalikan data campaign yang berhasil dibuat
    } catch (error) {
      // Menangani error jika ada
      const errorMessage =
        error.response?.data?.message || "Gagal membuat kampanye";
      set({ error: errorMessage });
      throw new Error(errorMessage); // Melempar error untuk penanganan lebih lanjut
    } finally {
      // Menyelesaikan status loading
      set({ isLoading: false });
    }
  },

  // Update accountNumber
  updateStatusTransfer: async (campaignId) => {
  try {
    set({ isLoading: true, error: null });

    // Kirim permintaan API untuk update status ke "On Progress"
    const response = await api.patch( `/campaign/${campaignId}/transfer/On%20Progress` );


    // Kembalikan response dari server
    set({ isLoading: false });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Gagal Request Penarikan Dana";
    set({ isLoading: false, error: errorMessage });
    throw new Error(errorMessage);
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
