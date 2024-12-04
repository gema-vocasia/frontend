import { BrowserRouter, Routes, Route } from "react-router-dom";
import TentangKami from "./pages/TentangKami";
import Home from "./pages/Home"; // Import komponen Home

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Tambahkan route untuk Home */}
        <Route path="/TentangKami" element={<TentangKami />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
