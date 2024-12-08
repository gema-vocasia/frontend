import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuatCampaign from "./pages/BuatCampaign";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile"
import Donasi from "./pages/Donasi";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/buat-campaign" element={<BuatCampaign />} />
        <Route path="/donasi" element={<Donasi />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
