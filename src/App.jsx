import { BrowserRouter, Routes, Route } from "react-router-dom";
import TentangKami from "./pages/TentangKami";
import Home from "./pages/Home";
import AllKampanye from "./pages/AllKampanye";
import CampaignDetail from "./pages/CampaignDetail"; // Import komponen CampaignDetail

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route untuk Home */}
        <Route path="/TentangKami" element={<TentangKami />} /> {/* Route untuk TentangKami */}
        <Route path="/all-kampanye" element={<AllKampanye />} /> {/* Route untuk AllKampanye */}
        <Route path="/campaign-detail/:id" element={<CampaignDetail />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;

