import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
    </>
  );
}
