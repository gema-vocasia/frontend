import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./config/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./config/auth";

const App = () => {
  const initialize = useAuth((state) => state.initialize);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  <ToastContainer />;
  return <RouterProvider router={routes} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
