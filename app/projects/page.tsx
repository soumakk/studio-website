import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import { PROJECTS } from "@/lib/data";

export const metadata = {
  title: "Case Studies — Soumak",
  description: "In-depth project breakdowns — process, challenge, and outcome.",
};

export default function CaseStudyIndex() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="bg-ink pt-36 lg:pt-48 pb-24 px-6">
        <Container>
          <div className="flex items-center gap-4 mb-4 text-xs tracking-[.35em] uppercase text-gold">
            <span className="block w-8 h-px bg-gold" /> Selected Projects
          </div>
          <h1
            className="font-display font-light leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.5rem,5.5vw,5.5rem)" }}
          >
            Case <em className="italic text-gold-lt">Studies</em>
          </h1>
          <p className="text-base lg:text-lg leading-relaxed text-dim max-w-lg">
            Deep-dives into the process behind the work — challenge, approach,
            and outcome for selected client projects.
          </p>
        </Container>
      </section>

      {/* Case study list */}
      <section className="bg-ink pb-32 px-6">
        <Container>
          <div className="flex flex-col gap-0">
            {PROJECTS.map((item, i) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group grid grid-cols-6 lg:grid-cols-12 gap-8 items-center py-10 border-t border-white/[.05] no-underline hover:border-gold/20 transition-colors duration-300"
              >
                {/* Number */}
                <span className="hidden lg:block col-span-1 font-display text-2xl text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Thumbnail */}
                <div className="col-span-6 lg:col-span-2 overflow-hidden aspect-square bg-ink3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                  />
                </div>

                {/* Meta */}
                <div className="col-span-6 lg:col-span-6">
                  <p className="text-xs tracking-[.25em] uppercase text-gold mb-2">
                    {item.cat}
                  </p>
                  <h2 className="font-display text-[2rem] font-light text-white leading-tight mb-3 group-hover:text-gold-lt transition-colors duration-300">
                    {item.title}
                  </h2>
                </div>

                {/* Services + Arrow */}
                <div className="hidden col-span-3 lg:flex flex-col items-end gap-3">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
