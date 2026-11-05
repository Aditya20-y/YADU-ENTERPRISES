import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <SelectedWork />
        <Process />
        <Pricing />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
