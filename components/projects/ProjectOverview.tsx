import Container from "../ui/Container";

export default function ProjectOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-ink2 px-12 py-28">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm tracking-[.35em] uppercase text-gold">
            <span className="block w-8 h-px bg-gold" />
            {title}
            <span className="block w-8 h-px bg-gold" />
          </div>
          <p className="font-display font-light italic text-white/80 leading-[1.6] text-2xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
