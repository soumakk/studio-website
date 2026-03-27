import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ProjectCTA() {
  return (
    <section className="bg-cream px-6 py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm tracking-wider font-medium uppercase text-ink/60 mb-3">
              Ready to create something extraordinary?
            </p>
            <h2 className="font-display font-light text-ink leading-none text-5xl">
              Let&apos;s work together.
            </h2>
          </div>
          <Button
            href="/#contact"
            className="justify-center transition-colors duration-300"
          >
            Start a Project →
          </Button>
        </div>
      </Container>
    </section>
  );
}
