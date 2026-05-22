import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/sections/Hero";
import AnnouncementBanner from "@/components/sections/AnnouncementBanner";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Credibility from "@/components/sections/Credibility";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyAtos from "@/components/sections/WhyAtOS";
import Partnerships from "@/components/sections/Partnerships";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-base" style={{ fontFamily: "DM Sans" }}>
      {/* Mobile top bar */}
      <Navbar onHamburgerClick={() => setMobileNavOpen(true)} />

      {/* Fixed left sidebar (desktop always-on, mobile overlay) */}
      <Sidebar
        mobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />

      {/* Main content — offset by sidebar on desktop */}
      <div className="md:ml-[250px]">
        {/* Spacer for mobile top bar */}
        <div className="md:hidden h-14" />

        <main>
          <Hero />
          <AnnouncementBanner />
          <LogoMarquee />
          <Credibility />
          <Services />
          <Stats />
          <WhyAtos />
          <Partnerships />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}
