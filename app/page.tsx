import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import MatrixGrid from "@/components/MatrixGrid";
import DiagnosticQuiz from "@/components/DiagnosticQuiz";
import CaseStudy from "@/components/CaseStudy";
import RulesGrid from "@/components/RulesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <MatrixGrid />
      <DiagnosticQuiz />
      <CaseStudy />
      <RulesGrid />
      <Footer />
    </main>
  );
}
