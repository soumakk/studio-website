import Link from "next/link";
import R from "./ScrollReveal";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="bg-cream px-6 py-16 lg:py-28">
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
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {PROJECTS.map((p) => (
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
                  className="w-img w-full h-full object-cover aspect-4/5"
                />
                <div
                  className="w-over absolute inset-0 flex flex-col justify-end p-6 lg:p-12"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(8,8,8,.88) 0%,transparent 55%)",
                  }}
                >
                  <p className="hidden lg:block text-xs tracking-[.24em] uppercase text-gold mb-1">
                    {p.cat}
                  </p>
                  <p className="font-display text-2xl lg:text-3xl text-white">
                    {p.title}
                  </p>
                </div>
              </Link>
            </R>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/projects">View More Work</Button>
        </div>
      </Container>
    </section>
  );
}
