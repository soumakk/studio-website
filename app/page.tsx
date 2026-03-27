import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Nav />

      <Work />
      <Services />
      {/*<Testimonials />*/}
      {/*<About />*/}
      <Contact />
      <Footer />
    </>
  );
}
