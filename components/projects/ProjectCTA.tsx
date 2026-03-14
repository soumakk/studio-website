import Link from "next/link";
import Container from "../ui/Container";

export default function ProjectCTA() {
  return (
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
  );
}
