import Container from "./Container";
import R from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "The renders were jaw-dropping. Our conversion rate on the product page jumped 34% within two weeks of swapping in the new visuals.",
    name: "Camille Fontaine",
    role: "Creative Director · Maison Noir Paris",
    delay: undefined,
    mt: "",
  },
  {
    quote:
      "We launched with zero physical samples — entirely CGI. The detail was so convincing our investors didn't believe it wasn't photography.",
    name: "Daniel Osei",
    role: "Founder & CEO · Helios Audio",
    delay: "d1" as const,
    mt: "mt-8",
  },
  {
    quote:
      "Beyond technical brilliance — a genuine creative collaborator. The art direction brought our brand's soul into every single frame.",
    name: "Yuki Tanaka",
    role: "VP Marketing · Aura Skincare",
    delay: "d2" as const,
    mt: "mt-16",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink2 px-12 py-28">
      <Container>
        <R className="flex items-center gap-4 mb-3 text-[.6rem] tracking-[.35em] uppercase text-gold">
          <span className="block w-8 h-px bg-gold" /> Client Words
        </R>
        <R
          as="h2"
          delay="d1"
          className="font-display font-light leading-none text-white mb-16 text-5xl"
        >
          What brands <em className="italic text-gold-lt">say</em>
        </R>

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <R
              key={t.name}
              className={`t-card bg-ink3 border border-white/[.04] p-10 relative ${t.mt}`}
              delay={t.delay}
            >
              <div className="absolute top-8 right-8 flex gap-1 text-gold text-[.58rem]">
                ★ ★ ★ ★ ★
              </div>
              <div className="font-display leading-[.7] text-gold/20 mb-5 text-[4.5rem]">
                "
              </div>
              <p className="font-display font-light italic text-[1.28rem] leading-[1.75] text-white/80 mb-7">
                {t.quote}
              </p>
              <div className="w-8 h-px bg-gold/40 mb-5" />
              <p className="text-[.7rem] font-semibold tracking-[.12em] uppercase text-white">
                {t.name}
              </p>
              <p className="text-[.6rem] tracking-[.1em] text-dim mt-1">
                {t.role}
              </p>
            </R>
          ))}
        </div>
      </Container>
    </section>
  );
}
