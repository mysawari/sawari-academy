import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuestionsLedger from "@/components/QuestionsLedger";
import Curriculum from "@/components/Curriculum";
import JourneyFlow from "@/components/JourneyFlow";
import Audience from "@/components/Audience";
import Host from "@/components/Host";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";

export default function Workshop() {
  return (
    <main>
      <Header />
      <Hero />
      <QuestionsLedger />
      <Curriculum />
      <JourneyFlow />
      <Audience />
      <Host />
      <PricingCTA />
      <Footer />
    </main>
  );
}