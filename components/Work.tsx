import Link from "next/link";
import R from "./ScrollReveal";
import Container from "./Container";

const projects = [
  {
    slug: "aroma-perfume",
    src: "/images/project-1.png",
    alt: "Aroma Perfume",
    cat: "Product Modeling · Lighting · Animation",
    title: "Aroma Perfume — Fragrance Collection",
    cls: "col-span-6",
    delay: undefined,
  },
  // {
  //   slug: "helios-earbuds-launch",
  //   src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
  //   alt: "Cosmetics Campaign",
  //   cat: "Animation · Art Direction",
  //   title: "Aura — Skin Series Campaign",
  //   cls: "col-span-6",
  //   delay: "d1" as const,
  // },
];

export default function Work() {
  return (
    <section id="work" className="bg-ink2 px-12 py-28">
      <Container>
        {/* Header */}
        <R className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 text-[.6rem] tracking-[.35em] uppercase text-gold">
              <span className="block w-8 h-px bg-gold" /> Selected Works
            </div>
            <h2 className="font-display font-light leading-none text-white text-5xl">
              Crafted <em className="italic text-gold-lt">renders</em>
              <br />
              that convert
            </h2>
          </div>
          <Link
            href="/case-study"
            className="btn-cta inline-flex items-center gap-3 text-[.64rem] tracking-[.2em] uppercase text-stone no-underline"
          >
            Show More Work
          </Link>
        </R>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-5">
          {projects.map((p) => (
            <R
              key={p.title}
              className={`w-card ${p.cls} relative overflow-hidden cursor-pointer bg-ink3`}
              delay={p.delay}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="block w-full h-full"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-img w-full h-full object-cover"
                />
                <div
                  className="w-over absolute inset-0 flex flex-col justify-end p-12"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(8,8,8,.88) 0%,transparent 55%)",
                  }}
                >
                  <p className="text-[.57rem] tracking-[.24em] uppercase text-gold mb-1">
                    {p.cat}
                  </p>
                  <p className="font-display text-xl text-white">{p.title}</p>
                </div>
              </Link>
            </R>
          ))}
        </div>
      </Container>
    </section>
  );
}
