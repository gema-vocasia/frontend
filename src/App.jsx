import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuatCampaign from "./pages/BuatCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buat-campaign" element={<BuatCampaign />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
