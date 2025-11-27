import { SweetHubHeader } from "./components/SweetHubHeader";
import { SweetHubHero } from "./components/SweetHubHero";
import { SweetHubSteps } from "./components/SweetHubSteps";
import { SweetHubFeatures } from "./components/SweetHubFeatures";
import { SweetHubTestimonials } from "./components/SweetHubTestimonials";
import { SweetHubFAQ } from "./components/SweetHubFAQ";
import { SweetHubCTA } from "./components/SweetHubCTA";
import { SweetHubFooter } from "./components/SweetHubFooter";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header con botón de login */}
      <SweetHubHeader onLoginClick={() => navigate("/auth")} />

      <main>
        {/* Hero con CTA para ir a auth */}
        <SweetHubHero onGetStarted={() => navigate("/auth")} />

        <SweetHubSteps />
        <SweetHubFeatures />
        <SweetHubTestimonials />
        <SweetHubFAQ />
        
        {/* CTA al final del landing */}
        <SweetHubCTA onGetStarted={() => navigate("/auth")} />
      </main>

      <SweetHubFooter />
    </div>
  );
}
