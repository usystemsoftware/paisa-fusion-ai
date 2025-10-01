import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <Industries />
      <Insights />
      <Footer />
    </div>
  );
};

export default Index;
