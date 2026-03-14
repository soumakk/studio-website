import Container from "../ui/Container";

export default function ProjectHero({
  title,
  banner,
  tagline,
}: {
  title: string;
  banner: string;
  tagline?: string;
}) {
  return (
    <section className="relative h-screen min-h-[640px] px-12 pb-20 overflow-hidden">
      <Container className="flex items-end h-full">
        <div
          className="absolute inset-0"
          style={{
            background: `
            linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,.1) 50%, rgba(8,8,8,.1) 100%),
            url(${banner}) center/cover no-repeat`,
          }}
        />
        <div className="relative z-10 max-w-4xl">
          {/*<div className="flex items-center gap-3 mb-6">
            <span className="text-[.58rem] tracking-[.28em] uppercase text-gold border border-gold/30 px-3 py-1.5">
              Fragrance
            </span>
          </div>*/}
          <h1
            className="font-display font-light text-white leading-[.92]"
            style={{ fontSize: "clamp(3rem,7vw,5rem)" }}
          >
            {title}
          </h1>
          <p
            className="font-display italic text-gold-lt mt-3"
            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
          >
            {tagline}
          </p>
        </div>
      </Container>
    </section>
  );
}
