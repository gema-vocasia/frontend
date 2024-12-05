import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donasi from "./pages/Donasi";
import AllKampanye from "./pages/AllKampanye";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/donasi" element={<Donasi />} />
      <Route path="/all-kampanye" element={<AllKampanye />} /> {/* Route untuk AllKampanye */}
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
