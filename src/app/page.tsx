import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
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
    </main>
  );
}
