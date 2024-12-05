import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donasi from "./pages/Donasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/donasi" element={<Donasi />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
