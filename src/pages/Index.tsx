import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import WhyJoinUs from "@/components/WhyJoinUs";
import Achievers from "@/components/Achievers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OurApproach />
      <WhyJoinUs />
      <Achievers />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
