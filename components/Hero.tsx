import Link from "next/link";
import Container from "./Container";

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
          <div className="inline-flex items-center gap-3 mb-7 text-[.6rem] tracking-[.32em] uppercase text-gold border border-gold/30 px-4 py-2">
            Open for Projects &nbsp;·&nbsp; 2025
          </div>

          <h1
            className="font-display font-light text-white leading-[.92]"
            style={{ fontSize: "clamp(1.8rem,5.5vw,5.5rem)" }}
          >
            Crafting
            <br />
            <em className="italic text-gold-lt">visual realities</em>
            <br />
            in three
            <br />
            dimensions.
          </h1>

          <p className="mt-6 max-w-sm text-[.8rem] leading-[1.95] tracking-[.07em] text-stone/75">
            Product visualization that sells — modeling, lighting, animation
            &amp; full art direction for brands that demand extraordinary.
          </p>

          <Link
            href="#work"
            className="btn-cta inline-flex items-center gap-5 mt-10 bg-gold text-ink font-bold text-[.7rem] tracking-[.22em] uppercase px-9 py-4 no-underline"
          >
            View Selected Work <span>→</span>
          </Link>
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
