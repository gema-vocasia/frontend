import {createBrowserRouter} from "react-router-dom";
import { Donasi, Profile, BuatCampaign, EditProfile, Home, CampaignDetail } from "../pages";

export const routes = createBrowserRouter([
    {
        path: "/",
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
    {
        path: "/campaign-detail/:id",
        element: <CampaignDetail />,
    }
])
