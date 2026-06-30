import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedVenues from "@/components/FeaturedVenues";
import WhyEhgz from "@/components/WhyEhgz";
import Stats from "@/components/Stats";
import ForVenues from "@/components/ForVenues";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedVenues />
      <HowItWorks />
      <WhyEhgz />
      <Stats />
      <Download />
      <ForVenues />
      <Footer />
    </main>
  );
}
