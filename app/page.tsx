import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const TICKER = [
    "Product Visualization",
    "—",
    "Studio Lighting",
    "—",
    "Motion Design",
    "—",
    "Art Direction",
    "—",
    "CGI Production",
    "—",
  ];
  return (
    <>
      <Nav />
      <Hero />
      <div className="relative z-10 border-t border-white/10 bg-foreground/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="text-xs font-body uppercase tracking-[0.2em] text-white/50 px-5 shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <Work />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
