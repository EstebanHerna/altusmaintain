import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ApiDemoSection from "@/components/ApiDemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketSection from "@/components/MarketSection";
import TractionSection from "@/components/TractionSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import GoToMarketSection from "@/components/GoToMarketSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import FinancialsSection from "@/components/FinancialsSection";
import AskSection from "@/components/AskSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ApiDemoSection />
    <HowItWorksSection />
    <MarketSection />
    <TractionSection />
    <CompetitiveSection />
    <GoToMarketSection />
    <PricingSection />
    <TeamSection />
    <FinancialsSection />
    <AskSection />
    <Footer />
  </div>
);

export default Index;
