"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const SLIDES = ["/images/banner-1.png", "/images/banner-2.png"];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="hero-wrap relative h-screen min-h-[700px] px-6 pb-16 lg:pb-24 overflow-hidden">
      {/* ── Fading Background Slides ── */}
      {SLIDES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === activeIndex ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Hidden Embla — drives the index only, not visible */}
      <div ref={emblaRef} className="hidden">
        <div className="flex">
          {SLIDES.map((_, i) => (
            <div key={i} className="flex-[0_0_100%]" />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,.1) 50%, rgba(8,8,8,.1) 100%)`,
        }}
      />

      {/* Content */}
      <Container className="flex items-end h-full">
        <div className="relative z-10">
          <h1
            className="font-display font-light text-white leading-[.92] max-w-lg"
            style={{ fontSize: "clamp(2.5rem,5.5vw,5.5rem)" }}
          >
            3D product <em className="italic text-gold-lt">visualization</em>{" "}
            <br />& animation
          </h1>
          <p className="mt-6 max-w-lg text-base lg:text-lg text-stone/75">
            Hi, I'm Soumak. I create stunning and cinematic 3D product visuals
            and animations for brands that want honest, quality work.
          </p>
          <Button href="#work" className="mt-10">
            View Selected Work <span>→</span>
          </Button>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute right-12 bottom-20 flex flex-col items-center gap-3 z-10">
        <div className="w-px h-14 bg-gradient-to-b from-gold to-transparent origin-top animate-scroll-bar" />
        <span className="text-[.56rem] tracking-[.28em] uppercase text-dim">
          Scroll
        </span>
      </div>
    </section>
  );
}
