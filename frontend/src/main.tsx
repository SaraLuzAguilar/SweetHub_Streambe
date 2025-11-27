import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext"; // ← AGREGA ESTO
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>               {/* ← ENVUELVE TODO */}
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AuthProvider>
);
