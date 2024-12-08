import {createBrowserRouter} from "react-router-dom";
import { Donasi, Profile, BuatCampaign, EditProfile, TentangKami, Home } from "../pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: "LinganguLingganguWazai",
    },
    {
        path: "/tentang-kami",
        element: <TentangKami />,
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
    }
])
