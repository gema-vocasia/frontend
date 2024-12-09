import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);
