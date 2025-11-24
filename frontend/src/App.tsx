import { SweetHubHeader } from "./components/SweetHubHeader";
import { SweetHubHero } from "./components/SweetHubHero";
import { SweetHubSteps } from "./components/SweetHubSteps";
import { SweetHubFeatures } from "./components/SweetHubFeatures";
import { SweetHubTestimonials } from "./components/SweetHubTestimonials";
import { SweetHubFAQ } from "./components/SweetHubFAQ";
import { SweetHubCTA } from "./components/SweetHubCTA";
import { SweetHubFooter } from "./components/SweetHubFooter";
import { AuthScreen } from "./components/AuthScreen";
import { DashboardScreen } from "./components/DashboardScreenComplete";
import { PublicProfileScreen } from "./components/PublicProfileScreen";
import { useState } from "react";

type Screen = "landing" | "auth" | "dashboard" | "public";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  if (currentScreen === "auth") {
    return (
      <AuthScreen 
        onBack={() => setCurrentScreen("landing")}
        onSuccess={() => setCurrentScreen("dashboard")}
      />
    );
  }

  if (currentScreen === "dashboard") {
    return (
      <DashboardScreen 
        onBack={() => setCurrentScreen("landing")}
        onViewPublic={() => setCurrentScreen("public")}
      />
    );
  }

  if (currentScreen === "public") {
    return <PublicProfileScreen onBack={() => setCurrentScreen("dashboard")} />;
  }

  return (
    <div className="min-h-screen">
      <SweetHubHeader onLoginClick={() => setCurrentScreen("auth")} />
      <main>
        <SweetHubHero onGetStarted={() => setCurrentScreen("auth")} />
        <SweetHubSteps />
        <SweetHubFeatures />
        <SweetHubTestimonials />
        <SweetHubFAQ />
        <SweetHubCTA onGetStarted={() => setCurrentScreen("auth")} />
      </main>
      <SweetHubFooter />
    </div>
  );
}