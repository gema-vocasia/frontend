import { createBrowserRouter } from "react-router-dom";
import {
  Donasi,
  Register,
  LupaSandi,
  Login,
  Profile,
  BuatCampaign,
  EditProfile,
  Home,
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/donasi",
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
]);
