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
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-campaign",
    element: <AllKampanye />,
  },
  {
    path: "/campaign/:id",
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
    path: "/campaignsaya",
    element: <CampaignSaya />,
  },
  {
    path: "/riwayat",
    element: <Riwayat />,
  },
]);
