import {createBrowserRouter} from "react-router-dom";
import { Donasi, Profile, BuatCampaign, EditProfile } from "../pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: "LinganguLingganguWazai",
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
