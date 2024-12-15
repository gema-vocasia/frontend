import { createBrowserRouter } from "react-router-dom";
import {
  Donasi,
  Register,
  LupaSandi,
  Resetpass,
  Login,
  Profile,
  BuatCampaign,
  EditProfile,
  Home,
  CampaignDetail,
  AllKampanye,
  Riwayat,
  CampaignSaya,
  TentangKami,
  ImageLicensePage,
  Faq,
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lisensi-gambar",
    element: <ImageLicensePage />,
  },
  {
    path: "/all-campaign",
    element: <AllKampanye />,
  },
  {
    path: "/campaign/:campaignId",
    element: <CampaignDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/forgot-password",
    element: <LupaSandi />,
  },
  {
    path: "/reset-password",
    element: <Resetpass />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/donasi/:campaignId",
    element: <Donasi />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/buat-campaign",
    element: <BuatCampaign />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/kampanye-saya",
    element: <CampaignSaya />,
  },
  {
    path: "/riwayat-donasi",
    element: <Riwayat />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);
