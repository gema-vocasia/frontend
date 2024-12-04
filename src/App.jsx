import { BrowserRouter, Routes, Route } from "react-router-dom";
import TentangKami from "./pages/TentangKami";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TentangKami" element={<TentangKami />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
