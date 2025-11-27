import { Routes, Route } from "react-router-dom";
import App from "../App";
import { AuthScreen } from "../components/AuthScreen";
import { DashboardScreen } from "../components/DashboardScreenComplete";
import { PublicProfileScreen } from "../components/PublicProfileScreen";

export function AppRoutes() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<App />} />

      {/* Auth */}
      <Route path="/auth" element={<AuthScreen />} />

      {/* Dashboard privado */}
      <Route path="/dashboard" element={<DashboardScreen />} />

      {/* Perfil público */}
      <Route path="/public-profile" element={<PublicProfileScreen />} />
    </Routes>
  );
}
