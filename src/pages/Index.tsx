import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CreditScoreChecker from "@/components/CreditScoreChecker";
import LoanComparison from "@/components/LoanComparison";
import CreditCards from "@/components/CreditCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CreditScoreChecker />
      <LoanComparison />
      <CreditCards />
      <Footer />
    </div>
  );
};

export default Index;
