import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import Container from "./ui/Container";

export default function Work() {
  return (
    <section id="work" className=" px-6 py-16 lg:py-20">
      <Container>
        <div className="mt-0 mb-20 max-w-2xl">
          <h2
            className={`font-display font-light leading-none text-5xl  text-ink mb-5`}
          >
            3d Cinematic Animations for Brands who needs to stand out.
          </h2>
          <p className="font-body text-lg text-ink">
            3D animations and visualizations for beauty, fragrance, and cosmetic
            brands — built to stop the scroll and tell the story behind what you
            sell.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`w-card ${p.cls} relative overflow-hidden cursor-pointer bg-ink3 group`}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="block w-full h-full"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-img w-full h-full object-cover "
                />
                <div className="w-over opacity-0 absolute inset-0 flex flex-col justify-center items-center p-6 lg:p-12">
                  <p className="font-display text-2xl lg:text-4xl text-white">
                    {p.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/*<div className="flex justify-center mt-12">
          <Button href="/projects">View More Work</Button>
        </div>*/}
      </Container>
    </section>
  );
}
