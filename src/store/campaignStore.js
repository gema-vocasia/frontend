import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

const campaignStore = create((set) => ({
  campaign: [
    {
      categoryId: "6749a627f2a718270b6cff16",
      createdAt: "2024-12-10T09:00:00.000Z",
      deletedAt: null,
      description:
        "Bantuan untuk keluarga korban bencana alam yang kehilangan tempat tinggal.",
      endDate: "2025-01-10T17:00:00.000Z",
      photo: null,
      startDate: "2024-12-11T08:00:00.000Z",
      statusCampaign: 1,
      statusTransfer: "On Request",
      targetAmount: 1500000,
      title: "Bantuan Kemanusiaan untuk Korban Bencana",
      totalDonation: 0,
      updatedAt: "2024-12-10T09:30:00.000Z",
      userId: "674dd9a484b49322bd278d91",
      __v: 0,
      _id: "67507dc5894c10b0a61942a1",
      isUrgent: true,
    },
    {
      categoryId: "6749a627f2a718270b6cff17",
      createdAt: "2024-12-09T12:00:00.000Z",
      deletedAt: null,
      description: "Renovasi masjid yang rusak akibat banjir besar di desa terpencil.",
      endDate: "2025-02-01T16:00:00.000Z",
      photo: null,
      startDate: "2024-12-12T10:00:00.000Z",
      statusCampaign: 1,
      statusTransfer: "On Request",
      targetAmount: 2000000,
      title: "Renovasi Masjid di Desa Terpencil",
      totalDonation: 1000000,
      updatedAt: "2024-12-09T12:30:00.000Z",
      userId: "674dd9a484b49322bd278d92",
      __v: 0,
      _id: "67507dc5894c10b0a61942a2",
      isUrgent: true,
    },
    {
      categoryId: "6749a627f2a718270b6cff18",
      createdAt: "2024-12-08T14:00:00.000Z",
      deletedAt: null,
      description:
        "Kegiatan berbagi sembako untuk lansia dan fakir miskin di kota besar.",
      endDate: "2025-01-20T18:00:00.000Z",
      photo: null,
      startDate: "2024-12-15T10:00:00.000Z",
      statusCampaign: 1,
      statusTransfer: "On Request",
      targetAmount: 1000000,
      title: "Berbagi Sembako untuk Lansia",
      totalDonation: 0,
      updatedAt: "2024-12-08T14:30:00.000Z",
      userId: "674dd9a484b49322bd278d93",
      __v: 0,
      _id: "67507dc5894c10b0a61942a3",
      isUrgent: true,
    },
    {
      categoryId: "6749a627f2a718270b6cff17",
      createdAt: "2024-12-07T10:00:00.000Z",
      deletedAt: null,
      description:
        "Pengadaan buku dan seragam untuk siswa sekolah dasar kurang mampu.",
      endDate: "2025-03-15T17:00:00.000Z",
      photo: "PerlengkapanSekolah.png",
      startDate: "2024-12-20T09:00:00.000Z",
      statusCampaign: 1,
      statusTransfer: "On Request",
      targetAmount: 2500000,
      title: "Bantuan Pendidikan untuk Anak SD",
      totalDonation: 0,
      updatedAt: "2024-12-07T10:30:00.000Z",
      userId: "674dd9a484b49322bd278d94",
      __v: 0,
      _id: "67507dc5894c10b0a61942a4",
      isUrgent: false,
    },
    {
      categoryId: "6749a627f2a718270b6cff20",
      createdAt: "2024-12-06T09:30:00.000Z",
      deletedAt: null,
      description:
        "Program penghijauan kembali dengan menanam 1000 pohon di area kritis.",
      endDate: "2025-06-01T17:00:00.000Z",
      photo: null,
      startDate: "2024-12-25T10:00:00.000Z",
      statusCampaign: 1,
      statusTransfer: "On Request",
      targetAmount: 3000000,
      title: "Penghijauan Kembali Area Kritis",
      totalDonation: 0,
      updatedAt: "2024-12-06T09:45:00.000Z",
      userId: "674dd9a484b49322bd278d95",
      __v: 0,
      _id: "67507dc5894c10b0a61942a5",
      isUrgent: true,
    },
  ],
  // Get All Campaigns
  getCampaigns: async () => {
    try {
      const res = await api.get("/api/v1/campaigns");
      set({ campaign: res.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default campaignStore;
