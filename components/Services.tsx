import Container from "./Container";
import R from "./ScrollReveal";

const services = [
  {
    num: "01",
    name: "Product Modeling",
    desc: "High-fidelity 3D models built from reference, technical drawings, or concept — with meticulous surface detail, material accuracy, and production-ready topology.",
    tags: ["Hard Surface", "Organic Forms", "CAD Import"],
    icon: "◈",
  },
  {
    num: "02",
    name: "Product Lighting",
    desc: "Studio, environmental, and dramatic lighting setups designed to make every surface sing — hero shots, e-commerce, editorial, and lifestyle compositing.",
    tags: ["HDRI", "Studio Setup", "Compositing"],
    icon: "◉",
  },
  {
    num: "03",
    name: "3D Animation",
    desc: "Product reveal sequences, turntables, exploded views, and full campaign animations. Motion that communicates value with cinematic fluidity.",
    tags: ["Reveal Sequences", "Motion Graphics", "Looping Assets"],
    icon: "▷",
  },
  {
    num: "04",
    name: "Art Direction",
    desc: "Full creative oversight — mood, palette, composition, narrative. I work directly with brand and founders to shape the visual identity of your entire campaign.",
    tags: ["Moodboarding", "Brand Strategy", "Creative Concepting"],
    icon: "◻",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-12 py-28">
      <Container>
        <R className="flex items-center gap-4 mb-3 text-[.6rem] tracking-[.35em] uppercase text-gold">
          <span className="block w-8 h-px bg-gold" /> What I Do
        </R>
        <R
          as="h2"
          delay="d1"
          className="font-display font-light leading-none text-white mb-16 text-5xl"
        >
          End-to-end <em className="italic text-gold-lt">visualization</em>
          <br />
          &amp; art direction
        </R>

        <div className="max-w-4xl mx-auto">
          {/* List */}
          <R className="" delay="d2">
            {services.map((s) => (
              <div
                key={s.num}
                className="s-row grid gap-8 items-start py-8"
                style={{ gridTemplateColumns: "52px 1fr auto" }}
              >
                <span className="font-display text-[.82rem] text-gold/60 pt-1">
                  {s.num}
                </span>
                <div>
                  <p className="s-title font-display text-[2rem] text-white mb-2">
                    {s.name}
                  </p>
                  <p className="text-[.78rem] leading-[1.9] text-dim max-w-lg">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[.55rem] tracking-[.13em] uppercase text-gold border border-gold/25 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="s-icon w-11 h-11 border border-gold/20 flex items-center justify-center text-gold text-lg mt-1">
                  {s.icon}
                </div>
              </div>
            ))}
          </R>
        </div>
      </Container>
    </section>
  );
}
