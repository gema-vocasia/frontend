import { BrowserRouter, Routes, Route } from "react-router-dom";
import TentangKami from "./pages/TentangKami";
import Home from "./pages/Home";
import AllKampanye from "./pages/AllKampanye"; // Import komponen AllKampanye

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route untuk Home */}
        <Route path="/TentangKami" element={<TentangKami />} /> {/* Route untuk TentangKami */}
        <Route path="/all-kampanye" element={<AllKampanye />} /> {/* Route untuk AllKampanye */}
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
