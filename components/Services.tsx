import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import R from "./ScrollReveal";

const services = [
  {
    num: "01",
    name: "Product Modeling",
    desc: "High-fidelity 3D models built from references, technical drawings, or concepts — with meticulous surface detail and material accuracy.",
    icon: "◈",
  },
  {
    num: "02",
    name: "Lighting & Rendering",
    desc: "Studio and environmental lighting setups designed to make every surface shine — hero shots, e-commerce, editorial, and lifestyle.",
    icon: "◉",
  },
  {
    num: "03",
    name: "3D Animation",
    desc: "Product reveals, turntables, and campaign animations. Motion that communicates value with cinematic fluidity.",
    icon: "▷",
  },
  {
    num: "04",
    name: "Art Direction",
    desc: "Full creative oversight — mood, palette, composition, narrative. Shaping the visual identity of your entire campaign.",
    icon: "◻",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-16 lg:py-28">
      <Container>
        <SectionHeading
          subHeading="What I Do"
          heading={
            <>
              End-to-end <em className="italic text-gold-lt">visualization</em>
              <br />& art direction
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/5">
          {services.map((s) => (
            <R
              key={s.num}
              className="s-row group p-10 border border-white/5 flex flex-col gap-6"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="font-display text-lg text-gold/50 tracking-widest">
                  {s.num}
                </span>
                <div className="s-icon w-10 h-10 border border-gold/20 flex items-center justify-center text-gold text-base">
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="s-title font-display text-3xl text-white mb-3">
                  {s.name}
                </p>
                <p className="text-base leading-normal text-dim">{s.desc}</p>
              </div>
            </R>
          ))}
        </div>
      </Container>
    </section>
  );
}
