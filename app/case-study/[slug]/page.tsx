import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudy, caseStudies } from "@/lib/cases";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Container from "@/components/Container";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Soumak`,
    description: cs.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[640px] px-12 pb-20 overflow-hidden">
        <Container className="flex items-end h-full">
          <div
            className="absolute inset-0"
            style={{
              background: `
              linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,.3) 50%, rgba(8,8,8,.15) 100%),
              linear-gradient(to right, rgba(8,8,8,.6) 0%, transparent 65%),
              url('/images/render-17.png') center/cover no-repeat`,
            }}
          />
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[.58rem] tracking-[.28em] uppercase text-gold border border-gold/30 px-3 py-1.5">
                {cs.category}
              </span>
              <span className="text-[.58rem] tracking-[.28em] uppercase text-dim">
                {cs.year}
              </span>
            </div>
            <h1
              className="font-display font-light text-white leading-[.92]"
              style={{ fontSize: "clamp(3rem,7vw,7rem)" }}
            >
              {cs.shortTitle}
            </h1>
            <p
              className="font-display italic text-gold-lt mt-3"
              style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}
            >
              {cs.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Meta strip ── */}
      <section className="bg-ink3 border-y border-white/[.05]">
        <Container>
          <div className="px-12 py-10 grid grid-cols-4 gap-8 divide-x divide-white/[.05]">
            {[
              ["Client", cs.client],
              ["Year", cs.year],
              ["Scope", cs.scope],
              ["Services", cs.services.join(" · ")],
            ].map(([lbl, val]) => (
              <div key={lbl} className="px-8 first:pl-0">
                <p className="text-[.57rem] tracking-[.28em] uppercase text-gold mb-2">
                  {lbl}
                </p>
                <p className="font-display text-[1.1rem] text-white/80">
                  {val}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Challenge ── */}
      <section className="bg-ink2 px-12 py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-[.6rem] tracking-[.35em] uppercase text-gold">
              <span className="block w-8 h-px bg-gold" /> The Challenge{" "}
              <span className="block w-8 h-px bg-gold" />
            </div>
            <p
              className="font-display font-light italic text-white/80 leading-[1.6]"
              style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
            >
              {cs.challenge}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-ink px-12 py-28">
        <Container>
          <div className="flex items-center gap-4 mb-12 text-[.6rem] tracking-[.35em] uppercase text-gold">
            <span className="block w-8 h-px bg-gold" /> Project Gallery
          </div>

          <div className="grid grid-cols-12 gap-5">
            {cs.gallery.map((img, i) => {
              const isWide = img.span === "wide";
              return (
                <div
                  key={i}
                  className={`overflow-hidden bg-ink3 ${isWide ? "col-span-8" : "col-span-4"}`}
                  style={{ aspectRatio: isWide ? "16/9" : "4/3" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-700"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-gold px-12 py-20">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[.6rem] tracking-[.32em] uppercase text-ink/60 mb-3">
                Ready to create something extraordinary?
              </p>
              <h2
                className="font-display font-light text-ink leading-none"
                style={{ fontSize: "clamp(2.5rem,5vw,5rem)" }}
              >
                Let&apos;s work together.
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 bg-ink text-gold font-bold text-[.72rem] tracking-[.22em] uppercase px-10 py-5 no-underline hover:bg-ink2 transition-colors duration-300"
            >
              Start a Project →
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Next project ── */}
      <Link
        href={`/case-study/${cs.nextSlug}`}
        className="group relative block overflow-hidden no-underline"
        style={{ height: "50vh" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.nextImage}
          alt={cs.nextTitle}
          className="w-full h-full object-cover brightness-50 group-hover:brightness-40 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[.6rem] tracking-[.32em] uppercase text-gold mb-4">
            Next Project
          </p>
          <h3
            className="font-display font-light text-white group-hover:text-gold-lt transition-colors duration-300"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}
          >
            {cs.nextTitle}
          </h3>
          <div className="mt-6 w-12 h-12 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300 text-xl">
            →
          </div>
        </div>
      </Link>

      <Footer />
    </>
  );
}
