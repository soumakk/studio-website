import { cn } from "@/lib/utils";
import Container from "../Container";

export default function ProjectInfo({ info }: { info: object }) {
  return (
    <section className="bg-ink3 border-y border-white/[.05]">
      <Container>
        <div
          className={cn(
            "px-12 py-10 grid gap-8 divide-x divide-white/[.05]",
            `grid-cols-${Object.keys(info).length ?? 4}`,
          )}
        >
          {Object.entries(info).map(([lbl, val]) => (
            <div key={lbl} className="px-8 first:pl-0">
              <p className="text-xs tracking-[.28em] uppercase text-gold mb-2">
                {lbl}
              </p>
              <p className="font-display text-[1.1rem] text-white/80">{val}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
