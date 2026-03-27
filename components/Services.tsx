import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    num: "01",
    name: "Lighting & Rendering",
    desc: "Studio and environmental lighting setups designed to make every surface shine — hero shots, e-commerce, editorial, and lifestyle.",
    icon: "◉",
  },
  {
    num: "02",
    name: "3D Animation",
    desc: "Product reveals, turntables, and campaign animations. Motion that communicates value with cinematic fluidity.",
    icon: "▷",
  },
  {
    num: "03",
    name: "Art Direction",
    desc: "Full creative oversight — mood, palette, composition, narrative. Shaping the visual identity of your entire campaign.",
    icon: "◻",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-16 lg:py-20">
      <Container>
        <h2
          className={`font-display font-light leading-none text-5xl text-ink mb-5`}
        >
          <span className="italic text-gold">Services</span> I provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.num} className="s-row group py-10 flex flex-col gap-6">
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl text-gold/50 tracking-widest">
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <p className="s-title font-display text-3xl text-ink mb-3">
                  {s.name}
                </p>
                <p className="text-base leading-normal text-dim">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
