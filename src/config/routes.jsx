import {createBrowserRouter} from "react-router-dom";
import { Donasi, Profile, BuatCampaign, EditProfile, Home, AllCampaign } from "../pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/all-campaign",
        element: <AllCampaign />,
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
