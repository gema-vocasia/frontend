import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
