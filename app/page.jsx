import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcademyHero from "@/components/academy/AcademyHero";
import Opportunities from "@/components/academy/Opportunities";
import WhatWeCover from "@/components/academy/WhatWeCover";
import Practical from "@/components/academy/Practical";
import FeaturedProgram from "@/components/academy/FeaturedProgram";
import LearningStages from "@/components/academy/LearningStages";
import BuiltFor from "@/components/academy/BuiltFor";

export default function Home() {
  return (
    <main>
      <Header />
      <AcademyHero />
      <Opportunities />
      <WhatWeCover />
      <Practical />
      <FeaturedProgram />
      <LearningStages />
      <BuiltFor />
      <Footer />
    </main>
  );
}