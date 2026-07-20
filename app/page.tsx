import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Compare from "@/components/Compare";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Compare />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
