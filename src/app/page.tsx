import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorsSection from "@/components/InstructorsSection";
import ScroollSection from "@/components/ScroollSection";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <ScroollSection />
      <Testimonial />
      <UpcomingWebinars/>
      <InstructorsSection/>
      <Footer/>
    </main>
  );
}
