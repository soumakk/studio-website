import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="hero-wrap relative h-screen min-h-[700px]  px-12 pb-24 overflow-hidden">
      {/* Background */}
      <div
        className="hero-bg absolute inset-0"
        style={{
          background: `
            linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,.1) 50%, rgba(8,8,8,.1) 100%),
            url('/images/render-17.png') center/cover no-repeat`,
        }}
      />

      <Container className="flex items-end h-full">
        <div className="relative z-10 ">
          {/*<div className="inline-flex items-center gap-3 mb-7 text-[.6rem] tracking-[.32em] uppercase text-gold border border-gold/30 px-4 py-2">
            Open for Projects &nbsp;·&nbsp; 2025
          </div>*/}

          <h1
            className="font-display font-light text-white leading-[.92] max-w-lg"
            style={{ fontSize: "clamp(4rem,5.5vw,5.5rem)" }}
          >
            3D product <em className="italic text-gold-lt">visualization</em>{" "}
            <br />& animation
          </h1>

          <p className="mt-6 max-w-lg text-lg text-stone/75">
            Hi, I'm Soumak. I create stunning and cinematic 3D product visuals
            and animations for brands that want honest, quality work.
          </p>

          <Button href="#work" className="mt-10">
            View Selected Work <span>→</span>
          </Button>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute right-12 bottom-20 flex flex-col items-center gap-3">
        <div className="w-px h-14 bg-gradient-to-b from-gold to-transparent origin-top animate-scroll-bar" />
        <span className="text-[.56rem] tracking-[.28em] uppercase text-dim">
          Scroll
        </span>
      </div>
    </section>
  );
}
