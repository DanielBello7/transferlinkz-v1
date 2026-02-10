import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { RootCauseSection } from "./RootCauseSection";
import { SolutionSection } from "./SolutionSection";
import { FixesSection } from "./FixesSection";
import { ImpactSection } from "./ImpactSection";
import { SuccessMetricsSection } from "./SuccessMetricsSection";
import { PositioningCta } from "./PositioningCta";
import { ContactFaqSection } from "./ContactFaqSection";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="page-bg-blue min-h-screen text-white font-sans">
      <Header />
      <Hero />
      <ProblemSection />
      <RootCauseSection />
      <SolutionSection />
      <FixesSection />
      <ImpactSection />
      <SuccessMetricsSection />
      <PositioningCta />
      <ContactFaqSection />
      <Footer />
    </div>
  );
}
