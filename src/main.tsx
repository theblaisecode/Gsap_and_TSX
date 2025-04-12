import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ToastContainer />
  </>
);
