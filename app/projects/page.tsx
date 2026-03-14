import Link from "next/link";
import { caseStudies } from "@/lib/cases";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Case Studies — Soumak",
  description: "In-depth project breakdowns — process, challenge, and outcome.",
};

export default function CaseStudyIndex() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="bg-ink pt-48 pb-24 px-12">
        <Container>
          <div className="flex items-center gap-4 mb-4 text-[.6rem] tracking-[.35em] uppercase text-gold">
            <span className="block w-8 h-px bg-gold" /> Selected Projects
          </div>
          <h1
            className="font-display font-light leading-none text-white mb-6"
            style={{ fontSize: "clamp(3.5rem,7vw,7rem)" }}
          >
            Case <em className="italic text-gold-lt">Studies</em>
          </h1>
          <p className="text-[.85rem] leading-relaxed text-dim max-w-lg">
            Deep-dives into the process behind the work — challenge, approach,
            and outcome for selected client projects.
          </p>
        </Container>
      </section>

      {/* Case study list */}
      <section className="bg-ink pb-32 px-12">
        <Container>
          <div className="flex flex-col gap-0">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-study/${cs.slug}`}
                className="group grid grid-cols-12 gap-8 items-center py-10 border-t border-white/[.05] no-underline hover:border-gold/20 transition-colors duration-300"
              >
                {/* Number */}
                <span className="col-span-1 font-display text-[.85rem] text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Thumbnail */}
                <div className="col-span-3 overflow-hidden aspect-video bg-ink3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.thumbImage}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                  />
                </div>

                {/* Meta */}
                <div className="col-span-5">
                  <p className="text-[.58rem] tracking-[.25em] uppercase text-gold mb-2">
                    {cs.category}
                  </p>
                  <h2 className="font-display text-[2rem] font-light text-white leading-tight mb-3 group-hover:text-gold-lt transition-colors duration-300">
                    {cs.title}
                  </h2>
                  <p className="text-[.78rem] leading-relaxed text-dim line-clamp-2">
                    {cs.overview.slice(0, 120)}…
                  </p>
                </div>

                {/* Services + Arrow */}
                <div className="col-span-3 flex flex-col items-end gap-3">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {cs.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[.54rem] tracking-[.12em] uppercase text-gold/70 border border-gold/20 px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
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
