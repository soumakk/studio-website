import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import R from "./ScrollReveal";

const tags = [
  "Blender",
  "Product Viz",
  "3D Animation",
  "Lighting",
  "Rendering",
  "Art Direction",
];

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-16 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <R delay="d1" className="flex flex-col gap-8">
            <SectionHeading
              subHeading="About"
              theme="light"
              heading={
                <>
                  A artist who lets the{" "}
                  <em className="italic text-gold-lt">work speak.</em>
                </>
              }
            />

            <R
              delay="d2"
              className="lg:hidden border-draw aspect-[1/1] w-full -mt-8 mb-12 border border-white/5 flex items-center justify-center"
            >
              <img
                src={"/images/me.png"}
                alt="Soumak"
                className="object-cover h-full"
              />
            </R>

            <p className="text-lg leading-relaxed text-stone-600 -mt-8">
              I'm Soumak — a 3D product visualization artist working with
              Blender to create clean, detailed renders and animations. I care
              about craft, honest communication, and work I'm proud to put my
              name on.
            </p>

            <p className="text-lg leading-relaxed text-stone-600">
              I'm Soumak — a 3D product visualization artist working with
              Blender to create clean, detailed renders and animations. I care
              about craft, honest communication, and work I'm proud to put my
              name on.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs tracking-[.15em] font-medium uppercase text-gold border border-gold/25 px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </R>

          <R
            delay="d2"
            className="hidden lg:flex border-draw aspect-[1/1] w-full border border-white/5 items-center justify-center"
          >
            <img
              src={"/images/me.png"}
              alt="Soumak"
              className="object-cover h-full"
            />
          </R>
        </div>
      </Container>
    </section>
  );
}
