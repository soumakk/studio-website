import Link from "next/link";
import R from "./ScrollReveal";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

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
    <section id="work" className="bg-cream px-6 py-28">
      <Container>
        {/* Header */}
        <SectionHeading
          theme="light"
          subHeading="Selected Works"
          heading={
            <>
              {" "}
              Crafted <em className="italic text-gold-lt">renders</em>
              <br />
              that convert
            </>
          }
          button={{
            href: "/projects",
            title: "More Projects",
          }}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
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
